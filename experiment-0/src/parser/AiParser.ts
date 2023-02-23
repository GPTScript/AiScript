// Generated from AiParser.g4 by ANTLR 4.12.0
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
	public static readonly RULE_string_literal = 12;
	public static readonly RULE_instance_expression = 13;
	public static readonly RULE_member_expression = 14;
	public static readonly RULE_function_call_expression = 15;
	public static readonly RULE_function_selector = 16;
	public static readonly RULE_argument_list = 17;
	public static readonly RULE_function_definition = 18;
	public static readonly RULE_parameter_list = 19;
	public static readonly RULE_object_literal = 20;
	public static readonly RULE_object_entry = 21;
	public static readonly RULE_variable_id = 22;
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
		"selectable", "type_id", "expression", "literal_expression", "string_literal", 
		"instance_expression", "member_expression", "function_call_expression", 
		"function_selector", "argument_list", "function_definition", "parameter_list", 
		"object_literal", "object_entry", "variable_id",
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
			this.state = 46;
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
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 48;
				this.assign_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 49;
				if (!( localctx.allow_return )) {
					throw this.createFailedPredicateException(" $allow_return ");
				}
				this.state = 50;
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
			this.state = 53;
			this.assignable();
			this.state = 54;
			this.match(AiParser.ASSIGN);
			this.state = 55;
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
			this.state = 57;
			this.match(AiParser.RETURN);
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 58;
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
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				localctx = new TypeDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 61;
				this.type_declaration();
				}
				break;
			case 2:
				localctx = new VariableDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 62;
				this.variable_declaration();
				}
				break;
			case 3:
				localctx = new AssignableMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 63;
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
			this.state = 66;
			this.match(AiParser.VAR);
			this.state = 67;
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
			this.state = 69;
			this.match(AiParser.VAR);
			this.state = 70;
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
			this.state = 72;
			this.selectable();
			this.state = 75;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 73;
					this.match(AiParser.DOT);
					this.state = 74;
					this.variable_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 77;
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
			this.state = 81;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
				localctx = new SelectableTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 79;
				this.type_id();
				}
				break;
			case 22:
				localctx = new SelectableVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 80;
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
			this.state = 83;
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
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 85;
				this.literal_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 86;
				this.instance_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 87;
				this.member_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 88;
				this.function_call_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 89;
				this.function_definition();
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
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 92;
				this.object_literal();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 93;
				this.string_literal();
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
	public string_literal(): String_literalContext {
		let localctx: String_literalContext = new String_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, AiParser.RULE_string_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this.match(AiParser.STRING_LITERAL);
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
		this.enterRule(localctx, 26, AiParser.RULE_instance_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
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
		this.enterRule(localctx, 28, AiParser.RULE_member_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 100;
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
	public function_call_expression(): Function_call_expressionContext {
		let localctx: Function_call_expressionContext = new Function_call_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, AiParser.RULE_function_call_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this.function_selector();
			this.state = 103;
			this.argument_list();
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
	public function_selector(): Function_selectorContext {
		let localctx: Function_selectorContext = new Function_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, AiParser.RULE_function_selector);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 105;
			this.selectable();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 106;
				this.match(AiParser.DOT);
				this.state = 107;
				this.variable_id();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public argument_list(): Argument_listContext {
		let localctx: Argument_listContext = new Argument_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, AiParser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.match(AiParser.LPAR);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6832160) !== 0)) {
				{
				this.state = 114;
				this.expression();
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 115;
					this.match(AiParser.COMMA);
					this.state = 116;
					this.expression();
					}
					}
					this.state = 121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 124;
			this.match(AiParser.RPAR);
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
	public function_definition(): Function_definitionContext {
		let localctx: Function_definitionContext = new Function_definitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, AiParser.RULE_function_definition);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(AiParser.FUNCTION);
			this.state = 127;
			this.parameter_list();
			this.state = 128;
			this.match(AiParser.LCURL);
			this.state = 132;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 129;
					this.statement(true);
					}
					}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 135;
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
	public parameter_list(): Parameter_listContext {
		let localctx: Parameter_listContext = new Parameter_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, AiParser.RULE_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			this.match(AiParser.LPAR);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 138;
				this.variable_id();
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 139;
					this.match(AiParser.COMMA);
					this.state = 140;
					this.variable_id();
					}
					}
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 148;
			this.match(AiParser.RPAR);
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
		this.enterRule(localctx, 40, AiParser.RULE_object_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.match(AiParser.LCURL);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 151;
				this.object_entry();
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 152;
					this.match(AiParser.COMMA);
					this.state = 153;
					this.object_entry();
					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 161;
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
		this.enterRule(localctx, 42, AiParser.RULE_object_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.variable_id();
			this.state = 164;
			this.match(AiParser.COLON);
			this.state = 165;
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
		this.enterRule(localctx, 44, AiParser.RULE_variable_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
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

	public static readonly _serializedATN: number[] = [4,1,24,170,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,1,1,1,1,
	1,1,3,1,52,8,1,1,2,1,2,1,2,1,2,1,3,1,3,3,3,60,8,3,1,4,1,4,1,4,3,4,65,8,
	4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,4,7,76,8,7,11,7,12,7,77,1,8,1,8,3,
	8,82,8,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,91,8,10,1,11,1,11,3,11,95,
	8,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,5,16,109,
	8,16,10,16,12,16,112,9,16,1,17,1,17,1,17,1,17,5,17,118,8,17,10,17,12,17,
	121,9,17,3,17,123,8,17,1,17,1,17,1,18,1,18,1,18,1,18,5,18,131,8,18,10,18,
	12,18,134,9,18,1,18,1,18,1,19,1,19,1,19,1,19,5,19,142,8,19,10,19,12,19,
	145,9,19,3,19,147,8,19,1,19,1,19,1,20,1,20,1,20,1,20,5,20,155,8,20,10,20,
	12,20,158,9,20,3,20,160,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,
	22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
	44,0,0,165,0,46,1,0,0,0,2,51,1,0,0,0,4,53,1,0,0,0,6,57,1,0,0,0,8,64,1,0,
	0,0,10,66,1,0,0,0,12,69,1,0,0,0,14,72,1,0,0,0,16,81,1,0,0,0,18,83,1,0,0,
	0,20,90,1,0,0,0,22,94,1,0,0,0,24,96,1,0,0,0,26,98,1,0,0,0,28,100,1,0,0,
	0,30,102,1,0,0,0,32,105,1,0,0,0,34,113,1,0,0,0,36,126,1,0,0,0,38,137,1,
	0,0,0,40,150,1,0,0,0,42,163,1,0,0,0,44,167,1,0,0,0,46,47,3,2,1,0,47,1,1,
	0,0,0,48,52,3,4,2,0,49,50,4,1,0,1,50,52,3,6,3,0,51,48,1,0,0,0,51,49,1,0,
	0,0,52,3,1,0,0,0,53,54,3,8,4,0,54,55,5,11,0,0,55,56,3,20,10,0,56,5,1,0,
	0,0,57,59,5,13,0,0,58,60,3,20,10,0,59,58,1,0,0,0,59,60,1,0,0,0,60,7,1,0,
	0,0,61,65,3,10,5,0,62,65,3,12,6,0,63,65,3,14,7,0,64,61,1,0,0,0,64,62,1,
	0,0,0,64,63,1,0,0,0,65,9,1,0,0,0,66,67,5,12,0,0,67,68,3,18,9,0,68,11,1,
	0,0,0,69,70,5,12,0,0,70,71,3,44,22,0,71,13,1,0,0,0,72,75,3,16,8,0,73,74,
	5,7,0,0,74,76,3,44,22,0,75,73,1,0,0,0,76,77,1,0,0,0,77,75,1,0,0,0,77,78,
	1,0,0,0,78,15,1,0,0,0,79,82,3,18,9,0,80,82,3,44,22,0,81,79,1,0,0,0,81,80,
	1,0,0,0,82,17,1,0,0,0,83,84,5,21,0,0,84,19,1,0,0,0,85,91,3,22,11,0,86,91,
	3,26,13,0,87,91,3,28,14,0,88,91,3,30,15,0,89,91,3,36,18,0,90,85,1,0,0,0,
	90,86,1,0,0,0,90,87,1,0,0,0,90,88,1,0,0,0,90,89,1,0,0,0,91,21,1,0,0,0,92,
	95,3,40,20,0,93,95,3,24,12,0,94,92,1,0,0,0,94,93,1,0,0,0,95,23,1,0,0,0,
	96,97,5,19,0,0,97,25,1,0,0,0,98,99,3,44,22,0,99,27,1,0,0,0,100,101,3,14,
	7,0,101,29,1,0,0,0,102,103,3,32,16,0,103,104,3,34,17,0,104,31,1,0,0,0,105,
	110,3,16,8,0,106,107,5,7,0,0,107,109,3,44,22,0,108,106,1,0,0,0,109,112,
	1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,33,1,0,0,0,112,110,1,0,0,0,
	113,122,5,1,0,0,114,119,3,20,10,0,115,116,5,8,0,0,116,118,3,20,10,0,117,
	115,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,123,1,0,
	0,0,121,119,1,0,0,0,122,114,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,
	125,5,2,0,0,125,35,1,0,0,0,126,127,5,14,0,0,127,128,3,38,19,0,128,132,5,
	5,0,0,129,131,3,2,1,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,
	133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,136,5,6,0,0,136,37,1,0,
	0,0,137,146,5,1,0,0,138,143,3,44,22,0,139,140,5,8,0,0,140,142,3,44,22,0,
	141,139,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,147,
	1,0,0,0,145,143,1,0,0,0,146,138,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,
	148,149,5,2,0,0,149,39,1,0,0,0,150,159,5,5,0,0,151,156,3,42,21,0,152,153,
	5,8,0,0,153,155,3,42,21,0,154,152,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,
	0,156,157,1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,0,159,151,1,0,0,0,159,160,
	1,0,0,0,160,161,1,0,0,0,161,162,5,6,0,0,162,41,1,0,0,0,163,164,3,44,22,
	0,164,165,5,9,0,0,165,166,3,20,10,0,166,43,1,0,0,0,167,168,5,22,0,0,168,
	45,1,0,0,0,15,51,59,64,77,81,90,94,110,119,122,132,143,146,156,159];

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
	public function_call_expression(): Function_call_expressionContext {
		return this.getTypedRuleContext(Function_call_expressionContext, 0) as Function_call_expressionContext;
	}
	public function_definition(): Function_definitionContext {
		return this.getTypedRuleContext(Function_definitionContext, 0) as Function_definitionContext;
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
	public string_literal(): String_literalContext {
		return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
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


export class String_literalContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(AiParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_string_literal;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterString_literal) {
	 		listener.enterString_literal(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitString_literal) {
	 		listener.exitString_literal(this);
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


export class Function_call_expressionContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_selector(): Function_selectorContext {
		return this.getTypedRuleContext(Function_selectorContext, 0) as Function_selectorContext;
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_function_call_expression;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterFunction_call_expression) {
	 		listener.enterFunction_call_expression(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitFunction_call_expression) {
	 		listener.exitFunction_call_expression(this);
		}
	}
}


export class Function_selectorContext extends ParserRuleContext {
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
    	return AiParser.RULE_function_selector;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterFunction_selector) {
	 		listener.enterFunction_selector(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitFunction_selector) {
	 		listener.exitFunction_selector(this);
		}
	}
}


export class Argument_listContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(AiParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(AiParser.RPAR, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(AiParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(AiParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_argument_list;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterArgument_list) {
	 		listener.enterArgument_list(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitArgument_list) {
	 		listener.exitArgument_list(this);
		}
	}
}


export class Function_definitionContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(AiParser.FUNCTION, 0);
	}
	public parameter_list(): Parameter_listContext {
		return this.getTypedRuleContext(Parameter_listContext, 0) as Parameter_listContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(AiParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(AiParser.RCURL, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_function_definition;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterFunction_definition) {
	 		listener.enterFunction_definition(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitFunction_definition) {
	 		listener.exitFunction_definition(this);
		}
	}
}


export class Parameter_listContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(AiParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(AiParser.RPAR, 0);
	}
	public variable_id_list(): Variable_idContext[] {
		return this.getTypedRuleContexts(Variable_idContext) as Variable_idContext[];
	}
	public variable_id(i: number): Variable_idContext {
		return this.getTypedRuleContext(Variable_idContext, i) as Variable_idContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(AiParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(AiParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_parameter_list;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterParameter_list) {
	 		listener.enterParameter_list(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitParameter_list) {
	 		listener.exitParameter_list(this);
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
