// Generated from AiDocParser.g4 by ANTLR 4.12.0
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
import AiDocParserListener from "./AiDocParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class AiDocParser extends Parser {
	public static readonly INTERFACE = 1;
	public static readonly VERSION = 2;
	public static readonly RETURN = 3;
	public static readonly DRAFT = 4;
	public static readonly UNKNOWN = 5;
	public static readonly HASH_CODE = 6;
	public static readonly SEMVER = 7;
	public static readonly PASCAL_CASE_IDENTIFIER = 8;
	public static readonly CAMEL_CASE_IDENTIFIER = 9;
	public static readonly ARONDBASE = 10;
	public static readonly DOLLAR = 11;
	public static readonly OPTIONAL = 12;
	public static readonly PIPE = 13;
	public static readonly AIDOC_START = 14;
	public static readonly AIDOC_END = 15;
	public static readonly NEWLINE = 16;
	public static readonly SPACE = 17;
	public static readonly TEXT_CONTENT = 18;
	public static readonly STAR = 19;
	public static readonly SLASH = 20;
	public static readonly INLINE_TAG_START = 21;
	public static readonly BRACE_OPEN = 22;
	public static readonly BRACE_CLOSE = 23;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_documentation = 0;
	public static readonly RULE_bounded_comment = 1;
	public static readonly RULE_comment_start = 2;
	public static readonly RULE_comment_line = 3;
	public static readonly RULE_comment_end = 4;
	public static readonly RULE_comment = 5;
	public static readonly RULE_type_comment = 6;
	public static readonly RULE_property_comment = 7;
	public static readonly RULE_property_types = 8;
	public static readonly RULE_property_type = 9;
	public static readonly RULE_version_comment = 10;
	public static readonly RULE_version_value = 11;
	public static readonly RULE_text_comment = 12;
	public static readonly RULE_text_start = 13;
	public static readonly RULE_keyword = 14;
	public static readonly RULE_text_element = 15;
	public static readonly RULE_inline_tag = 16;
	public static readonly RULE_tag_content = 17;
	public static readonly RULE_tag_text = 18;
	public static readonly literalNames: (string | null)[] = [ null, "'interface'", 
                                                            "'version'", 
                                                            "'return'", 
                                                            "'draft'", "'UNKNOWN'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'@'", "'$'", 
                                                            "'?'", "'|'", 
                                                            null, "'*/'", 
                                                            null, null, 
                                                            null, "'*'", 
                                                            "'/'", "'{@'", 
                                                            "'{'", "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "INTERFACE", 
                                                             "VERSION", 
                                                             "RETURN", "DRAFT", 
                                                             "UNKNOWN", 
                                                             "HASH_CODE", 
                                                             "SEMVER", "PASCAL_CASE_IDENTIFIER", 
                                                             "CAMEL_CASE_IDENTIFIER", 
                                                             "ARONDBASE", 
                                                             "DOLLAR", "OPTIONAL", 
                                                             "PIPE", "AIDOC_START", 
                                                             "AIDOC_END", 
                                                             "NEWLINE", 
                                                             "SPACE", "TEXT_CONTENT", 
                                                             "STAR", "SLASH", 
                                                             "INLINE_TAG_START", 
                                                             "BRACE_OPEN", 
                                                             "BRACE_CLOSE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"documentation", "bounded_comment", "comment_start", "comment_line", "comment_end", 
		"comment", "type_comment", "property_comment", "property_types", "property_type", 
		"version_comment", "version_value", "text_comment", "text_start", "keyword", 
		"text_element", "inline_tag", "tag_content", "tag_text",
	];
	public get grammarFileName(): string { return "AiDocParser.g4"; }
	public get literalNames(): (string | null)[] { return AiDocParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return AiDocParser.symbolicNames; }
	public get ruleNames(): string[] { return AiDocParser.ruleNames; }
	public get serializedATN(): number[] { return AiDocParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, AiDocParser._ATN, AiDocParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public documentation(): DocumentationContext {
		let localctx: DocumentationContext = new DocumentationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, AiDocParser.RULE_documentation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 38;
					this.match(AiDocParser.NEWLINE);
					}
					}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 44;
				this.bounded_comment();
				}
			}

			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 47;
				this.match(AiDocParser.NEWLINE);
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
			this.match(AiDocParser.EOF);
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
	public bounded_comment(): Bounded_commentContext {
		let localctx: Bounded_commentContext = new Bounded_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, AiDocParser.RULE_bounded_comment);
		try {
			let _alt: number;
			this.state = 68;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 55;
				this.comment_start();
				this.state = 56;
				this.match(AiDocParser.NEWLINE);
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 57;
						this.comment_line();
						}
						}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 63;
				this.comment_end();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 65;
				this.comment_start();
				this.state = 66;
				this.comment_end();
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
	public comment_start(): Comment_startContext {
		let localctx: Comment_startContext = new Comment_startContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, AiDocParser.RULE_comment_start);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this.match(AiDocParser.AIDOC_START);
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 71;
				this.match(AiDocParser.SPACE);
				}
				break;
			}
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 74;
				this.comment();
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
	public comment_line(): Comment_lineContext {
		let localctx: Comment_lineContext = new Comment_lineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, AiDocParser.RULE_comment_line);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 77;
				this.match(AiDocParser.SPACE);
				}
			}

			this.state = 81;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 80;
					this.match(AiDocParser.STAR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 83;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 85;
				this.match(AiDocParser.SPACE);
				}
				break;
			}
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14421878) !== 0)) {
				{
				this.state = 88;
				this.comment();
				}
			}

			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 91;
				this.match(AiDocParser.SPACE);
				}
			}

			this.state = 94;
			this.match(AiDocParser.NEWLINE);
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
	public comment_end(): Comment_endContext {
		let localctx: Comment_endContext = new Comment_endContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, AiDocParser.RULE_comment_end);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 96;
					this.match(AiDocParser.SPACE);
					}
				}

				this.state = 100;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 99;
						this.match(AiDocParser.STAR);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 102;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 105;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 104;
					this.match(AiDocParser.SPACE);
					}
					break;
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14421878) !== 0)) {
					{
					this.state = 107;
					this.comment();
					}
				}

				}
				break;
			}
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 112;
				this.match(AiDocParser.SPACE);
				}
			}

			this.state = 115;
			this.match(AiDocParser.AIDOC_END);
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
	public comment(): CommentContext {
		let localctx: CommentContext = new CommentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, AiDocParser.RULE_comment);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 117;
				this.type_comment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 118;
				this.property_comment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 119;
				this.version_comment();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 120;
				this.text_comment();
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
	public type_comment(): Type_commentContext {
		let localctx: Type_commentContext = new Type_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, AiDocParser.RULE_type_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.match(AiDocParser.ARONDBASE);
			this.state = 124;
			this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
			this.state = 125;
			this.match(AiDocParser.SPACE);
			this.state = 126;
			this.match(AiDocParser.INTERFACE);
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 127;
				this.match(AiDocParser.SPACE);
				this.state = 128;
				this.text_comment();
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
	public property_comment(): Property_commentContext {
		let localctx: Property_commentContext = new Property_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, AiDocParser.RULE_property_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			this.match(AiDocParser.ARONDBASE);
			this.state = 132;
			this.match(AiDocParser.CAMEL_CASE_IDENTIFIER);
			this.state = 133;
			this.match(AiDocParser.SPACE);
			this.state = 134;
			this.property_types();
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 135;
				this.match(AiDocParser.SPACE);
				this.state = 136;
				this.text_comment();
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
	public property_types(): Property_typesContext {
		let localctx: Property_typesContext = new Property_typesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, AiDocParser.RULE_property_types);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.property_type();
			this.state = 150;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===17) {
						{
						this.state = 140;
						this.match(AiDocParser.SPACE);
						}
					}

					this.state = 143;
					this.match(AiDocParser.PIPE);
					this.state = 145;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===17) {
						{
						this.state = 144;
						this.match(AiDocParser.SPACE);
						}
					}

					this.state = 147;
					this.property_type();
					}
					}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
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
	public property_type(): Property_typeContext {
		let localctx: Property_typeContext = new Property_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, AiDocParser.RULE_property_type);
		let _la: number;
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 153;
				this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 154;
					this.match(AiDocParser.OPTIONAL);
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 157;
				this.match(AiDocParser.UNKNOWN);
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
	public version_comment(): Version_commentContext {
		let localctx: Version_commentContext = new Version_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, AiDocParser.RULE_version_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			this.match(AiDocParser.DOLLAR);
			this.state = 161;
			this.match(AiDocParser.VERSION);
			this.state = 162;
			this.match(AiDocParser.SPACE);
			this.state = 163;
			this.version_value();
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 164;
				this.match(AiDocParser.SPACE);
				this.state = 165;
				this.text_comment();
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
	public version_value(): Version_valueContext {
		let localctx: Version_valueContext = new Version_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, AiDocParser.RULE_version_value);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 168;
				this.match(AiDocParser.DRAFT);
				this.state = 169;
				this.match(AiDocParser.SPACE);
				this.state = 170;
				this.match(AiDocParser.HASH_CODE);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 171;
				this.match(AiDocParser.SEMVER);
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
	public text_comment(): Text_commentContext {
		let localctx: Text_commentContext = new Text_commentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, AiDocParser.RULE_text_comment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this.text_start();
			this.state = 184;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===17) {
						{
						this.state = 175;
						this.match(AiDocParser.SPACE);
						}
					}

					this.state = 180;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 2:
					case 4:
					case 5:
					case 6:
					case 8:
					case 9:
					case 10:
					case 11:
					case 18:
					case 19:
					case 20:
					case 22:
					case 23:
						{
						this.state = 178;
						this.text_element();
						}
						break;
					case 21:
						{
						this.state = 179;
						this.inline_tag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
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
	public text_start(): Text_startContext {
		let localctx: Text_startContext = new Text_startContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, AiDocParser.RULE_text_start);
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 187;
				this.match(AiDocParser.TEXT_CONTENT);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 188;
				this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 189;
				this.match(AiDocParser.CAMEL_CASE_IDENTIFIER);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 190;
				this.match(AiDocParser.STAR);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 191;
				this.match(AiDocParser.SLASH);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 192;
				this.match(AiDocParser.HASH_CODE);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 193;
				this.match(AiDocParser.BRACE_OPEN);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 194;
				this.match(AiDocParser.BRACE_CLOSE);
				}
				break;
			case 1:
			case 2:
			case 4:
			case 5:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 195;
				this.keyword();
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
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, AiDocParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 54) !== 0))) {
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
	public text_element(): Text_elementContext {
		let localctx: Text_elementContext = new Text_elementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, AiDocParser.RULE_text_element);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 4:
			case 5:
			case 6:
			case 8:
			case 9:
			case 18:
			case 19:
			case 20:
			case 22:
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 200;
				this.text_start();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 201;
				this.match(AiDocParser.ARONDBASE);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 202;
				this.match(AiDocParser.DOLLAR);
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
	public inline_tag(): Inline_tagContext {
		let localctx: Inline_tagContext = new Inline_tagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, AiDocParser.RULE_inline_tag);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this.match(AiDocParser.INLINE_TAG_START);
			this.state = 206;
			_la = this._input.LA(1);
			if(!(_la===8 || _la===9)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 207;
				this.match(AiDocParser.SPACE);
				}
			}

			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6095734) !== 0)) {
				{
				this.state = 210;
				this.tag_content();
				}
			}

			this.state = 213;
			this.match(AiDocParser.BRACE_CLOSE);
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
	public tag_content(): Tag_contentContext {
		let localctx: Tag_contentContext = new Tag_contentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, AiDocParser.RULE_tag_content);
		let _la: number;
		try {
			this.state = 224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 215;
				this.match(AiDocParser.BRACE_OPEN);
				this.state = 216;
				this.tag_content();
				this.state = 217;
				this.match(AiDocParser.BRACE_CLOSE);
				}
				break;
			case 1:
			case 2:
			case 4:
			case 5:
			case 6:
			case 8:
			case 9:
			case 16:
			case 18:
			case 19:
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 219;
					this.tag_text();
					}
					}
					this.state = 222;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1901430) !== 0));
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
	public tag_text(): Tag_textContext {
		let localctx: Tag_textContext = new Tag_textContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, AiDocParser.RULE_tag_text);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 18:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 226;
				this.match(AiDocParser.TEXT_CONTENT);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 227;
				this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 228;
				this.match(AiDocParser.CAMEL_CASE_IDENTIFIER);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 229;
				this.match(AiDocParser.STAR);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 230;
				this.match(AiDocParser.SLASH);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 231;
				this.match(AiDocParser.HASH_CODE);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 232;
				this.match(AiDocParser.NEWLINE);
				}
				break;
			case 1:
			case 2:
			case 4:
			case 5:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 233;
				this.keyword();
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

	public static readonly _serializedATN: number[] = [4,1,23,237,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,1,0,5,0,40,8,0,10,0,12,0,43,9,0,1,0,3,0,46,8,0,1,0,5,0,49,
	8,0,10,0,12,0,52,9,0,1,0,1,0,1,1,1,1,1,1,5,1,59,8,1,10,1,12,1,62,9,1,1,
	1,1,1,1,1,1,1,1,1,3,1,69,8,1,1,2,1,2,3,2,73,8,2,1,2,3,2,76,8,2,1,3,3,3,
	79,8,3,1,3,4,3,82,8,3,11,3,12,3,83,1,3,3,3,87,8,3,1,3,3,3,90,8,3,1,3,3,
	3,93,8,3,1,3,1,3,1,4,3,4,98,8,4,1,4,4,4,101,8,4,11,4,12,4,102,1,4,3,4,106,
	8,4,1,4,3,4,109,8,4,3,4,111,8,4,1,4,3,4,114,8,4,1,4,1,4,1,5,1,5,1,5,1,5,
	3,5,122,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,130,8,6,1,7,1,7,1,7,1,7,1,7,1,7,
	3,7,138,8,7,1,8,1,8,3,8,142,8,8,1,8,1,8,3,8,146,8,8,1,8,5,8,149,8,8,10,
	8,12,8,152,9,8,1,9,1,9,3,9,156,8,9,1,9,3,9,159,8,9,1,10,1,10,1,10,1,10,
	1,10,1,10,3,10,167,8,10,1,11,1,11,1,11,1,11,3,11,173,8,11,1,12,1,12,3,12,
	177,8,12,1,12,1,12,3,12,181,8,12,5,12,183,8,12,10,12,12,12,186,9,12,1,13,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,197,8,13,1,14,1,14,1,15,1,
	15,1,15,3,15,204,8,15,1,16,1,16,1,16,3,16,209,8,16,1,16,3,16,212,8,16,1,
	16,1,16,1,17,1,17,1,17,1,17,1,17,4,17,221,8,17,11,17,12,17,222,3,17,225,
	8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,235,8,18,1,18,0,0,19,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,2,2,0,1,2,4,5,1,0,
	8,9,271,0,41,1,0,0,0,2,68,1,0,0,0,4,70,1,0,0,0,6,78,1,0,0,0,8,110,1,0,0,
	0,10,121,1,0,0,0,12,123,1,0,0,0,14,131,1,0,0,0,16,139,1,0,0,0,18,158,1,
	0,0,0,20,160,1,0,0,0,22,172,1,0,0,0,24,174,1,0,0,0,26,196,1,0,0,0,28,198,
	1,0,0,0,30,203,1,0,0,0,32,205,1,0,0,0,34,224,1,0,0,0,36,234,1,0,0,0,38,
	40,5,16,0,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,
	45,1,0,0,0,43,41,1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,0,45,46,1,0,0,0,46,50,
	1,0,0,0,47,49,5,16,0,0,48,47,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,
	1,0,0,0,51,53,1,0,0,0,52,50,1,0,0,0,53,54,5,0,0,1,54,1,1,0,0,0,55,56,3,
	4,2,0,56,60,5,16,0,0,57,59,3,6,3,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,
	0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,0,0,63,64,3,8,4,0,64,69,1,0,
	0,0,65,66,3,4,2,0,66,67,3,8,4,0,67,69,1,0,0,0,68,55,1,0,0,0,68,65,1,0,0,
	0,69,3,1,0,0,0,70,72,5,14,0,0,71,73,5,17,0,0,72,71,1,0,0,0,72,73,1,0,0,
	0,73,75,1,0,0,0,74,76,3,10,5,0,75,74,1,0,0,0,75,76,1,0,0,0,76,5,1,0,0,0,
	77,79,5,17,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,82,5,19,0,0,
	81,80,1,0,0,0,82,83,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,
	87,5,17,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,90,3,10,5,0,89,
	88,1,0,0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,93,5,17,0,0,92,91,1,0,0,0,92,
	93,1,0,0,0,93,94,1,0,0,0,94,95,5,16,0,0,95,7,1,0,0,0,96,98,5,17,0,0,97,
	96,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,101,5,19,0,0,100,99,1,0,0,0,
	101,102,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,106,
	5,17,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,108,1,0,0,0,107,109,3,10,5,
	0,108,107,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,97,1,0,0,0,110,111,
	1,0,0,0,111,113,1,0,0,0,112,114,5,17,0,0,113,112,1,0,0,0,113,114,1,0,0,
	0,114,115,1,0,0,0,115,116,5,15,0,0,116,9,1,0,0,0,117,122,3,12,6,0,118,122,
	3,14,7,0,119,122,3,20,10,0,120,122,3,24,12,0,121,117,1,0,0,0,121,118,1,
	0,0,0,121,119,1,0,0,0,121,120,1,0,0,0,122,11,1,0,0,0,123,124,5,10,0,0,124,
	125,5,8,0,0,125,126,5,17,0,0,126,129,5,1,0,0,127,128,5,17,0,0,128,130,3,
	24,12,0,129,127,1,0,0,0,129,130,1,0,0,0,130,13,1,0,0,0,131,132,5,10,0,0,
	132,133,5,9,0,0,133,134,5,17,0,0,134,137,3,16,8,0,135,136,5,17,0,0,136,
	138,3,24,12,0,137,135,1,0,0,0,137,138,1,0,0,0,138,15,1,0,0,0,139,150,3,
	18,9,0,140,142,5,17,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,
	143,145,5,13,0,0,144,146,5,17,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,
	1,0,0,0,147,149,3,18,9,0,148,141,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,
	0,150,151,1,0,0,0,151,17,1,0,0,0,152,150,1,0,0,0,153,155,5,8,0,0,154,156,
	5,12,0,0,155,154,1,0,0,0,155,156,1,0,0,0,156,159,1,0,0,0,157,159,5,5,0,
	0,158,153,1,0,0,0,158,157,1,0,0,0,159,19,1,0,0,0,160,161,5,11,0,0,161,162,
	5,2,0,0,162,163,5,17,0,0,163,166,3,22,11,0,164,165,5,17,0,0,165,167,3,24,
	12,0,166,164,1,0,0,0,166,167,1,0,0,0,167,21,1,0,0,0,168,169,5,4,0,0,169,
	170,5,17,0,0,170,173,5,6,0,0,171,173,5,7,0,0,172,168,1,0,0,0,172,171,1,
	0,0,0,173,23,1,0,0,0,174,184,3,26,13,0,175,177,5,17,0,0,176,175,1,0,0,0,
	176,177,1,0,0,0,177,180,1,0,0,0,178,181,3,30,15,0,179,181,3,32,16,0,180,
	178,1,0,0,0,180,179,1,0,0,0,181,183,1,0,0,0,182,176,1,0,0,0,183,186,1,0,
	0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,25,1,0,0,0,186,184,1,0,0,0,187,
	197,5,18,0,0,188,197,5,8,0,0,189,197,5,9,0,0,190,197,5,19,0,0,191,197,5,
	20,0,0,192,197,5,6,0,0,193,197,5,22,0,0,194,197,5,23,0,0,195,197,3,28,14,
	0,196,187,1,0,0,0,196,188,1,0,0,0,196,189,1,0,0,0,196,190,1,0,0,0,196,191,
	1,0,0,0,196,192,1,0,0,0,196,193,1,0,0,0,196,194,1,0,0,0,196,195,1,0,0,0,
	197,27,1,0,0,0,198,199,7,0,0,0,199,29,1,0,0,0,200,204,3,26,13,0,201,204,
	5,10,0,0,202,204,5,11,0,0,203,200,1,0,0,0,203,201,1,0,0,0,203,202,1,0,0,
	0,204,31,1,0,0,0,205,206,5,21,0,0,206,208,7,1,0,0,207,209,5,17,0,0,208,
	207,1,0,0,0,208,209,1,0,0,0,209,211,1,0,0,0,210,212,3,34,17,0,211,210,1,
	0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,214,5,23,0,0,214,33,1,0,0,0,215,
	216,5,22,0,0,216,217,3,34,17,0,217,218,5,23,0,0,218,225,1,0,0,0,219,221,
	3,36,18,0,220,219,1,0,0,0,221,222,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,
	0,223,225,1,0,0,0,224,215,1,0,0,0,224,220,1,0,0,0,225,35,1,0,0,0,226,235,
	5,18,0,0,227,235,5,8,0,0,228,235,5,9,0,0,229,235,5,19,0,0,230,235,5,20,
	0,0,231,235,5,6,0,0,232,235,5,16,0,0,233,235,3,28,14,0,234,226,1,0,0,0,
	234,227,1,0,0,0,234,228,1,0,0,0,234,229,1,0,0,0,234,230,1,0,0,0,234,231,
	1,0,0,0,234,232,1,0,0,0,234,233,1,0,0,0,235,37,1,0,0,0,38,41,45,50,60,68,
	72,75,78,83,86,89,92,97,102,105,108,110,113,121,129,137,141,145,150,155,
	158,166,172,176,180,184,196,203,208,211,222,224,234];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AiDocParser.__ATN) {
			AiDocParser.__ATN = new ATNDeserializer().deserialize(AiDocParser._serializedATN);
		}

		return AiDocParser.__ATN;
	}


	static DecisionsToDFA = AiDocParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class DocumentationContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(AiDocParser.EOF, 0);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(AiDocParser.NEWLINE, i);
	}
	public bounded_comment(): Bounded_commentContext {
		return this.getTypedRuleContext(Bounded_commentContext, 0) as Bounded_commentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_documentation;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterDocumentation) {
	 		listener.enterDocumentation(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitDocumentation) {
	 		listener.exitDocumentation(this);
		}
	}
}


