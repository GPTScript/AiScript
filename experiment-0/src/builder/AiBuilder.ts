import AiParserListener from "../parser/AiParserListener";
import {CharStream, CommonTokenStream, FileStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token} from "antlr4";
import IStatement from "../statement/IStatement";
import AiParser, {
    Assign_statementContext, AssignableContext, ExpressionContext, Literal_expressionContext,
    Object_literalContext, StatementContext,
    Type_declarationContext,
    Type_idContext
} from "../parser/AiParser";
import {fileExists} from "../utils/FileUtils";
import AiLexer from "../parser/AiLexer";
import CodeFragment from "./CodeFragment";
import Fragment from "./Fragment";
import TypeIdentifier from "./TypeIdentifier";
import Identifier from "./Identifier";
import IExpression from "../expression/IExpression";
import KeyValuePair from "../utils/KeyValuePair";
import ObjectLiteral from "../literal/ObjectLiteral";
import TypeDeclaration from "../assign/TypeDeclaration";
import IAssignable from "../assign/IAssignable";
import AssignStatement from "../statement/AssignStatement";

interface IndexedNode {
    __id?: number;
}

export default class AiBuilder extends AiParserListener {

    static parse_statement(data: string): IStatement | null {
        return AiBuilder.doParse<IStatement>((parser: AiParser) => parser.statement(), data);
    }

    static doParse<T>(rule: (parser: AiParser) => ParseTree, data?: string, stream?: CharStream): T | null {
        try {
            const isFile = data && fileExists(data);
            const path = isFile ? data : "";
            stream = stream || isFile ? new FileStream(data) : new CharStream(data);
            const lexer = new AiLexer(stream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new AiParser(tokenStream);
            const tree = rule(parser);
            const builder = new AiBuilder(parser, path);
            const walker = new ParseTreeWalker();
            walker.walk(builder, tree);
            return builder.getNodeValue<T>(tree);
        } catch (e: any) {
            if (e instanceof Error)
                console.log(e.stack);
        }
    }

    parser: AiParser;
    path: string;
    nodeValues = new Map<number, object>();
    nextNodeId = 0;

    constructor(parser: AiParser, path: string) {
        super();
        this.parser = parser;
        this.path = path;
    }

    getNodeValue<T>(node: ParseTree): T | null {
        const indexedNode = node as IndexedNode;
        const id = indexedNode == null ? undefined : indexedNode.__id;
        if (id == undefined)
            return null;
        else
            return this.nodeValues.get(id) as unknown as T || null;
    }

    setNodeValue(node: ParserRuleContext, value: object | null) {
        if(value == null)
            return;
        const indexedNode = node as IndexedNode;
        let id = indexedNode.__id
        if (id == undefined) {
            id = this.nextNodeId++;
            indexedNode.__id = id;
        }
        this.nodeValues.set(id, value);
        if (value instanceof CodeFragment) {
            this.buildSection(node, value);
        }
    }

    buildSection(node: ParserRuleContext, codeSection: CodeFragment) {
        if(!codeSection.fragment) {
            const first = this.findFirstValidToken(node.start.tokenIndex);
            const last = this.findLastValidToken(node.stop!.tokenIndex);
            codeSection.fragment = Fragment.fromTokens(this.path, first!, last!);
        }
    }

    findFirstValidToken(idx: number): Token | null {
        if (idx == -1) { // happens because input.index() is called before any other read operation (bug?)
            idx = 0;
        }
        do {
            const token = this.readValidToken(idx++);
            if (token) {
                return token;
            }
        } while (idx < this.parser._input.size);
        return null;
    }

    findLastValidToken(idx: number): Token | null {
        if (idx == -1) { // happens because input.index() is called before any other read operation (bug?)
            idx = 0;
        }
        while (idx >= 0) {
            const token = this.readValidToken(idx--);
            if (token != null) {
                return token;
            }
        }
        return null;
    }

    readValidToken(idx: number): Token | null {
        const token = this.parser._input.get(idx);
        const text = token.text;
        // ignore trailing whitespace
        if (text != null && text.replace(/([\n\r\t ])/g, "").length > 0) {
            return token;
        } else {
            return null;
        }
    }

    exitType_id = (ctx: Type_idContext) => {
        this.setNodeValue(ctx, new TypeIdentifier(ctx.getText()));
    }

    exitType_declaration = (ctx: Type_declarationContext) => {
        const typeId = this.getNodeValue<TypeIdentifier>(ctx.type_id());
        this.setNodeValue(ctx, new TypeDeclaration(typeId));
    }

    exitAssignable = (ctx: AssignableContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitObject_literal = (ctx: Object_literalContext) => {
        const entries = ctx.object_entry_list().map(child => this.getNodeValue<KeyValuePair<Identifier, IExpression>>(child));
        this.setNodeValue(ctx, new ObjectLiteral(ctx.getText(), entries));
    }

    exitLiteral_expression = (ctx: Literal_expressionContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitExpression = (ctx: ExpressionContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitAssign_statement = (ctx: Assign_statementContext) => {
        const assignable = this.getNodeValue<IAssignable>(ctx.assignable());
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new AssignStatement(assignable, expression));
    }

    exitStatement = (ctx: StatementContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

}
