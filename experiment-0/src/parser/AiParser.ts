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
	public static readonly MULTI_LINE_COMMENT = 1;
	public static readonly SINGLE_LINE_COMMENT = 2;
	public static readonly LPAR = 3;
	public static readonly RPAR = 4;
	public static readonly LBRAK = 5;
	public static readonly RBRAK = 6;
	public static readonly LCURL = 7;
	public static readonly RCURL = 8;
	public static readonly DOT = 9;
	public static readonly COMMA = 10;
	public static readonly COLON = 11;
	public static readonly SEMI = 12;
	public static readonly ASSIGN = 13;
	public static readonly VAR = 14;
	public static readonly RETURN = 15;
	public static readonly FUNCTION = 16;
	public static readonly INTEGER_LITERAL = 17;
	public static readonly DECIMAL_LITERAL = 18;
	public static readonly NULL_LITERAL = 19;
	public static readonly BOOLEAN_LITERAL = 20;
	public static readonly CHAR_LITERAL = 21;
	public static readonly STRING_LITERAL = 22;
	public static readonly PASCAL_CASE_IDENTIFIER = 23;
	public static readonly CAMEL_CASE_IDENTIFIER = 24;
	public static readonly ANY_IDENTIFIER = 25;
	public static readonly WS = 26;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_module = 0;
	public static readonly RULE_top_level_statement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_assign_statement = 3;
	public static readonly RULE_return_statement = 4;
	public static readonly RULE_assignable = 5;
	public static readonly RULE_type_declaration = 6;
	public static readonly RULE_variable_declaration = 7;
	public static readonly RULE_member_selector = 8;
	public static readonly RULE_selectable = 9;
	public static readonly RULE_type_id = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_literal_expression = 12;
	public static readonly RULE_string_literal = 13;
	public static readonly RULE_instance_expression = 14;
	public static readonly RULE_member_expression = 15;
	public static readonly RULE_function_call_expression = 16;
	public static readonly RULE_function_selector = 17;
	public static readonly RULE_argument_list = 18;
	public static readonly RULE_function_definition = 19;
	public static readonly RULE_parameter_list = 20;
	public static readonly RULE_object_literal = 21;
	public static readonly RULE_object_entry = 22;
	public static readonly RULE_variable_id = 23;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'.'", 
                                                            "','", "':'", 
                                                            "';'", "'='", 
                                                            "'var'", "'return'", 
                                                            "'function'", 
                                                            null, null, 
                                                            "'null'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "MULTI_LINE_COMMENT", 
                                                             "SINGLE_LINE_COMMENT", 
                                                             "LPAR", "RPAR", 
                                                             "LBRAK", "RBRAK", 
                                                             "LCURL", "RCURL", 
                                                             "DOT", "COMMA", 
                                                             "COLON", "SEMI", 
                                                             "ASSIGN", "VAR", 
                                                             "RETURN", "FUNCTION", 
                                                             "INTEGER_LITERAL", 
                                                             "DECIMAL_LITERAL", 
                                                             "NULL_LITERAL", 
                                                             "BOOLEAN_LITERAL", 
                                                             "CHAR_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "PASCAL_CASE_IDENTIFIER", 
                                                             "CAMEL_CASE_IDENTIFIER", 
                                                             "ANY_IDENTIFIER", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"module", "top_level_statement", "statement", "assign_statement", "return_statement", 
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
	public module_(): ModuleContext {
		let localctx: ModuleContext = new ModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, AiParser.RULE_module);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 48;
					this.top_level_statement();
					}
					}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
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
	public top_level_statement(): Top_level_statementContext {
		let localctx: Top_level_statementContext = new Top_level_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, AiParser.RULE_top_level_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
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
		this.enterRule(localctx, 4, AiParser.RULE_statement);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 56;
				this.assign_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 57;
				if (!( localctx.allow_return )) {
					throw this.createFailedPredicateException(" $allow_return ");
				}
				this.state = 58;
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
		this.enterRule(localctx, 6, AiParser.RULE_assign_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.assignable();
			this.state = 62;
			this.match(AiParser.ASSIGN);
			this.state = 63;
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
		this.enterRule(localctx, 8, AiParser.RULE_return_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 65;
			this.match(AiParser.RETURN);
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 66;
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
		this.enterRule(localctx, 10, AiParser.RULE_assignable);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new TypeDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 69;
				this.type_declaration();
				}
				break;
			case 2:
				localctx = new VariableDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 70;
				this.variable_declaration();
				}
				break;
			case 3:
				localctx = new AssignableMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 71;
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
		this.enterRule(localctx, 12, AiParser.RULE_type_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			this.match(AiParser.VAR);
			this.state = 75;
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
		this.enterRule(localctx, 14, AiParser.RULE_variable_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(AiParser.VAR);
			this.state = 78;
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
		this.enterRule(localctx, 16, AiParser.RULE_member_selector);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.selectable();
			this.state = 83;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 81;
					this.match(AiParser.DOT);
					this.state = 82;
					this.variable_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 85;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
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
		this.enterRule(localctx, 18, AiParser.RULE_selectable);
		try {
			this.state = 89;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				localctx = new SelectableTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 87;
				this.type_id();
				}
				break;
			case 24:
				localctx = new SelectableVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 88;
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
		this.enterRule(localctx, 20, AiParser.RULE_type_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 91;
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
		this.enterRule(localctx, 22, AiParser.RULE_expression);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 93;
				this.literal_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 94;
				this.instance_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 95;
				this.member_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 96;
				this.function_call_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 97;
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
		this.enterRule(localctx, 24, AiParser.RULE_literal_expression);
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this.object_literal();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 101;
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
		this.enterRule(localctx, 26, AiParser.RULE_string_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 104;
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
		this.enterRule(localctx, 28, AiParser.RULE_instance_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 106;
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
		this.enterRule(localctx, 30, AiParser.RULE_member_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
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
		this.enterRule(localctx, 32, AiParser.RULE_function_call_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.function_selector();
			this.state = 111;
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
		this.enterRule(localctx, 34, AiParser.RULE_function_selector);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.selectable();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 114;
				this.match(AiParser.DOT);
				this.state = 115;
				this.variable_id();
				}
				}
				this.state = 120;
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
		this.enterRule(localctx, 36, AiParser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 121;
			this.match(AiParser.LPAR);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29425792) !== 0)) {
				{
				this.state = 122;
				this.expression();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 123;
					this.match(AiParser.COMMA);
					this.state = 124;
					this.expression();
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 132;
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
		this.enterRule(localctx, 38, AiParser.RULE_function_definition);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
			this.match(AiParser.FUNCTION);
			this.state = 135;
			this.parameter_list();
			this.state = 136;
			this.match(AiParser.LCURL);
			this.state = 140;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 137;
					this.statement(true);
					}
					}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 143;
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
		this.enterRule(localctx, 40, AiParser.RULE_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this.match(AiParser.LPAR);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 146;
				this.variable_id();
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 147;
					this.match(AiParser.COMMA);
					this.state = 148;
					this.variable_id();
					}
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 156;
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
		this.enterRule(localctx, 42, AiParser.RULE_object_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 158;
			this.match(AiParser.LCURL);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 159;
				this.object_entry();
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 160;
					this.match(AiParser.COMMA);
					this.state = 161;
					this.object_entry();
					}
					}
					this.state = 166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 169;
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
		this.enterRule(localctx, 44, AiParser.RULE_object_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
			this.variable_id();
			this.state = 172;
			this.match(AiParser.COLON);
			this.state = 173;
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
		this.enterRule(localctx, 46, AiParser.RULE_variable_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
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
		case 2:
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

	public static readonly _serializedATN: number[] = [4,1,26,178,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,5,
	0,50,8,0,10,0,12,0,53,9,0,1,1,1,1,1,2,1,2,1,2,3,2,60,8,2,1,3,1,3,1,3,1,
	3,1,4,1,4,3,4,68,8,4,1,5,1,5,1,5,3,5,73,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,
	1,8,1,8,4,8,84,8,8,11,8,12,8,85,1,9,1,9,3,9,90,8,9,1,10,1,10,1,11,1,11,
	1,11,1,11,1,11,3,11,99,8,11,1,12,1,12,3,12,103,8,12,1,13,1,13,1,14,1,14,
	1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,5,17,117,8,17,10,17,12,17,120,9,
	17,1,18,1,18,1,18,1,18,5,18,126,8,18,10,18,12,18,129,9,18,3,18,131,8,18,
	1,18,1,18,1,19,1,19,1,19,1,19,5,19,139,8,19,10,19,12,19,142,9,19,1,19,1,
	19,1,20,1,20,1,20,1,20,5,20,150,8,20,10,20,12,20,153,9,20,3,20,155,8,20,
	1,20,1,20,1,21,1,21,1,21,1,21,5,21,163,8,21,10,21,12,21,166,9,21,3,21,168,
	8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,0,0,24,0,2,4,6,8,10,12,
	14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,0,173,0,51,1,0,0,0,
	2,54,1,0,0,0,4,59,1,0,0,0,6,61,1,0,0,0,8,65,1,0,0,0,10,72,1,0,0,0,12,74,
	1,0,0,0,14,77,1,0,0,0,16,80,1,0,0,0,18,89,1,0,0,0,20,91,1,0,0,0,22,98,1,
	0,0,0,24,102,1,0,0,0,26,104,1,0,0,0,28,106,1,0,0,0,30,108,1,0,0,0,32,110,
	1,0,0,0,34,113,1,0,0,0,36,121,1,0,0,0,38,134,1,0,0,0,40,145,1,0,0,0,42,
	158,1,0,0,0,44,171,1,0,0,0,46,175,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,
	53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,1,1,0,0,0,53,51,1,0,0,0,54,55,
	3,4,2,0,55,3,1,0,0,0,56,60,3,6,3,0,57,58,4,2,0,1,58,60,3,8,4,0,59,56,1,
	0,0,0,59,57,1,0,0,0,60,5,1,0,0,0,61,62,3,10,5,0,62,63,5,13,0,0,63,64,3,
	22,11,0,64,7,1,0,0,0,65,67,5,15,0,0,66,68,3,22,11,0,67,66,1,0,0,0,67,68,
	1,0,0,0,68,9,1,0,0,0,69,73,3,12,6,0,70,73,3,14,7,0,71,73,3,16,8,0,72,69,
	1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,11,1,0,0,0,74,75,5,14,0,0,75,76,
	3,20,10,0,76,13,1,0,0,0,77,78,5,14,0,0,78,79,3,46,23,0,79,15,1,0,0,0,80,
	83,3,18,9,0,81,82,5,9,0,0,82,84,3,46,23,0,83,81,1,0,0,0,84,85,1,0,0,0,85,
	83,1,0,0,0,85,86,1,0,0,0,86,17,1,0,0,0,87,90,3,20,10,0,88,90,3,46,23,0,
	89,87,1,0,0,0,89,88,1,0,0,0,90,19,1,0,0,0,91,92,5,23,0,0,92,21,1,0,0,0,
	93,99,3,24,12,0,94,99,3,28,14,0,95,99,3,30,15,0,96,99,3,32,16,0,97,99,3,
	38,19,0,98,93,1,0,0,0,98,94,1,0,0,0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,
	0,0,0,99,23,1,0,0,0,100,103,3,42,21,0,101,103,3,26,13,0,102,100,1,0,0,0,
	102,101,1,0,0,0,103,25,1,0,0,0,104,105,5,22,0,0,105,27,1,0,0,0,106,107,
	3,46,23,0,107,29,1,0,0,0,108,109,3,16,8,0,109,31,1,0,0,0,110,111,3,34,17,
	0,111,112,3,36,18,0,112,33,1,0,0,0,113,118,3,18,9,0,114,115,5,9,0,0,115,
	117,3,46,23,0,116,114,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,
	0,0,0,119,35,1,0,0,0,120,118,1,0,0,0,121,130,5,3,0,0,122,127,3,22,11,0,
	123,124,5,10,0,0,124,126,3,22,11,0,125,123,1,0,0,0,126,129,1,0,0,0,127,
	125,1,0,0,0,127,128,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,130,122,1,0,
	0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,4,0,0,133,37,1,0,0,0,134,
	135,5,16,0,0,135,136,3,40,20,0,136,140,5,7,0,0,137,139,3,4,2,0,138,137,
	1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,
	142,140,1,0,0,0,143,144,5,8,0,0,144,39,1,0,0,0,145,154,5,3,0,0,146,151,
	3,46,23,0,147,148,5,10,0,0,148,150,3,46,23,0,149,147,1,0,0,0,150,153,1,
	0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,154,
	146,1,0,0,0,154,155,1,0,0,0,155,156,1,0,0,0,156,157,5,4,0,0,157,41,1,0,
	0,0,158,167,5,7,0,0,159,164,3,44,22,0,160,161,5,10,0,0,161,163,3,44,22,
	0,162,160,1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,168,
	1,0,0,0,166,164,1,0,0,0,167,159,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,
	169,170,5,8,0,0,170,43,1,0,0,0,171,172,3,46,23,0,172,173,5,11,0,0,173,174,
	3,22,11,0,174,45,1,0,0,0,175,176,5,24,0,0,176,47,1,0,0,0,16,51,59,67,72,
	85,89,98,102,118,127,130,140,151,154,164,167];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AiParser.__ATN) {
			AiParser.__ATN = new ATNDeserializer().deserialize(AiParser._serializedATN);
		}

		return AiParser.__ATN;
	}


	static DecisionsToDFA = AiParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ModuleContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public top_level_statement_list(): Top_level_statementContext[] {
		return this.getTypedRuleContexts(Top_level_statementContext) as Top_level_statementContext[];
	}
	public top_level_statement(i: number): Top_level_statementContext {
		return this.getTypedRuleContext(Top_level_statementContext, i) as Top_level_statementContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_module;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterModule) {
	 		listener.enterModule(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitModule) {
	 		listener.exitModule(this);
		}
	}
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