export class Bounded_commentContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comment_start(): Comment_startContext {
		return this.getTypedRuleContext(Comment_startContext, 0) as Comment_startContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(AiDocParser.NEWLINE, 0);
	}
	public comment_end(): Comment_endContext {
		return this.getTypedRuleContext(Comment_endContext, 0) as Comment_endContext;
	}
	public comment_line_list(): Comment_lineContext[] {
		return this.getTypedRuleContexts(Comment_lineContext) as Comment_lineContext[];
	}
	public comment_line(i: number): Comment_lineContext {
		return this.getTypedRuleContext(Comment_lineContext, i) as Comment_lineContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_bounded_comment;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterBounded_comment) {
	 		listener.enterBounded_comment(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitBounded_comment) {
	 		listener.exitBounded_comment(this);
		}
	}
}


export class Comment_startContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AIDOC_START(): TerminalNode {
		return this.getToken(AiDocParser.AIDOC_START, 0);
	}
	public SPACE(): TerminalNode {
		return this.getToken(AiDocParser.SPACE, 0);
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_comment_start;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterComment_start) {
	 		listener.enterComment_start(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitComment_start) {
	 		listener.exitComment_start(this);
		}
	}
}


export class Comment_lineContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(AiDocParser.NEWLINE, 0);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
	public STAR_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.STAR);
	}
	public STAR(i: number): TerminalNode {
		return this.getToken(AiDocParser.STAR, i);
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_comment_line;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterComment_line) {
	 		listener.enterComment_line(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitComment_line) {
	 		listener.exitComment_line(this);
		}
	}
}


