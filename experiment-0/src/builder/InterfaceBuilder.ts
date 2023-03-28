import AiDocParserListener from "../parser/AiDocParserListener";
import {CharStream, CharStreams, CommonTokenStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token} from "antlr4";
import {fileExists} from "../utils/FileUtils";
import CodeFragment from "./CodeFragment";
import Fragment from "./Fragment";
import AiDocLexer from "../parser/AiDocLexer";
import AiDocParser from "../parser/AiDocParser";
import Documentation from "../documentation/Documentation";
import IInterface from "../module/IInterface";

interface IndexedNode {
    __id?: number;
}


export default class InterfaceBuilder extends AiDocParserListener {

    static parse_interface(data: string): IInterface | null {
        const doc = InterfaceBuilder.doParse<Documentation>((parser: AiDocParser) => parser.documentation(), data);
        return null; // Interface.from(doc);
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

}
