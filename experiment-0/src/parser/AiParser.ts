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
	public static readonly FUNCTION = 13;
	public static readonly INTEGER_LITERAL = 14;
	public static readonly DECIMAL_LITERAL = 15;
	public static readonly BOOLEAN_LITERAL = 16;
	public static readonly CHAR_LITERAL = 17;
	public static readonly STRING_LITERAL = 18;
	public static readonly NULL_LITERAL = 19;
	public static readonly PASCAL_CASE_IDENTIFIER = 20;
	public static readonly CAMEL_CASE_IDENTIFIER = 21;
	public static readonly ANY_IDENTIFIER = 22;
	public static readonly WS = 23;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_statement = 0;
	public static readonly RULE_assign_statement = 1;
	public static readonly RULE_assignable = 2;
	public static readonly RULE_type_declaration = 3;
	public static readonly RULE_type_id = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_literal_expression = 6;
	public static readonly RULE_object_literal = 7;
	public static readonly RULE_object_entry = 8;
	public static readonly RULE_variable_id = 9;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'.'", 
                                                            "','", "':'", 
                                                            "';'", "'='", 
                                                            "'var'", "'function'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'null'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LPAR", 
                                                             "RPAR", "LBRAK", 
                                                             "RBRAK", "LCURL", 
                                                             "RCURL", "DOT", 
                                                             "COMMA", "COLON", 
                                                             "SEMI", "ASSIGN", 
                                                             "VAR", "FUNCTION", 
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
		"statement", "assign_statement", "assignable", "type_declaration", "type_id", 
		"expression", "literal_expression", "object_literal", "object_entry", 
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, AiParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 20;
			this.assign_statement();
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
		this.enterRule(localctx, 2, AiParser.RULE_assign_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 22;
			this.assignable();
			this.state = 23;
			this.match(AiParser.ASSIGN);
			this.state = 24;
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
	public assignable(): AssignableContext {
		let localctx: AssignableContext = new AssignableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, AiParser.RULE_assignable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this.type_declaration();
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
		this.enterRule(localctx, 6, AiParser.RULE_type_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			this.match(AiParser.VAR);
			this.state = 29;
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
	public type_id(): Type_idContext {
		let localctx: Type_idContext = new Type_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, AiParser.RULE_type_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
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
		this.enterRule(localctx, 10, AiParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 33;
			this.literal_expression();
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
		this.enterRule(localctx, 12, AiParser.RULE_literal_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 35;
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
	public object_literal(): Object_literalContext {
		let localctx: Object_literalContext = new Object_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, AiParser.RULE_object_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this.match(AiParser.LCURL);
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 38;
				this.object_entry();
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===8) {
					{
					{
					this.state = 39;
					this.match(AiParser.COMMA);
					this.state = 40;
					this.object_entry();
					}
					}
					this.state = 45;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 48;
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
		this.enterRule(localctx, 16, AiParser.RULE_object_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this.variable_id();
			this.state = 51;
			this.match(AiParser.COLON);
			this.state = 52;
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
		this.enterRule(localctx, 18, AiParser.RULE_variable_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
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

	public static readonly _serializedATN: number[] = [4,1,23,57,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
	7,1,7,1,7,5,7,42,8,7,10,7,12,7,45,9,7,3,7,47,8,7,1,7,1,7,1,8,1,8,1,8,1,
	8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,0,48,0,20,1,0,0,0,2,22,
	1,0,0,0,4,26,1,0,0,0,6,28,1,0,0,0,8,31,1,0,0,0,10,33,1,0,0,0,12,35,1,0,
	0,0,14,37,1,0,0,0,16,50,1,0,0,0,18,54,1,0,0,0,20,21,3,2,1,0,21,1,1,0,0,
	0,22,23,3,4,2,0,23,24,5,11,0,0,24,25,3,10,5,0,25,3,1,0,0,0,26,27,3,6,3,
	0,27,5,1,0,0,0,28,29,5,12,0,0,29,30,3,8,4,0,30,7,1,0,0,0,31,32,5,20,0,0,
	32,9,1,0,0,0,33,34,3,12,6,0,34,11,1,0,0,0,35,36,3,14,7,0,36,13,1,0,0,0,
	37,46,5,5,0,0,38,43,3,16,8,0,39,40,5,8,0,0,40,42,3,16,8,0,41,39,1,0,0,0,
	42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,46,
	38,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,6,0,0,49,15,1,0,0,0,50,51,
	3,18,9,0,51,52,5,9,0,0,52,53,3,10,5,0,53,17,1,0,0,0,54,55,5,21,0,0,55,19,
	1,0,0,0,2,43,46];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AiParser.__ATN) {
			AiParser.__ATN = new ATNDeserializer().deserialize(AiParser._serializedATN);
		}

		return AiParser.__ATN;
	}


	static DecisionsToDFA = AiParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StatementContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign_statement(): Assign_statementContext {
		return this.getTypedRuleContext(Assign_statementContext, 0) as Assign_statementContext;
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


export class AssignableContext extends ParserRuleContext {
	constructor(parser?: AiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_declaration(): Type_declarationContext {
		return this.getTypedRuleContext(Type_declarationContext, 0) as Type_declarationContext;
	}
    public get ruleIndex(): number {
    	return AiParser.RULE_assignable;
	}
	public enterRule(listener: AiParserListener): void {
	    if(listener.enterAssignable) {
	 		listener.enterAssignable(this);
		}
	}
	public exitRule(listener: AiParserListener): void {
	    if(listener.exitAssignable) {
	 		listener.exitAssignable(this);
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