export class Comment_endContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AIDOC_END(): TerminalNode {
		return this.getToken(AiDocParser.AIDOC_END, 0);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
	public STAR_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.STAR);
	}
	public STAR(i: number): TerminalNode {
		return this.getToken(AiDocParser.STAR, i);
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_comment_end;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterComment_end) {
	 		listener.enterComment_end(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitComment_end) {
	 		listener.exitComment_end(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_comment(): Type_commentContext {
		return this.getTypedRuleContext(Type_commentContext, 0) as Type_commentContext;
	}
	public property_comment(): Property_commentContext {
		return this.getTypedRuleContext(Property_commentContext, 0) as Property_commentContext;
	}
	public version_comment(): Version_commentContext {
		return this.getTypedRuleContext(Version_commentContext, 0) as Version_commentContext;
	}
	public text_comment(): Text_commentContext {
		return this.getTypedRuleContext(Text_commentContext, 0) as Text_commentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_comment;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterComment) {
	 		listener.enterComment(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitComment) {
	 		listener.exitComment(this);
		}
	}
}


export class Type_commentContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARONDBASE(): TerminalNode {
		return this.getToken(AiDocParser.ARONDBASE, 0);
	}
	public PASCAL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.PASCAL_CASE_IDENTIFIER, 0);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(AiDocParser.INTERFACE, 0);
	}
	public text_comment(): Text_commentContext {
		return this.getTypedRuleContext(Text_commentContext, 0) as Text_commentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_type_comment;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterType_comment) {
	 		listener.enterType_comment(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitType_comment) {
	 		listener.exitType_comment(this);
		}
	}
}


