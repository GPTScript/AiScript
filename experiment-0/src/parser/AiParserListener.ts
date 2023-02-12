// Generated from AiParser.g4 by ANTLR 4.11.2-SNAPSHOT

import {ParseTreeListener} from "antlr4";


import { StatementContext } from "./AiParser";
import { Assign_statementContext } from "./AiParser";
import { Lhs_expressionContext } from "./AiParser";
import { Type_declarationContext } from "./AiParser";
import { Type_idContext } from "./AiParser";
import { ExpressionContext } from "./AiParser";
import { Object_expressionContext } from "./AiParser";
import { Object_itemContext } from "./AiParser";
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
	 * Enter a parse tree produced by `AiParser.lhs_expression`.
	 * @param ctx the parse tree
	 */
	enterLhs_expression?: (ctx: Lhs_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.lhs_expression`.
	 * @param ctx the parse tree
	 */
	exitLhs_expression?: (ctx: Lhs_expressionContext) => void;
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
	 * Enter a parse tree produced by `AiParser.object_expression`.
	 * @param ctx the parse tree
	 */
	enterObject_expression?: (ctx: Object_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.object_expression`.
	 * @param ctx the parse tree
	 */
	exitObject_expression?: (ctx: Object_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.object_item`.
	 * @param ctx the parse tree
	 */
	enterObject_item?: (ctx: Object_itemContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.object_item`.
	 * @param ctx the parse tree
	 */
	exitObject_item?: (ctx: Object_itemContext) => void;
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

