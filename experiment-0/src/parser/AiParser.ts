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
	public static readonly RULE_number_literal = 14;
	public static readonly RULE_instance_expression = 15;
	public static readonly RULE_member_expression = 16;
	public static readonly RULE_function_call_expression = 17;
	public static readonly RULE_function_selector = 18;
	public static readonly RULE_argument_list = 19;
	public static readonly RULE_function_definition = 20;
	public static readonly RULE_parameter_list = 21;
	public static readonly RULE_object_literal = 22;
	public static readonly RULE_object_entry = 23;
	public static readonly RULE_variable_id = 24;
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
		"number_literal", "instance_expression", "member_expression", "function_call_expression", 
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
			this.state = 53;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 50;
					this.top_level_statement();
					}
					}
				}
				this.state = 55;
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
			this.state = 56;
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
	public statement(allow_local: boolean): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state, allow_local);
		this.enterRule(localctx, 4, AiParser.RULE_statement);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 58;
				this.assign_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 59;
				if (!( localctx.allow_local )) {
					throw this.createFailedPredicateException(" $allow_local ");
				}
				this.state = 60;
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
			this.state = 63;
			this.assignable();
			this.state = 64;
			this.match(AiParser.ASSIGN);
			this.state = 65;
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
			this.state = 67;
			this.match(AiParser.RETURN);
			this.state = 69;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 68;
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
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new TypeDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 71;
				this.type_declaration();
				}
				break;
			case 2:
				localctx = new VariableDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 72;
				this.variable_declaration();
				}
				break;
			case 3:
				localctx = new AssignableMemberContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 73;
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
			this.state = 76;
			this.match(AiParser.VAR);
			this.state = 77;
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
			this.state = 79;
			this.match(AiParser.VAR);
			this.state = 80;
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
			this.state = 82;
			this.selectable();
			this.state = 85;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 83;
					this.match(AiParser.DOT);
					this.state = 84;
					this.variable_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 87;
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
			this.state = 91;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				localctx = new SelectableTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 89;
				this.type_id();
				}
				break;
			case 24:
				localctx = new SelectableVariableContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 90;
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
			this.state = 93;
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
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 95;
				this.literal_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 96;
				this.instance_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 97;
				this.member_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 98;
				this.function_call_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 99;
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
			this.state = 105;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 102;
				this.object_literal();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 103;
				this.string_literal();
				}
				break;
			case 17:
			case 18:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 104;
				this.number_literal();
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
			this.state = 107;
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
	public number_literal(): Number_literalContext {
		let localctx: Number_literalContext = new Number_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, AiParser.RULE_number_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			_la = this._input.LA(1);
			if(!(_la===17 || _la===18)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public instance_expression(): Instance_expressionContext {
		let localctx: Instance_expressionContext = new Instance_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, AiParser.RULE_instance_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
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
		this.enterRule(localctx, 32, AiParser.RULE_member_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
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
		this.enterRule(localctx, 34, AiParser.RULE_function_call_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.function_selector();
			this.state = 116;
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
		this.enterRule(localctx, 36, AiParser.RULE_function_selector);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.selectable();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 119;
				this.match(AiParser.DOT);
				this.state = 120;
				this.variable_id();
				}
				}
				this.state = 125;
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
		this.enterRule(localctx, 38, AiParser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(AiParser.LPAR);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29819008) !== 0)) {
				{
				this.state = 127;
				this.expression();
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 128;
					this.match(AiParser.COMMA);
					this.state = 129;
					this.expression();
					}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 137;
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
		this.enterRule(localctx, 40, AiParser.RULE_function_definition);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.match(AiParser.FUNCTION);
			this.state = 140;
			this.parameter_list();
			this.state = 141;
			this.match(AiParser.LCURL);
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 142;
					this.statement(true);
					}
					}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 148;
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
		this.enterRule(localctx, 42, AiParser.RULE_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.match(AiParser.LPAR);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 151;
				this.variable_id();
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 152;
					this.match(AiParser.COMMA);
					this.state = 153;
					this.variable_id();
					}
					}
					this.state = 158;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 161;
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
		this.enterRule(localctx, 44, AiParser.RULE_object_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.match(AiParser.LCURL);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 164;
				this.object_entry();
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 165;
					this.match(AiParser.COMMA);
					this.state = 166;
					this.object_entry();
					}
					}
					this.state = 171;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 174;
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
		this.enterRule(localctx, 46, AiParser.RULE_object_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.variable_id();
			this.state = 177;
			this.match(AiParser.COLON);
			this.state = 178;
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
		this.enterRule(localctx, 48, AiParser.RULE_variable_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
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
			return  localctx.allow_local ;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,26,183,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,1,0,5,0,52,8,0,10,0,12,0,55,9,0,1,1,1,1,1,2,1,2,1,2,3,2,62,8,2,1,3,1,
	3,1,3,1,3,1,4,1,4,3,4,70,8,4,1,5,1,5,1,5,3,5,75,8,5,1,6,1,6,1,6,1,7,1,7,
	1,7,1,8,1,8,1,8,4,8,86,8,8,11,8,12,8,87,1,9,1,9,3,9,92,8,9,1,10,1,10,1,
	11,1,11,1,11,1,11,1,11,3,11,101,8,11,1,12,1,12,1,12,3,12,106,8,12,1,13,
	1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,5,18,122,
	8,18,10,18,12,18,125,9,18,1,19,1,19,1,19,1,19,5,19,131,8,19,10,19,12,19,
	134,9,19,3,19,136,8,19,1,19,1,19,1,20,1,20,1,20,1,20,5,20,144,8,20,10,20,
	12,20,147,9,20,1,20,1,20,1,21,1,21,1,21,1,21,5,21,155,8,21,10,21,12,21,
	158,9,21,3,21,160,8,21,1,21,1,21,1,22,1,22,1,22,1,22,5,22,168,8,22,10,22,
	12,22,171,9,22,3,22,173,8,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,
	24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
	44,46,48,0,1,1,0,17,18,178,0,53,1,0,0,0,2,56,1,0,0,0,4,61,1,0,0,0,6,63,
	1,0,0,0,8,67,1,0,0,0,10,74,1,0,0,0,12,76,1,0,0,0,14,79,1,0,0,0,16,82,1,
	0,0,0,18,91,1,0,0,0,20,93,1,0,0,0,22,100,1,0,0,0,24,105,1,0,0,0,26,107,
	1,0,0,0,28,109,1,0,0,0,30,111,1,0,0,0,32,113,1,0,0,0,34,115,1,0,0,0,36,
	118,1,0,0,0,38,126,1,0,0,0,40,139,1,0,0,0,42,150,1,0,0,0,44,163,1,0,0,0,
	46,176,1,0,0,0,48,180,1,0,0,0,50,52,3,2,1,0,51,50,1,0,0,0,52,55,1,0,0,0,
	53,51,1,0,0,0,53,54,1,0,0,0,54,1,1,0,0,0,55,53,1,0,0,0,56,57,3,4,2,0,57,
	3,1,0,0,0,58,62,3,6,3,0,59,60,4,2,0,1,60,62,3,8,4,0,61,58,1,0,0,0,61,59,
	1,0,0,0,62,5,1,0,0,0,63,64,3,10,5,0,64,65,5,13,0,0,65,66,3,22,11,0,66,7,
	1,0,0,0,67,69,5,15,0,0,68,70,3,22,11,0,69,68,1,0,0,0,69,70,1,0,0,0,70,9,
	1,0,0,0,71,75,3,12,6,0,72,75,3,14,7,0,73,75,3,16,8,0,74,71,1,0,0,0,74,72,
	1,0,0,0,74,73,1,0,0,0,75,11,1,0,0,0,76,77,5,14,0,0,77,78,3,20,10,0,78,13,
	1,0,0,0,79,80,5,14,0,0,80,81,3,48,24,0,81,15,1,0,0,0,82,85,3,18,9,0,83,
	84,5,9,0,0,84,86,3,48,24,0,85,83,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,
	88,1,0,0,0,88,17,1,0,0,0,89,92,3,20,10,0,90,92,3,48,24,0,91,89,1,0,0,0,
	91,90,1,0,0,0,92,19,1,0,0,0,93,94,5,23,0,0,94,21,1,0,0,0,95,101,3,24,12,
	0,96,101,3,30,15,0,97,101,3,32,16,0,98,101,3,34,17,0,99,101,3,40,20,0,100,
	95,1,0,0,0,100,96,1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,
	101,23,1,0,0,0,102,106,3,44,22,0,103,106,3,26,13,0,104,106,3,28,14,0,105,
	102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,0,0,106,25,1,0,0,0,107,108,5,22,
	0,0,108,27,1,0,0,0,109,110,7,0,0,0,110,29,1,0,0,0,111,112,3,48,24,0,112,
	31,1,0,0,0,113,114,3,16,8,0,114,33,1,0,0,0,115,116,3,36,18,0,116,117,3,
	38,19,0,117,35,1,0,0,0,118,123,3,18,9,0,119,120,5,9,0,0,120,122,3,48,24,
	0,121,119,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,37,
	1,0,0,0,125,123,1,0,0,0,126,135,5,3,0,0,127,132,3,22,11,0,128,129,5,10,
	0,0,129,131,3,22,11,0,130,128,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,
	133,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,135,127,1,0,0,0,135,136,1,0,
	0,0,136,137,1,0,0,0,137,138,5,4,0,0,138,39,1,0,0,0,139,140,5,16,0,0,140,
	141,3,42,21,0,141,145,5,7,0,0,142,144,3,4,2,0,143,142,1,0,0,0,144,147,1,
	0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,
	149,5,8,0,0,149,41,1,0,0,0,150,159,5,3,0,0,151,156,3,48,24,0,152,153,5,
	10,0,0,153,155,3,48,24,0,154,152,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,
	0,156,157,1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,0,159,151,1,0,0,0,159,160,
	1,0,0,0,160,161,1,0,0,0,161,162,5,4,0,0,162,43,1,0,0,0,163,172,5,7,0,0,
	164,169,3,46,23,0,165,166,5,10,0,0,166,168,3,46,23,0,167,165,1,0,0,0,168,
	171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,173,1,0,0,0,171,169,1,0,
	0,0,172,164,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,8,0,0,175,
	45,1,0,0,0,176,177,3,48,24,0,177,178,5,11,0,0,178,179,3,22,11,0,179,47,
	1,0,0,0,180,181,5,24,0,0,181,49,1,0,0,0,16,53,61,69,74,87,91,100,105,123,
	132,135,145,156,159,169,172];

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
	public allow_local: boolean;
	constructor(parser: AiParser, parent: ParserRuleContext, invokingState: number, allow_local: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.allow_local = allow_local;
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
	public number_literal(): Number_literalContext {
		return this.getTypedRuleContext(Number_literalContext, 0) as Number_literalContext;
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


export class Number_literalContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(AiParser.INTEGER_LITERAL, 0);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(AiParser.DECIMAL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_number_literal;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterNumber_literal) {
	 		listener.enterNumber_literal(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitNumber_literal) {
	 		listener.exitNumber_literal(this);
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