export class Property_commentContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARONDBASE(): TerminalNode {
		return this.getToken(AiDocParser.ARONDBASE, 0);
	}
	public CAMEL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.CAMEL_CASE_IDENTIFIER, 0);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
	public property_types(): Property_typesContext {
		return this.getTypedRuleContext(Property_typesContext, 0) as Property_typesContext;
	}
	public text_comment(): Text_commentContext {
		return this.getTypedRuleContext(Text_commentContext, 0) as Text_commentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_property_comment;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterProperty_comment) {
	 		listener.enterProperty_comment(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitProperty_comment) {
	 		listener.exitProperty_comment(this);
		}
	}
}


export class Property_typesContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public property_type_list(): Property_typeContext[] {
		return this.getTypedRuleContexts(Property_typeContext) as Property_typeContext[];
	}
	public property_type(i: number): Property_typeContext {
		return this.getTypedRuleContext(Property_typeContext, i) as Property_typeContext;
	}
	public PIPE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(AiDocParser.PIPE, i);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_property_types;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterProperty_types) {
	 		listener.enterProperty_types(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitProperty_types) {
	 		listener.exitProperty_types(this);
		}
	}
}


export class Property_typeContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PASCAL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.PASCAL_CASE_IDENTIFIER, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(AiDocParser.OPTIONAL, 0);
	}
	public UNKNOWN(): TerminalNode {
		return this.getToken(AiDocParser.UNKNOWN, 0);
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_property_type;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterProperty_type) {
	 		listener.enterProperty_type(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitProperty_type) {
	 		listener.exitProperty_type(this);
		}
	}
}


