// Generated from AiParser.g4 by ANTLR 4.11.2-SNAPSHOT

import {ParseTreeListener} from "antlr4";


import { StatementContext } from "./AiParser";
import { Assign_statementContext } from "./AiParser";
import { AssignableContext } from "./AiParser";
import { Type_declarationContext } from "./AiParser";
import { Type_idContext } from "./AiParser";
import { ExpressionContext } from "./AiParser";
import { Literal_expressionContext } from "./AiParser";
import { Object_literalContext } from "./AiParser";
import { Object_entryContext } from "./AiParser";
import { Variable_idContext } from "./AiParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AiParser`.
 */
export default class AiParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AiParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.assign_statement`.
	 * @param ctx the parse tree
	 */
	enterAssign_statement?: (ctx: Assign_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.assign_statement`.
	 * @param ctx the parse tree
	 */
	exitAssign_statement?: (ctx: Assign_statementContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	enterAssignable?: (ctx: AssignableContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	exitAssignable?: (ctx: AssignableContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.type_id`.
	 * @param ctx the parse tree
	 */
	enterType_id?: (ctx: Type_idContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.type_id`.
	 * @param ctx the parse tree
	 */
	exitType_id?: (ctx: Type_idContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterLiteral_expression?: (ctx: Literal_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitLiteral_expression?: (ctx: Literal_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.object_literal`.
	 * @param ctx the parse tree
	 */
	enterObject_literal?: (ctx: Object_literalContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.object_literal`.
	 * @param ctx the parse tree
	 */
	exitObject_literal?: (ctx: Object_literalContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.object_entry`.
	 * @param ctx the parse tree
	 */
	enterObject_entry?: (ctx: Object_entryContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.object_entry`.
	 * @param ctx the parse tree
	 */
	exitObject_entry?: (ctx: Object_entryContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.variable_id`.
	 * @param ctx the parse tree
	 */
	enterVariable_id?: (ctx: Variable_idContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.variable_id`.
	 * @param ctx the parse tree
	 */
	exitVariable_id?: (ctx: Variable_idContext) => void;
}

