import AiDocParserListener from "../parser/AiDocParserListener";
import {CharStream, CharStreams, CommonTokenStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token} from "antlr4";
import {fileExists} from "../utils/FileUtils";
import CodeFragment from "./CodeFragment";
import Fragment from "./Fragment";
import AiDocLexer from "../parser/AiDocLexer";
import AiDocParser, {
    Bounded_commentContext,
    Comment_endContext,
    Comment_lineContext, Comment_startContext,
    CommentContext, DocumentationContext, DraftVersionContext, FinalVersionContext, KnownPropertyTypeContext,
    Property_commentContext, Property_nameContext,
    Property_typeContext,
    Property_typesContext, Text_commentContext,
    Type_commentContext,
    Type_nameContext, UnknownPropertyTypeContext, Version_commentContext
} from "../parser/AiDocParser";
import Documentation from "../documentation/Documentation";
import IInterface from "../module/IInterface";
import TypeIdentifier from "./TypeIdentifier";
import InterfaceTypeComment from "../documentation/InterfaceTypeComment";
import Identifier from "./Identifier";
import PropertyTypeComment from "../documentation/PropertyTypeComment";
import TextComment from "../documentation/TextComment";
import VersionComment from "../documentation/VersionComment";
import IVersion from "../documentation/IVersion";
import DraftVersion from "../documentation/DraftVersion";
import FinalVersion from "../documentation/FinalVersion";
import IComment from "../documentation/IComment";

interface IndexedNode {
    __id?: number;
}


export default class InterfaceBuilder extends AiDocParserListener {

    static parse_interface(data: string): IInterface | null {
        const doc = InterfaceBuilder.doParse<Documentation>((parser: AiDocParser) => parser.documentation(), data);
        return doc ? doc.readInterface() : null;
    }

    static doParse<T>(rule: (parser: AiDocParser) => ParseTree, data?: string, stream?: CharStream): T | null {
        try {
            const isFile = data && fileExists(data);
            const path = isFile ? data : "";
            stream = stream || isFile ? CharStreams.fromPathSync(data, "utf-8") : CharStreams.fromString(data);
            const lexer = new AiDocLexer(stream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new AiDocParser(tokenStream);
            const tree = rule(parser);
            const builder = new InterfaceBuilder(parser, path);
            const walker = new ParseTreeWalker();
            walker.walk(builder, tree);
            return builder.getNodeValue<T>(tree);
        } catch (e: any) {
            if (e instanceof Error)
                console.log(e.stack);
        }
    }

    parser: AiDocParser;
    path: string;
    nodeValues = new Map<number, object>();
    nextNodeId = 0;

    constructor(parser: AiDocParser, path: string) {
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

    exitComment = (ctx: CommentContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitType_name = (ctx: Type_nameContext) => {
        this.setNodeValue(ctx, new TypeIdentifier(ctx.PASCAL_CASE_IDENTIFIER().getText()));
    }

    exitType_comment = (ctx: Type_commentContext) => {
        const id = this.getNodeValue<TypeIdentifier>(ctx.type_name());
        this.setNodeValue(ctx, new InterfaceTypeComment(id));
    }

    exitKnownPropertyType = (ctx: KnownPropertyTypeContext) => {
        this.setNodeValue(ctx, new TypeIdentifier(ctx.PASCAL_CASE_IDENTIFIER().getText(), ctx.OPTIONAL() != null));
    }

    exitUnknownPropertyType = (ctx: UnknownPropertyTypeContext) => {
        this.setNodeValue(ctx, new TypeIdentifier(ctx.getText()));
    }

    exitProperty_types = (ctx: Property_typesContext) => {
        const types = ctx.property_type_list().map(child => this.getNodeValue<TypeIdentifier>(child));
        this.setNodeValue(ctx, types);
    }

    exitProperty_name = (ctx: Property_nameContext) => {
        this.setNodeValue(ctx, new Identifier(ctx.CAMEL_CASE_IDENTIFIER().getText()));
    }

    exitProperty_comment = (ctx: Property_commentContext) => {
        const id = this.getNodeValue<Identifier>(ctx.property_name());
        const types = this.getNodeValue<TypeIdentifier[]>(ctx.property_types());
        this.setNodeValue(ctx, new PropertyTypeComment(id, types));
    }

    exitText_comment = (ctx: Text_commentContext) => {
        this.setNodeValue(ctx, new TextComment(ctx.getText()));
    }

    exitDraftVersion = (ctx: DraftVersionContext) => {
        this.setNodeValue(ctx, new DraftVersion(ctx.HASH_CODE().getText()));
    }

    exitFinalVersion = (ctx: FinalVersionContext) => {
        this.setNodeValue(ctx, new FinalVersion(ctx.SEMVER().getText()));
    }

    exitVersion_comment = (ctx: Version_commentContext) => {
        const version = this.getNodeValue<IVersion>(ctx.version_value());
        this.setNodeValue(ctx, new VersionComment(version));
    }

    exitComment_start = (ctx: Comment_startContext) => {
        const comment = ctx.comment();
        if(comment)
            this.setNodeValue(ctx, this.getNodeValue(comment));
    }

    exitComment_line = (ctx: Comment_lineContext) => {
        const comment = ctx.comment();
        if(comment)
            this.setNodeValue(ctx, this.getNodeValue(comment));
    }

    exitComment_end = (ctx: Comment_endContext) => {
        const comment = ctx.comment();
        if(comment)
            this.setNodeValue(ctx, this.getNodeValue(comment));
    }

    exitBounded_comment = (ctx: Bounded_commentContext) => {
        const comments = ctx.children.map(child => this.getNodeValue<IComment>(child))
            .filter(c => c != null);
        if(comments.length > 0)
            this.setNodeValue(ctx, comments);
    }

    exitDocumentation = (ctx: DocumentationContext) => {
        const bounded = ctx.bounded_comment();
        if(bounded) {
            const comments = this.getNodeValue<IComment[]>(bounded);
            if(comments)
                this.setNodeValue(ctx, new Documentation(comments));
        }
    }

}