export class Version_commentContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(AiDocParser.DOLLAR, 0);
	}
	public VERSION(): TerminalNode {
		return this.getToken(AiDocParser.VERSION, 0);
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
	public version_value(): Version_valueContext {
		return this.getTypedRuleContext(Version_valueContext, 0) as Version_valueContext;
	}
	public text_comment(): Text_commentContext {
		return this.getTypedRuleContext(Text_commentContext, 0) as Text_commentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_version_comment;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterVersion_comment) {
	 		listener.enterVersion_comment(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitVersion_comment) {
	 		listener.exitVersion_comment(this);
		}
	}
}


export class Version_valueContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DRAFT(): TerminalNode {
		return this.getToken(AiDocParser.DRAFT, 0);
	}
	public SPACE(): TerminalNode {
		return this.getToken(AiDocParser.SPACE, 0);
	}
	public HASH_CODE(): TerminalNode {
		return this.getToken(AiDocParser.HASH_CODE, 0);
	}
	public SEMVER(): TerminalNode {
		return this.getToken(AiDocParser.SEMVER, 0);
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_version_value;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterVersion_value) {
	 		listener.enterVersion_value(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitVersion_value) {
	 		listener.exitVersion_value(this);
		}
	}
}


export class Text_commentContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public text_start(): Text_startContext {
		return this.getTypedRuleContext(Text_startContext, 0) as Text_startContext;
	}
	public text_element_list(): Text_elementContext[] {
		return this.getTypedRuleContexts(Text_elementContext) as Text_elementContext[];
	}
	public text_element(i: number): Text_elementContext {
		return this.getTypedRuleContext(Text_elementContext, i) as Text_elementContext;
	}
	public inline_tag_list(): Inline_tagContext[] {
		return this.getTypedRuleContexts(Inline_tagContext) as Inline_tagContext[];
	}
	public inline_tag(i: number): Inline_tagContext {
		return this.getTypedRuleContext(Inline_tagContext, i) as Inline_tagContext;
	}
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_text_comment;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterText_comment) {
	 		listener.enterText_comment(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitText_comment) {
	 		listener.exitText_comment(this);
		}
	}
}


