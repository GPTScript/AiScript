// Generated from AiParser.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { Top_level_statementContext } from "./AiParser";
import { StatementContext } from "./AiParser";
import { Assign_statementContext } from "./AiParser";
import { Return_statementContext } from "./AiParser";
import { TypeDeclarationContext } from "./AiParser";
import { VariableDeclarationContext } from "./AiParser";
import { AssignableMemberContext } from "./AiParser";
import { Type_declarationContext } from "./AiParser";
import { Variable_declarationContext } from "./AiParser";
import { Member_selectorContext } from "./AiParser";
import { SelectableTypeContext } from "./AiParser";
import { SelectableVariableContext } from "./AiParser";
import { Type_idContext } from "./AiParser";
import { ExpressionContext } from "./AiParser";
import { Literal_expressionContext } from "./AiParser";
import { Instance_expressionContext } from "./AiParser";
import { Member_expressionContext } from "./AiParser";
import { Function_expressionContext } from "./AiParser";
import { Object_literalContext } from "./AiParser";
import { Object_entryContext } from "./AiParser";
import { Variable_idContext } from "./AiParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AiParser`.
 */
export default class AiParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AiParser.top_level_statement`.
	 * @param ctx the parse tree
	 */
	enterTop_level_statement?: (ctx: Top_level_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.top_level_statement`.
	 * @param ctx the parse tree
	 */
	exitTop_level_statement?: (ctx: Top_level_statementContext) => void;
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
	 * Enter a parse tree produced by `AiParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeDeclaration`
	 * labeled alternative in `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeDeclaration`
	 * labeled alternative in `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `VariableDeclaration`
	 * labeled alternative in `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `VariableDeclaration`
	 * labeled alternative in `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `AssignableMember`
	 * labeled alternative in `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	enterAssignableMember?: (ctx: AssignableMemberContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignableMember`
	 * labeled alternative in `AiParser.assignable`.
	 * @param ctx the parse tree
	 */
	exitAssignableMember?: (ctx: AssignableMemberContext) => void;
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
	 * Enter a parse tree produced by `AiParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitVariable_declaration?: (ctx: Variable_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.member_selector`.
	 * @param ctx the parse tree
	 */
	enterMember_selector?: (ctx: Member_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.member_selector`.
	 * @param ctx the parse tree
	 */
	exitMember_selector?: (ctx: Member_selectorContext) => void;
	/**
	 * Enter a parse tree produced by the `SelectableType`
	 * labeled alternative in `AiParser.selectable`.
	 * @param ctx the parse tree
	 */
	enterSelectableType?: (ctx: SelectableTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `SelectableType`
	 * labeled alternative in `AiParser.selectable`.
	 * @param ctx the parse tree
	 */
	exitSelectableType?: (ctx: SelectableTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `SelectableVariable`
	 * labeled alternative in `AiParser.selectable`.
	 * @param ctx the parse tree
	 */
	enterSelectableVariable?: (ctx: SelectableVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `SelectableVariable`
	 * labeled alternative in `AiParser.selectable`.
	 * @param ctx the parse tree
	 */
	exitSelectableVariable?: (ctx: SelectableVariableContext) => void;
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
	 * Enter a parse tree produced by `AiParser.instance_expression`.
	 * @param ctx the parse tree
	 */
	enterInstance_expression?: (ctx: Instance_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.instance_expression`.
	 * @param ctx the parse tree
	 */
	exitInstance_expression?: (ctx: Instance_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.member_expression`.
	 * @param ctx the parse tree
	 */
	enterMember_expression?: (ctx: Member_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.member_expression`.
	 * @param ctx the parse tree
	 */
	exitMember_expression?: (ctx: Member_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `AiParser.function_expression`.
	 * @param ctx the parse tree
	 */
	enterFunction_expression?: (ctx: Function_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AiParser.function_expression`.
	 * @param ctx the parse tree
	 */
	exitFunction_expression?: (ctx: Function_expressionContext) => void;
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

