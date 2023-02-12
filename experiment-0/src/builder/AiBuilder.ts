import AiParserListener from "../parser/AiParserListener";
import {CharStream, CommonTokenStream, FileStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token} from "antlr4";
import IStatement from "../statement/IStatement";
import AiParser, {
    Assign_statementContext,
    AssignableMemberContext,
    ExpressionContext, Function_expressionContext, Instance_expressionContext,
    Literal_expressionContext, Member_expressionContext,
    Member_selectorContext,
    Object_literalContext, Return_statementContext,
    SelectableTypeContext, SelectableVariableContext,
    StatementContext,
    Top_level_statementContext,
    Type_declarationContext,
    Type_idContext,
    TypeDeclarationContext, Variable_declarationContext, Variable_idContext, VariableDeclarationContext
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
import SelectableType from "../select/SelectableType";
import ISelectable from "../select/ISelectable";
import SelectableMember from "../select/SelectableMember";
import MemberSelector from "../select/MemberSelector";
import AssignableMember from "../assign/AssignableMember";
import VariableIdentifier from "./VariableIdentifier";
import VariableDeclaration from "../assign/VariableDeclaration";
import ReturnStatement from "../statement/ReturnStatement";
import MemberExpression from "../expression/MemberExpression";
import InstanceExpression from "../expression/InstanceExpression";
import FunctionExpression from "../expression/FunctionExpression";
import SelectableInstance from "../select/SelectableInstance";

interface IndexedNode {
    __id?: number;
}

export default class AiBuilder extends AiParserListener {

    static parse_statement(data: string): IStatement | null {
        return AiBuilder.doParse<IStatement>((parser: AiParser) => parser.top_level_statement(), data);
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

    exitVariable_id = (ctx: Variable_idContext) => {
        this.setNodeValue(ctx, new VariableIdentifier(ctx.getText()));
    }

    exitType_declaration = (ctx: Type_declarationContext) => {
        const typeId = this.getNodeValue<TypeIdentifier>(ctx.type_id());
        this.setNodeValue(ctx, new TypeDeclaration(typeId));
    }

    exitTypeDeclaration = (ctx: TypeDeclarationContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.type_declaration()));
    }

    exitVariable_declaration = (ctx: Variable_declarationContext) => {
        const variableId = this.getNodeValue<VariableIdentifier>(ctx.variable_id());
        this.setNodeValue(ctx, new VariableDeclaration(variableId));
    }

    exitVariableDeclaration = (ctx: VariableDeclarationContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.variable_declaration()));
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

    exitTop_level_statement = (ctx: Top_level_statementContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitSelectableType = (ctx: SelectableTypeContext) => {
        const typeId = this.getNodeValue<TypeIdentifier>(ctx.type_id());
        this.setNodeValue(ctx, new SelectableType(typeId));
    }

    exitSelectableVariable = (ctx: SelectableVariableContext) => {
        const variableId = this.getNodeValue<VariableIdentifier>(ctx.variable_id());
        this.setNodeValue(ctx, new SelectableInstance(variableId));
    }

    exitMember_selector = (ctx: Member_selectorContext) => {
        let selectable = this.getNodeValue<ISelectable>(ctx.selectable());
        const selectors = ctx.variable_id_list().map(child => this.getNodeValue<Identifier>(child));
        const member = selectors.pop();
        selectors.forEach(id => selectable = new SelectableMember(selectable, id));
        this.setNodeValue(ctx, new MemberSelector(selectable, member));
    }

    exitAssignableMember = (ctx: AssignableMemberContext) => {
        const selector = this.getNodeValue<MemberSelector>(ctx.member_selector());
        this.setNodeValue(ctx, new AssignableMember(selector));
    }

    exitReturn_statement = (ctx: Return_statementContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new ReturnStatement(expression));
    }

    exitInstance_expression = (ctx: Instance_expressionContext) => {
        const variableId = this.getNodeValue<VariableIdentifier>(ctx.variable_id());
        this.setNodeValue(ctx, new InstanceExpression(variableId));
    }

    exitMember_expression = (ctx: Member_expressionContext) => {
        const selector = this.getNodeValue<MemberSelector>(ctx.member_selector());
        this.setNodeValue(ctx, new MemberExpression(selector));
    }

    exitFunction_expression = (ctx: Function_expressionContext) => {
        const parameters = ctx.variable_id_list().map(child => this.getNodeValue<Identifier>(child));
        const statements = ctx.statement_list().map(child => this.getNodeValue<IStatement>(child));
        this.setNodeValue(ctx, new FunctionExpression(parameters, statements));
    }

}