export class Text_startContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEXT_CONTENT(): TerminalNode {
		return this.getToken(AiDocParser.TEXT_CONTENT, 0);
	}
	public PASCAL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.PASCAL_CASE_IDENTIFIER, 0);
	}
	public CAMEL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.CAMEL_CASE_IDENTIFIER, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(AiDocParser.STAR, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(AiDocParser.SLASH, 0);
	}
	public HASH_CODE(): TerminalNode {
		return this.getToken(AiDocParser.HASH_CODE, 0);
	}
	public BRACE_OPEN(): TerminalNode {
		return this.getToken(AiDocParser.BRACE_OPEN, 0);
	}
	public BRACE_CLOSE(): TerminalNode {
		return this.getToken(AiDocParser.BRACE_CLOSE, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_text_start;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterText_start) {
	 		listener.enterText_start(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitText_start) {
	 		listener.exitText_start(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(AiDocParser.INTERFACE, 0);
	}
	public VERSION(): TerminalNode {
		return this.getToken(AiDocParser.VERSION, 0);
	}
	public DRAFT(): TerminalNode {
		return this.getToken(AiDocParser.DRAFT, 0);
	}
	public UNKNOWN(): TerminalNode {
		return this.getToken(AiDocParser.UNKNOWN, 0);
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_keyword;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}


export class Text_elementContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public text_start(): Text_startContext {
		return this.getTypedRuleContext(Text_startContext, 0) as Text_startContext;
	}
	public ARONDBASE(): TerminalNode {
		return this.getToken(AiDocParser.ARONDBASE, 0);
	}
	public DOLLAR(): TerminalNode {
		return this.getToken(AiDocParser.DOLLAR, 0);
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_text_element;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterText_element) {
	 		listener.enterText_element(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitText_element) {
	 		listener.exitText_element(this);
		}
	}
}


export class Inline_tagContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INLINE_TAG_START(): TerminalNode {
		return this.getToken(AiDocParser.INLINE_TAG_START, 0);
	}
	public BRACE_CLOSE(): TerminalNode {
		return this.getToken(AiDocParser.BRACE_CLOSE, 0);
	}
	public PASCAL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.PASCAL_CASE_IDENTIFIER, 0);
	}
	public CAMEL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.CAMEL_CASE_IDENTIFIER, 0);
	}
	public SPACE(): TerminalNode {
		return this.getToken(AiDocParser.SPACE, 0);
	}
	public tag_content(): Tag_contentContext {
		return this.getTypedRuleContext(Tag_contentContext, 0) as Tag_contentContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_inline_tag;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterInline_tag) {
	 		listener.enterInline_tag(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitInline_tag) {
	 		listener.exitInline_tag(this);
		}
	}
}


