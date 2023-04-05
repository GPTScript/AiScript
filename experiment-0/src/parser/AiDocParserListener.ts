// Generated from AiDocParser.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { DocumentationContext } from "./AiDocParser";
import { Bounded_commentContext } from "./AiDocParser";
import { Comment_startContext } from "./AiDocParser";
import { Comment_lineContext } from "./AiDocParser";
import { Comment_endContext } from "./AiDocParser";
import { CommentContext } from "./AiDocParser";
import { Type_commentContext } from "./AiDocParser";
import { Type_nameContext } from "./AiDocParser";
import { Property_commentContext } from "./AiDocParser";
import { Property_nameContext } from "./AiDocParser";
import { Property_typesContext } from "./AiDocParser";
import { KnownPropertyTypeContext } from "./AiDocParser";
import { UnknownPropertyTypeContext } from "./AiDocParser";
import { Version_commentContext } from "./AiDocParser";
import { DraftVersionContext } from "./AiDocParser";
import { FinalVersionContext } from "./AiDocParser";
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
	 * Enter a parse tree produced by `AiDocParser.comment_start`.
	 * @param ctx the parse tree
	 */
	enterComment_start?: (ctx: Comment_startContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.comment_start`.
	 * @param ctx the parse tree
	 */
	exitComment_start?: (ctx: Comment_startContext) => void;
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
	 * Enter a parse tree produced by `AiDocParser.comment_end`.
	 * @param ctx the parse tree
	 */
	enterComment_end?: (ctx: Comment_endContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.comment_end`.
	 * @param ctx the parse tree
	 */
	exitComment_end?: (ctx: Comment_endContext) => void;
	/**
	 * Enter a parse tree produced by `AiDocParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
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
	 * Enter a parse tree produced by `AiDocParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;
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
	 * Enter a parse tree produced by `AiDocParser.property_name`.
	 * @param ctx the parse tree
	 */
	enterProperty_name?: (ctx: Property_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AiDocParser.property_name`.
	 * @param ctx the parse tree
	 */
	exitProperty_name?: (ctx: Property_nameContext) => void;
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
	 * Enter a parse tree produced by the `KnownPropertyType`
	 * labeled alternative in `AiDocParser.property_type`.
	 * @param ctx the parse tree
	 */
	enterKnownPropertyType?: (ctx: KnownPropertyTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `KnownPropertyType`
	 * labeled alternative in `AiDocParser.property_type`.
	 * @param ctx the parse tree
	 */
	exitKnownPropertyType?: (ctx: KnownPropertyTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `UnknownPropertyType`
	 * labeled alternative in `AiDocParser.property_type`.
	 * @param ctx the parse tree
	 */
	enterUnknownPropertyType?: (ctx: UnknownPropertyTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `UnknownPropertyType`
	 * labeled alternative in `AiDocParser.property_type`.
	 * @param ctx the parse tree
	 */
	exitUnknownPropertyType?: (ctx: UnknownPropertyTypeContext) => void;
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
	 * Enter a parse tree produced by the `DraftVersion`
	 * labeled alternative in `AiDocParser.version_value`.
	 * @param ctx the parse tree
	 */
	enterDraftVersion?: (ctx: DraftVersionContext) => void;
	/**
	 * Exit a parse tree produced by the `DraftVersion`
	 * labeled alternative in `AiDocParser.version_value`.
	 * @param ctx the parse tree
	 */
	exitDraftVersion?: (ctx: DraftVersionContext) => void;
	/**
	 * Enter a parse tree produced by the `FinalVersion`
	 * labeled alternative in `AiDocParser.version_value`.
	 * @param ctx the parse tree
	 */
	enterFinalVersion?: (ctx: FinalVersionContext) => void;
	/**
	 * Exit a parse tree produced by the `FinalVersion`
	 * labeled alternative in `AiDocParser.version_value`.
	 * @param ctx the parse tree
	 */
	exitFinalVersion?: (ctx: FinalVersionContext) => void;
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

