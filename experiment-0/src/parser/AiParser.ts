// Generated from AiParser.g4 by ANTLR 4.11.2-SNAPSHOT
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import AiParserListener from "./AiParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class AiParser extends Parser {
	public static readonly LPAR = 1;
	public static readonly RPAR = 2;
	public static readonly LBRAK = 3;
	public static readonly RBRAK = 4;
	public static readonly LCURL = 5;
	public static readonly RCURL = 6;
	public static readonly DOT = 7;
	public static readonly COMMA = 8;
	public static readonly COLON = 9;
	public static readonly SEMI = 10;
	public static readonly ASSIGN = 11;
	public static readonly VAR = 12;
	public static readonly RETURN = 13;
	public static readonly FUNCTION = 14;
	public static readonly INTEGER_LITERAL = 15;
	public static readonly DECIMAL_LITERAL = 16;
	public static readonly BOOLEAN_LITERAL = 17;
	public static readonly CHAR_LITERAL = 18;
	public static readonly STRING_LITERAL = 19;
	public static readonly NULL_LITERAL = 20;
	public static readonly PASCAL_CASE_IDENTIFIER = 21;
	public static readonly CAMEL_CASE_IDENTIFIER = 22;
	public static readonly ANY_IDENTIFIER = 23;
	public static readonly WS = 24;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_top_level_statement = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_assign_statement = 2;
	public static readonly RULE_return_statement = 3;
	public static readonly RULE_assignable = 4;
	public static readonly RULE_type_declaration = 5;
	public static readonly RULE_variable_declaration = 6;
	public static readonly RULE_member_selector = 7;
	public static readonly RULE_selectable = 8;
	public static readonly RULE_type_id = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_literal_expression = 11;
	public static readonly RULE_instance_expression = 12;
	public static readonly RULE_member_expression = 13;
	public static readonly RULE_function_expression = 14;
	public static readonly RULE_object_literal = 15;
	public static readonly RULE_object_entry = 16;
	public static readonly RULE_variable_id = 17;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'.'", 
                                                            "','", "':'", 
                                                            "';'", "'='", 
                                                            "'var'", "'return'", 
                                                            "'function'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'null'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LPAR", 
                                                             "RPAR", "LBRAK", 
                                                             "RBRAK", "LCURL", 
                                                             "RCURL", "DOT", 
                                                             "COMMA", "COLON", 
                                                             "SEMI", "ASSIGN", 
                                                             "VAR", "RETURN", 
                                                             "FUNCTION", 
                                                             "INTEGER_LITERAL", 
                                                             "DECIMAL_LITERAL", 
                                                             "BOOLEAN_LITERAL", 
                                                             "CHAR_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "NULL_LITERAL", 
                                                             "PASCAL_CASE_IDENTIFIER", 
                                                             "CAMEL_CASE_IDENTIFIER", 
                                                             "ANY_IDENTIFIER", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"top_level_statement", "statement", "assign_statement", "return_statement", 
		"assignable", "type_declaration", "variable_declaration", "member_selector", 
		"selectable", "type_id", "expression", "literal_expression", "instance_expression", 
		"member_expression", "function_expression", "object_literal", "object_entry", 
		"variable_id",
	];
	public get grammarFileName(): string { return "AiParser.g4"; }
	public get literalNames(): (string | null)[] { return AiParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return AiParser.symbolicNames; }
	public get ruleNames(): string[] { return AiParser.ruleNames; }
	public get serializedATN(): number[] { return AiParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, AiParser._ATN, AiParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public top_level_statement(): Top_level_statementContext {
		let localctx: Top_level_statementContext = new Top_level_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, AiParser.RULE_top_level_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 36;
			this.statement(false);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(allow_return: boolean): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state, allow_return);
		this.enterRule(localctx, 2, AiParser.RULE_statement);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 38;
				this.assign_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 39;
				if (!( localctx.allow_return )) {
					throw this.createFailedPredicateException(" $allow_return ");
				}
				this.state = 40;
				this.return_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_statement(): Assign_statementContext {
		let localctx: Assign_statementContext = new Assign_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, AiParser.RULE_assign_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.assignable();
			this.state = 44;
			this.match(AiParser.ASSIGN);
			this.state = 45;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let localctx: Return_statementContext = new Return_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, AiParser.RULE_return_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			this.match(AiParser.RETURN);
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 48;
				this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignable(): AssignableContext {
		let localctx: AssignableContext = new AssignableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, AiParser.RULE_assignable);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new TypeDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 51;
				this.type_declaration();
				}
				break;
			case 2:
				localctx = new VariableDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 52;
				this.variable_declaration();
				}
				break;
			case 3:
				localctx = new AssignableMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 53;
				this.member_selector();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_declaration(): Type_declarationContext {
		let localctx: Type_declarationContext = new Type_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, AiParser.RULE_type_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(AiParser.VAR);
			this.state = 57;
			this.type_id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable_declaration(): Variable_declarationContext {
		let localctx: Variable_declarationContext = new Variable_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, AiParser.RULE_variable_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(AiParser.VAR);
			this.state = 60;
			this.variable_id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public member_selector(): Member_selectorContext {
		let localctx: Member_selectorContext = new Member_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, AiParser.RULE_member_selector);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.selectable();
			this.state = 65;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 63;
					this.match(AiParser.DOT);
					this.state = 64;
					this.variable_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectable(): SelectableContext {
		let localctx: SelectableContext = new SelectableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, AiParser.RULE_selectable);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
				localctx = new SelectableTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 69;
				this.type_id();
				}
				break;
			case 22:
				localctx = new SelectableVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 70;
				this.variable_id();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_id(): Type_idContext {
		let localctx: Type_idContext = new Type_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, AiParser.RULE_type_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.match(AiParser.PASCAL_CASE_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, AiParser.RULE_expression);
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 75;
				this.literal_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 76;
				this.instance_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 77;
				this.member_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 78;
				this.function_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_expression(): Literal_expressionContext {
		let localctx: Literal_expressionContext = new Literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, AiParser.RULE_literal_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
			this.object_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instance_expression(): Instance_expressionContext {
		let localctx: Instance_expressionContext = new Instance_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, AiParser.RULE_instance_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.variable_id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public member_expression(): Member_expressionContext {
		let localctx: Member_expressionContext = new Member_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, AiParser.RULE_member_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this.member_selector();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_expression(): Function_expressionContext {
		let localctx: Function_expressionContext = new Function_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, AiParser.RULE_function_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this.match(AiParser.FUNCTION);
			this.state = 88;
			this.match(AiParser.LPAR);
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 89;
				this.variable_id();
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 90;
					this.match(AiParser.COMMA);
					this.state = 91;
					this.variable_id();
					}
					}
					this.state = 96;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 99;
			this.match(AiParser.RPAR);
			this.state = 100;
			this.match(AiParser.LCURL);
			this.state = 104;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 101;
					this.statement(true);
					}
					}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 107;
			this.match(AiParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public object_literal(): Object_literalContext {
		let localctx: Object_literalContext = new Object_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, AiParser.RULE_object_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.match(AiParser.LCURL);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 110;
				this.object_entry();
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 111;
					this.match(AiParser.COMMA);
					this.state = 112;
					this.object_entry();
					}
					}
					this.state = 117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 120;
			this.match(AiParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public object_entry(): Object_entryContext {
		let localctx: Object_entryContext = new Object_entryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, AiParser.RULE_object_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this.variable_id();
			this.state = 123;
			this.match(AiParser.COLON);
			this.state = 124;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable_id(): Variable_idContext {
		let localctx: Variable_idContext = new Variable_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, AiParser.RULE_variable_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(AiParser.CAMEL_CASE_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.statement_sempred(localctx as StatementContext, predIndex);
		}
		return true;
	}
	private statement_sempred(localctx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  localctx.allow_return ;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,24,129,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,1,0,1,0,1,1,1,1,1,1,3,1,42,8,1,1,2,1,2,1,2,1,2,1,3,1,3,3,3,50,8,3,
	1,4,1,4,1,4,3,4,55,8,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,4,7,66,8,7,11,
	7,12,7,67,1,8,1,8,3,8,72,8,8,1,9,1,9,1,10,1,10,1,10,1,10,3,10,80,8,10,1,
	11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,5,14,93,8,14,10,14,
	12,14,96,9,14,3,14,98,8,14,1,14,1,14,1,14,5,14,103,8,14,10,14,12,14,106,
	9,14,1,14,1,14,1,15,1,15,1,15,1,15,5,15,114,8,15,10,15,12,15,117,9,15,3,
	15,119,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,0,0,18,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,0,124,0,36,1,0,0,0,2,41,1,0,
	0,0,4,43,1,0,0,0,6,47,1,0,0,0,8,54,1,0,0,0,10,56,1,0,0,0,12,59,1,0,0,0,
	14,62,1,0,0,0,16,71,1,0,0,0,18,73,1,0,0,0,20,79,1,0,0,0,22,81,1,0,0,0,24,
	83,1,0,0,0,26,85,1,0,0,0,28,87,1,0,0,0,30,109,1,0,0,0,32,122,1,0,0,0,34,
	126,1,0,0,0,36,37,3,2,1,0,37,1,1,0,0,0,38,42,3,4,2,0,39,40,4,1,0,1,40,42,
	3,6,3,0,41,38,1,0,0,0,41,39,1,0,0,0,42,3,1,0,0,0,43,44,3,8,4,0,44,45,5,
	11,0,0,45,46,3,20,10,0,46,5,1,0,0,0,47,49,5,13,0,0,48,50,3,20,10,0,49,48,
	1,0,0,0,49,50,1,0,0,0,50,7,1,0,0,0,51,55,3,10,5,0,52,55,3,12,6,0,53,55,
	3,14,7,0,54,51,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,0,55,9,1,0,0,0,56,57,5,
	12,0,0,57,58,3,18,9,0,58,11,1,0,0,0,59,60,5,12,0,0,60,61,3,34,17,0,61,13,
	1,0,0,0,62,65,3,16,8,0,63,64,5,7,0,0,64,66,3,34,17,0,65,63,1,0,0,0,66,67,
	1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,15,1,0,0,0,69,72,3,18,9,0,70,72,
	3,34,17,0,71,69,1,0,0,0,71,70,1,0,0,0,72,17,1,0,0,0,73,74,5,21,0,0,74,19,
	1,0,0,0,75,80,3,22,11,0,76,80,3,24,12,0,77,80,3,26,13,0,78,80,3,28,14,0,
	79,75,1,0,0,0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,21,1,0,0,0,81,
	82,3,30,15,0,82,23,1,0,0,0,83,84,3,34,17,0,84,25,1,0,0,0,85,86,3,14,7,0,
	86,27,1,0,0,0,87,88,5,14,0,0,88,97,5,1,0,0,89,94,3,34,17,0,90,91,5,8,0,
	0,91,93,3,34,17,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,
	0,95,98,1,0,0,0,96,94,1,0,0,0,97,89,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,
	99,100,5,2,0,0,100,104,5,5,0,0,101,103,3,2,1,0,102,101,1,0,0,0,103,106,
	1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,
	107,108,5,6,0,0,108,29,1,0,0,0,109,118,5,5,0,0,110,115,3,32,16,0,111,112,
	5,8,0,0,112,114,3,32,16,0,113,111,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,
	0,115,116,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,118,110,1,0,0,0,118,119,
	1,0,0,0,119,120,1,0,0,0,120,121,5,6,0,0,121,31,1,0,0,0,122,123,3,34,17,
	0,123,124,5,9,0,0,124,125,3,20,10,0,125,33,1,0,0,0,126,127,5,22,0,0,127,
	35,1,0,0,0,11,41,49,54,67,71,79,94,97,104,115,118];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AiParser.__ATN) {
			AiParser.__ATN = new ATNDeserializer().deserialize(AiParser._serializedATN);
		}

		return AiParser.__ATN;
	}


	static DecisionsToDFA = AiParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Top_level_statementContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_top_level_statement;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterTop_level_statement) {
	 		listener.enterTop_level_statement(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitTop_level_statement) {
	 		listener.exitTop_level_statement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public allow_return: boolean;
	constructor(parser: AiParser, parent: ParserRuleContext, invokingState: number, allow_return: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.allow_return = allow_return;
	}
	public assign_statement(): Assign_statementContext {
		return this.getTypedRuleContext(Assign_statementContext, 0) as Assign_statementContext;
	}
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_statement;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class Assign_statementContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignable(): AssignableContext {
		return this.getTypedRuleContext(AssignableContext, 0) as AssignableContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(AiParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_assign_statement;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterAssign_statement) {
	 		listener.enterAssign_statement(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitAssign_statement) {
	 		listener.exitAssign_statement(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(AiParser.RETURN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_return_statement;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterReturn_statement) {
	 		listener.enterReturn_statement(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitReturn_statement) {
	 		listener.exitReturn_statement(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_assignable;
	}
	public copyFrom(ctx: AssignableContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableDeclarationContext extends AssignableContext {
	constructor(parser: AiParser, ctx: AssignableContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_declaration(): Variable_declarationContext {
		return this.getTypedRuleContext(Variable_declarationContext, 0) as Variable_declarationContext;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
}
export class AssignableMemberContext extends AssignableContext {
	constructor(parser: AiParser, ctx: AssignableContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public member_selector(): Member_selectorContext {
		return this.getTypedRuleContext(Member_selectorContext, 0) as Member_selectorContext;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterAssignableMember) {
	 		listener.enterAssignableMember(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitAssignableMember) {
	 		listener.exitAssignableMember(this);
		}
	}
}
export class TypeDeclarationContext extends AssignableContext {
	constructor(parser: AiParser, ctx: AssignableContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_declaration(): Type_declarationContext {
		return this.getTypedRuleContext(Type_declarationContext, 0) as Type_declarationContext;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterTypeDeclaration) {
	 		listener.enterTypeDeclaration(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitTypeDeclaration) {
	 		listener.exitTypeDeclaration(this);
		}
	}
}


export class Type_declarationContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(AiParser.VAR, 0);
	}
	public type_id(): Type_idContext {
		return this.getTypedRuleContext(Type_idContext, 0) as Type_idContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_type_declaration;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterType_declaration) {
	 		listener.enterType_declaration(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitType_declaration) {
	 		listener.exitType_declaration(this);
		}
	}
}


export class Variable_declarationContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(AiParser.VAR, 0);
	}
	public variable_id(): Variable_idContext {
		return this.getTypedRuleContext(Variable_idContext, 0) as Variable_idContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_variable_declaration;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterVariable_declaration) {
	 		listener.enterVariable_declaration(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitVariable_declaration) {
	 		listener.exitVariable_declaration(this);
		}
	}
}


export class Member_selectorContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selectable(): SelectableContext {
		return this.getTypedRuleContext(SelectableContext, 0) as SelectableContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(AiParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(AiParser.DOT, i);
	}
	public variable_id_list(): Variable_idContext[] {
		return this.getTypedRuleContexts(Variable_idContext) as Variable_idContext[];
	}
	public variable_id(i: number): Variable_idContext {
		return this.getTypedRuleContext(Variable_idContext, i) as Variable_idContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_member_selector;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterMember_selector) {
	 		listener.enterMember_selector(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitMember_selector) {
	 		listener.exitMember_selector(this);
		}
	}
}


export class SelectableContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_selectable;
	}
	public copyFrom(ctx: SelectableContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectableVariableContext extends SelectableContext {
	constructor(parser: AiParser, ctx: SelectableContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_id(): Variable_idContext {
		return this.getTypedRuleContext(Variable_idContext, 0) as Variable_idContext;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterSelectableVariable) {
	 		listener.enterSelectableVariable(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitSelectableVariable) {
	 		listener.exitSelectableVariable(this);
		}
	}
}
export class SelectableTypeContext extends SelectableContext {
	constructor(parser: AiParser, ctx: SelectableContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_id(): Type_idContext {
		return this.getTypedRuleContext(Type_idContext, 0) as Type_idContext;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterSelectableType) {
	 		listener.enterSelectableType(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitSelectableType) {
	 		listener.exitSelectableType(this);
		}
	}
}


export class Type_idContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PASCAL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiParser.PASCAL_CASE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_type_id;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterType_id) {
	 		listener.enterType_id(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitType_id) {
	 		listener.exitType_id(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public member_expression(): Member_expressionContext {
		return this.getTypedRuleContext(Member_expressionContext, 0) as Member_expressionContext;
	}
	public function_expression(): Function_expressionContext {
		return this.getTypedRuleContext(Function_expressionContext, 0) as Function_expressionContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_expression;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class Literal_expressionContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object_literal(): Object_literalContext {
		return this.getTypedRuleContext(Object_literalContext, 0) as Object_literalContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_literal_expression;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterLiteral_expression) {
	 		listener.enterLiteral_expression(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitLiteral_expression) {
	 		listener.exitLiteral_expression(this);
		}
	}
}


export class Instance_expressionContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_id(): Variable_idContext {
		return this.getTypedRuleContext(Variable_idContext, 0) as Variable_idContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_instance_expression;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterInstance_expression) {
	 		listener.enterInstance_expression(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitInstance_expression) {
	 		listener.exitInstance_expression(this);
		}
	}
}


export class Member_expressionContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public member_selector(): Member_selectorContext {
		return this.getTypedRuleContext(Member_selectorContext, 0) as Member_selectorContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_member_expression;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterMember_expression) {
	 		listener.enterMember_expression(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitMember_expression) {
	 		listener.exitMember_expression(this);
		}
	}
}


export class Function_expressionContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(AiParser.FUNCTION, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(AiParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(AiParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(AiParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(AiParser.RCURL, 0);
	}
	public variable_id_list(): Variable_idContext[] {
		return this.getTypedRuleContexts(Variable_idContext) as Variable_idContext[];
	}
	public variable_id(i: number): Variable_idContext {
		return this.getTypedRuleContext(Variable_idContext, i) as Variable_idContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(AiParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(AiParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_function_expression;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterFunction_expression) {
	 		listener.enterFunction_expression(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitFunction_expression) {
	 		listener.exitFunction_expression(this);
		}
	}
}


export class Object_literalContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(AiParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(AiParser.RCURL, 0);
	}
	public object_entry_list(): Object_entryContext[] {
		return this.getTypedRuleContexts(Object_entryContext) as Object_entryContext[];
	}
	public object_entry(i: number): Object_entryContext {
		return this.getTypedRuleContext(Object_entryContext, i) as Object_entryContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(AiParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(AiParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_object_literal;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterObject_literal) {
	 		listener.enterObject_literal(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitObject_literal) {
	 		listener.exitObject_literal(this);
		}
	}
}


export class Object_entryContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_id(): Variable_idContext {
		return this.getTypedRuleContext(Variable_idContext, 0) as Variable_idContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(AiParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_object_entry;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterObject_entry) {
	 		listener.enterObject_entry(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitObject_entry) {
	 		listener.exitObject_entry(this);
		}
	}
}


export class Variable_idContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CAMEL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiParser.CAMEL_CASE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_variable_id;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterVariable_id) {
	 		listener.enterVariable_id(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitVariable_id) {
	 		listener.exitVariable_id(this);
		}
	}
}
