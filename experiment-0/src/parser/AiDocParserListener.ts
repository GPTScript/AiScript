// Generated from AiDocParser.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { DocumentationContext } from "./AiDocParser";
import { Bounded_commentContext } from "./AiDocParser";
import { WhitespaceContext } from "./AiDocParser";
import { Comment_lineContext } from "./AiDocParser";
import { Type_commentContext } from "./AiDocParser";
import { Property_commentContext } from "./AiDocParser";
import { Property_typesContext } from "./AiDocParser";
import { Property_typeContext } from "./AiDocParser";
import { Version_commentContext } from "./AiDocParser";
import { Version_valueContext } from "./AiDocParser";
import { Text_commentContext } from "./AiDocParser";
import { Text_startContext } from "./AiDocParser";
import { KeywordContext } from "./AiDocParser";
import { Text_elementContext } from "./AiDocParser";
import { Inline_tagContext } from "./AiDocParser";
import { Tag_contentContext } from "./AiDocParser";
import { Tag_textContext } from "./AiDocParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AiDocParser`.
 */
export default class AiDocParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AiDocParser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.bounded_comment`.
	 * @param ctx the parse tree
	 */
	enterBounded_comment?: (ctx: Bounded_commentContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.bounded_comment`.
	 * @param ctx the parse tree
	 */
	exitBounded_comment?: (ctx: Bounded_commentContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.whitespace`.
	 * @param ctx the parse tree
	 */
	enterWhitespace?: (ctx: WhitespaceContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.whitespace`.
	 * @param ctx the parse tree
	 */
	exitWhitespace?: (ctx: WhitespaceContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.comment_line`.
	 * @param ctx the parse tree
	 */
	enterComment_line?: (ctx: Comment_lineContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.comment_line`.
	 * @param ctx the parse tree
	 */
	exitComment_line?: (ctx: Comment_lineContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.type_comment`.
	 * @param ctx the parse tree
	 */
	enterType_comment?: (ctx: Type_commentContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.type_comment`.
	 * @param ctx the parse tree
	 */
	exitType_comment?: (ctx: Type_commentContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.property_comment`.
	 * @param ctx the parse tree
	 */
	enterProperty_comment?: (ctx: Property_commentContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.property_comment`.
	 * @param ctx the parse tree
	 */
	exitProperty_comment?: (ctx: Property_commentContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.property_types`.
	 * @param ctx the parse tree
	 */
	enterProperty_types?: (ctx: Property_typesContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.property_types`.
	 * @param ctx the parse tree
	 */
	exitProperty_types?: (ctx: Property_typesContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.property_type`.
	 * @param ctx the parse tree
	 */
	enterProperty_type?: (ctx: Property_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.property_type`.
	 * @param ctx the parse tree
	 */
	exitProperty_type?: (ctx: Property_typeContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.version_comment`.
	 * @param ctx the parse tree
	 */
	enterVersion_comment?: (ctx: Version_commentContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.version_comment`.
	 * @param ctx the parse tree
	 */
	exitVersion_comment?: (ctx: Version_commentContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.version_value`.
	 * @param ctx the parse tree
	 */
	enterVersion_value?: (ctx: Version_valueContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.version_value`.
	 * @param ctx the parse tree
	 */
	exitVersion_value?: (ctx: Version_valueContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.text_comment`.
	 * @param ctx the parse tree
	 */
	enterText_comment?: (ctx: Text_commentContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.text_comment`.
	 * @param ctx the parse tree
	 */
	exitText_comment?: (ctx: Text_commentContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.text_start`.
	 * @param ctx the parse tree
	 */
	enterText_start?: (ctx: Text_startContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.text_start`.
	 * @param ctx the parse tree
	 */
	exitText_start?: (ctx: Text_startContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.text_element`.
	 * @param ctx the parse tree
	 */
	enterText_element?: (ctx: Text_elementContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.text_element`.
	 * @param ctx the parse tree
	 */
	exitText_element?: (ctx: Text_elementContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.inline_tag`.
	 * @param ctx the parse tree
	 */
	enterInline_tag?: (ctx: Inline_tagContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.inline_tag`.
	 * @param ctx the parse tree
	 */
	exitInline_tag?: (ctx: Inline_tagContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.tag_content`.
	 * @param ctx the parse tree
	 */
	enterTag_content?: (ctx: Tag_contentContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.tag_content`.
	 * @param ctx the parse tree
	 */
	exitTag_content?: (ctx: Tag_contentContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.tag_text`.
	 * @param ctx the parse tree
	 */
	enterTag_text?: (ctx: Tag_textContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.tag_text`.
	 * @param ctx the parse tree
	 */
	exitTag_text?: (ctx: Tag_textContext) => void;
}