export class Tag_contentContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRACE_OPEN(): TerminalNode {
		return this.getToken(AiDocParser.BRACE_OPEN, 0);
	}
	public tag_content(): Tag_contentContext {
		return this.getTypedRuleContext(Tag_contentContext, 0) as Tag_contentContext;
	}
	public BRACE_CLOSE(): TerminalNode {
		return this.getToken(AiDocParser.BRACE_CLOSE, 0);
	}
	public tag_text_list(): Tag_textContext[] {
		return this.getTypedRuleContexts(Tag_textContext) as Tag_textContext[];
	}
	public tag_text(i: number): Tag_textContext {
		return this.getTypedRuleContext(Tag_textContext, i) as Tag_textContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_tag_content;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterTag_content) {
	 		listener.enterTag_content(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitTag_content) {
	 		listener.exitTag_content(this);
		}
	}
}


export class Tag_textContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEXT_CONTENT(): TerminalNode {
		return this.getToken(AiDocParser.TEXT_CONTENT, 0);
	}
	public PASCAL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.PASCAL_CASE_IDENTIFIER, 0);
	}
	public CAMEL_CASE_IDENTIFIER(): TerminalNode {
		return this.getToken(AiDocParser.CAMEL_CASE_IDENTIFIER, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(AiDocParser.STAR, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(AiDocParser.SLASH, 0);
	}
	public HASH_CODE(): TerminalNode {
		return this.getToken(AiDocParser.HASH_CODE, 0);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(AiDocParser.NEWLINE, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_tag_text;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterTag_text) {
	 		listener.enterTag_text(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitTag_text) {
	 		listener.exitTag_text(this);
		}
	}
}
