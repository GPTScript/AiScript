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
	public static readonly PASCAL_CASE_IDENTIFIER = 1;
	public static readonly CAMEL_CASE_IDENTIFIER = 2;
	public static readonly ARONDBASE = 3;
	public static readonly DOLLAR = 4;
	public static readonly OPTIONAL = 5;
	public static readonly PIPE = 6;
	public static readonly INTERFACE = 7;
	public static readonly VERSION = 8;
	public static readonly DRAFT = 9;
	public static readonly UNKNOWN = 10;
	public static readonly NEWLINE = 11;
	public static readonly SPACE = 12;
	public static readonly TEXT_CONTENT = 13;
	public static readonly STAR = 14;
	public static readonly SLASH = 15;
	public static readonly AIDOC_START = 16;
	public static readonly AIDOC_END = 17;
	public static readonly INLINE_TAG_START = 18;
	public static readonly BRACE_OPEN = 19;
	public static readonly BRACE_CLOSE = 20;
	public static readonly HASH_CODE = 21;
	public static readonly SEMVER = 22;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_documentation = 0;
	public static readonly RULE_bounded_comment = 1;
	public static readonly RULE_whitespace = 2;
	public static readonly RULE_comment_line = 3;
	public static readonly RULE_type_comment = 4;
	public static readonly RULE_property_comment = 5;
	public static readonly RULE_property_types = 6;
	public static readonly RULE_property_type = 7;
	public static readonly RULE_version_comment = 8;
	public static readonly RULE_version_value = 9;
	public static readonly RULE_text_comment = 10;
	public static readonly RULE_text_start = 11;
	public static readonly RULE_keyword = 12;
	public static readonly RULE_text_element = 13;
	public static readonly RULE_inline_tag = 14;
	public static readonly RULE_tag_content = 15;
	public static readonly RULE_tag_text = 16;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'@'", 
                                                            "'$'", "'?'", 
                                                            "'|'", "'interface'", 
                                                            "'version'", 
                                                            "'draft'", "'UNKNOWN'", 
                                                            null, null, 
                                                            null, "'*'", 
                                                            "'/'", null, 
                                                            "'*/'", "'{@'", 
                                                            "'{'", "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "PASCAL_CASE_IDENTIFIER", 
                                                             "CAMEL_CASE_IDENTIFIER", 
                                                             "ARONDBASE", 
                                                             "DOLLAR", "OPTIONAL", 
                                                             "PIPE", "INTERFACE", 
                                                             "VERSION", 
                                                             "DRAFT", "UNKNOWN", 
                                                             "NEWLINE", 
                                                             "SPACE", "TEXT_CONTENT", 
                                                             "STAR", "SLASH", 
                                                             "AIDOC_START", 
                                                             "AIDOC_END", 
                                                             "INLINE_TAG_START", 
                                                             "BRACE_OPEN", 
                                                             "BRACE_CLOSE", 
                                                             "HASH_CODE", 
                                                             "SEMVER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"documentation", "bounded_comment", "whitespace", "comment_line", "type_comment", 
		"property_comment", "property_types", "property_type", "version_comment", 
		"version_value", "text_comment", "text_start", "keyword", "text_element", 
		"inline_tag", "tag_content", "tag_text",
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 34;
				this.bounded_comment();
				}
			}

			this.state = 37;
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this.match(AiDocParser.AIDOC_START);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11 || _la===12) {
				{
				{
				this.state = 40;
				this.whitespace();
				this.state = 41;
				this.comment_line();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
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
	public whitespace(): WhitespaceContext {
		let localctx: WhitespaceContext = new WhitespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, AiDocParser.RULE_whitespace);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			_la = this._input.LA(1);
			if(!(_la===11 || _la===12)) {
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
	public comment_line(): Comment_lineContext {
		let localctx: Comment_lineContext = new Comment_lineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, AiDocParser.RULE_comment_line);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 52;
				this.type_comment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 53;
				this.property_comment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 54;
				this.version_comment();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 55;
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
		this.enterRule(localctx, 8, AiDocParser.RULE_type_comment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this.match(AiDocParser.ARONDBASE);
			this.state = 59;
			this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
			this.state = 60;
			this.match(AiDocParser.SPACE);
			this.state = 61;
			this.match(AiDocParser.INTERFACE);
			this.state = 62;
			this.match(AiDocParser.SPACE);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 63;
				this.match(AiDocParser.TEXT_CONTENT);
				}
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
		this.enterRule(localctx, 10, AiDocParser.RULE_property_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this.match(AiDocParser.ARONDBASE);
			this.state = 67;
			this.match(AiDocParser.CAMEL_CASE_IDENTIFIER);
			this.state = 68;
			this.match(AiDocParser.SPACE);
			this.state = 69;
			this.property_types();
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
		this.enterRule(localctx, 12, AiDocParser.RULE_property_types);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.property_type();
			{
			this.state = 72;
			this.match(AiDocParser.SPACE);
			this.state = 73;
			this.match(AiDocParser.PIPE);
			this.state = 74;
			this.match(AiDocParser.SPACE);
			this.state = 75;
			this.property_type();
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
		this.enterRule(localctx, 14, AiDocParser.RULE_property_type);
		let _la: number;
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 77;
				this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5) {
					{
					this.state = 78;
					this.match(AiDocParser.OPTIONAL);
					}
				}

				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 81;
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
		this.enterRule(localctx, 16, AiDocParser.RULE_version_comment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(AiDocParser.DOLLAR);
			this.state = 85;
			this.match(AiDocParser.VERSION);
			this.state = 86;
			this.match(AiDocParser.SPACE);
			this.state = 87;
			this.version_value();
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
		this.enterRule(localctx, 18, AiDocParser.RULE_version_value);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 89;
				this.match(AiDocParser.DRAFT);
				this.state = 90;
				this.match(AiDocParser.SPACE);
				this.state = 91;
				this.match(AiDocParser.HASH_CODE);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 92;
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
		this.enterRule(localctx, 20, AiDocParser.RULE_text_comment);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.text_start();
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===12) {
						{
						this.state = 96;
						this.match(AiDocParser.SPACE);
						}
					}

					this.state = 101;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 7:
					case 8:
					case 9:
					case 10:
					case 13:
					case 14:
					case 15:
					case 19:
					case 20:
					case 21:
						{
						this.state = 99;
						this.text_element();
						}
						break;
					case 18:
						{
						this.state = 100;
						this.inline_tag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
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
		this.enterRule(localctx, 22, AiDocParser.RULE_text_start);
		try {
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 108;
				this.match(AiDocParser.TEXT_CONTENT);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 109;
				this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 110;
				this.match(AiDocParser.CAMEL_CASE_IDENTIFIER);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 111;
				this.match(AiDocParser.STAR);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 112;
				this.match(AiDocParser.SLASH);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 113;
				this.match(AiDocParser.HASH_CODE);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 114;
				this.match(AiDocParser.BRACE_OPEN);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 115;
				this.match(AiDocParser.BRACE_CLOSE);
				}
				break;
			case 7:
			case 8:
			case 9:
			case 10:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 116;
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
		this.enterRule(localctx, 24, AiDocParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1920) !== 0))) {
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
		this.enterRule(localctx, 26, AiDocParser.RULE_text_element);
		try {
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 7:
			case 8:
			case 9:
			case 10:
			case 13:
			case 14:
			case 15:
			case 19:
			case 20:
			case 21:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 121;
				this.text_start();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 122;
				this.match(AiDocParser.ARONDBASE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 123;
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
		this.enterRule(localctx, 28, AiDocParser.RULE_inline_tag);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(AiDocParser.INLINE_TAG_START);
			this.state = 127;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 128;
				this.match(AiDocParser.SPACE);
				}
			}

			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2682758) !== 0)) {
				{
				this.state = 131;
				this.tag_content();
				}
			}

			this.state = 134;
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
		this.enterRule(localctx, 30, AiDocParser.RULE_tag_content);
		let _la: number;
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 136;
				this.match(AiDocParser.BRACE_OPEN);
				this.state = 137;
				this.tag_content();
				this.state = 138;
				this.match(AiDocParser.BRACE_CLOSE);
				}
				break;
			case 1:
			case 2:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 13:
			case 14:
			case 15:
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 140;
					this.tag_text();
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2158470) !== 0));
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
		this.enterRule(localctx, 32, AiDocParser.RULE_tag_text);
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 147;
				this.match(AiDocParser.TEXT_CONTENT);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 148;
				this.match(AiDocParser.PASCAL_CASE_IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 149;
				this.match(AiDocParser.CAMEL_CASE_IDENTIFIER);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 150;
				this.match(AiDocParser.STAR);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 151;
				this.match(AiDocParser.SLASH);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 152;
				this.match(AiDocParser.HASH_CODE);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 153;
				this.match(AiDocParser.NEWLINE);
				}
				break;
			case 7:
			case 8:
			case 9:
			case 10:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 154;
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

	public static readonly _serializedATN: number[] = [4,1,22,158,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	3,0,36,8,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,44,8,1,10,1,12,1,47,9,1,1,1,1,1,
	1,2,1,2,1,3,1,3,1,3,1,3,3,3,57,8,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,65,8,4,1,
	5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,3,7,80,8,7,1,7,3,7,83,
	8,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,94,8,9,1,10,1,10,3,10,98,8,
	10,1,10,1,10,3,10,102,8,10,5,10,104,8,10,10,10,12,10,107,9,10,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,118,8,11,1,12,1,12,1,13,1,13,1,
	13,3,13,125,8,13,1,14,1,14,1,14,3,14,130,8,14,1,14,3,14,133,8,14,1,14,1,
	14,1,15,1,15,1,15,1,15,1,15,4,15,142,8,15,11,15,12,15,143,3,15,146,8,15,
	1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,156,8,16,1,16,0,0,17,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,3,1,0,11,12,1,0,7,10,1,0,1,2,
	173,0,35,1,0,0,0,2,39,1,0,0,0,4,50,1,0,0,0,6,56,1,0,0,0,8,58,1,0,0,0,10,
	66,1,0,0,0,12,71,1,0,0,0,14,82,1,0,0,0,16,84,1,0,0,0,18,93,1,0,0,0,20,95,
	1,0,0,0,22,117,1,0,0,0,24,119,1,0,0,0,26,124,1,0,0,0,28,126,1,0,0,0,30,
	145,1,0,0,0,32,155,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,0,35,36,1,0,0,0,36,
	37,1,0,0,0,37,38,5,0,0,1,38,1,1,0,0,0,39,45,5,16,0,0,40,41,3,4,2,0,41,42,
	3,6,3,0,42,44,1,0,0,0,43,40,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,
	0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,17,0,0,49,3,1,0,0,0,50,51,7,0,
	0,0,51,5,1,0,0,0,52,57,3,8,4,0,53,57,3,10,5,0,54,57,3,16,8,0,55,57,3,20,
	10,0,56,52,1,0,0,0,56,53,1,0,0,0,56,54,1,0,0,0,56,55,1,0,0,0,57,7,1,0,0,
	0,58,59,5,3,0,0,59,60,5,1,0,0,60,61,5,12,0,0,61,62,5,7,0,0,62,64,5,12,0,
	0,63,65,5,13,0,0,64,63,1,0,0,0,64,65,1,0,0,0,65,9,1,0,0,0,66,67,5,3,0,0,
	67,68,5,2,0,0,68,69,5,12,0,0,69,70,3,12,6,0,70,11,1,0,0,0,71,72,3,14,7,
	0,72,73,5,12,0,0,73,74,5,6,0,0,74,75,5,12,0,0,75,76,3,14,7,0,76,13,1,0,
	0,0,77,79,5,1,0,0,78,80,5,5,0,0,79,78,1,0,0,0,79,80,1,0,0,0,80,83,1,0,0,
	0,81,83,5,10,0,0,82,77,1,0,0,0,82,81,1,0,0,0,83,15,1,0,0,0,84,85,5,4,0,
	0,85,86,5,8,0,0,86,87,5,12,0,0,87,88,3,18,9,0,88,17,1,0,0,0,89,90,5,9,0,
	0,90,91,5,12,0,0,91,94,5,21,0,0,92,94,5,22,0,0,93,89,1,0,0,0,93,92,1,0,
	0,0,94,19,1,0,0,0,95,105,3,22,11,0,96,98,5,12,0,0,97,96,1,0,0,0,97,98,1,
	0,0,0,98,101,1,0,0,0,99,102,3,26,13,0,100,102,3,28,14,0,101,99,1,0,0,0,
	101,100,1,0,0,0,102,104,1,0,0,0,103,97,1,0,0,0,104,107,1,0,0,0,105,103,
	1,0,0,0,105,106,1,0,0,0,106,21,1,0,0,0,107,105,1,0,0,0,108,118,5,13,0,0,
	109,118,5,1,0,0,110,118,5,2,0,0,111,118,5,14,0,0,112,118,5,15,0,0,113,118,
	5,21,0,0,114,118,5,19,0,0,115,118,5,20,0,0,116,118,3,24,12,0,117,108,1,
	0,0,0,117,109,1,0,0,0,117,110,1,0,0,0,117,111,1,0,0,0,117,112,1,0,0,0,117,
	113,1,0,0,0,117,114,1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,23,1,0,
	0,0,119,120,7,1,0,0,120,25,1,0,0,0,121,125,3,22,11,0,122,125,5,3,0,0,123,
	125,5,4,0,0,124,121,1,0,0,0,124,122,1,0,0,0,124,123,1,0,0,0,125,27,1,0,
	0,0,126,127,5,18,0,0,127,129,7,2,0,0,128,130,5,12,0,0,129,128,1,0,0,0,129,
	130,1,0,0,0,130,132,1,0,0,0,131,133,3,30,15,0,132,131,1,0,0,0,132,133,1,
	0,0,0,133,134,1,0,0,0,134,135,5,20,0,0,135,29,1,0,0,0,136,137,5,19,0,0,
	137,138,3,30,15,0,138,139,5,20,0,0,139,146,1,0,0,0,140,142,3,32,16,0,141,
	140,1,0,0,0,142,143,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,
	0,0,145,136,1,0,0,0,145,141,1,0,0,0,146,31,1,0,0,0,147,156,5,13,0,0,148,
	156,5,1,0,0,149,156,5,2,0,0,150,156,5,14,0,0,151,156,5,15,0,0,152,156,5,
	21,0,0,153,156,5,11,0,0,154,156,3,24,12,0,155,147,1,0,0,0,155,148,1,0,0,
	0,155,149,1,0,0,0,155,150,1,0,0,0,155,151,1,0,0,0,155,152,1,0,0,0,155,153,
	1,0,0,0,155,154,1,0,0,0,156,33,1,0,0,0,17,35,45,56,64,79,82,93,97,101,105,
	117,124,129,132,143,145,155];

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
	public AIDOC_START(): TerminalNode {
		return this.getToken(AiDocParser.AIDOC_START, 0);
	}
	public AIDOC_END(): TerminalNode {
		return this.getToken(AiDocParser.AIDOC_END, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
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


export class WhitespaceContext extends ParserRuleContext {
	constructor(parser?: AiDocParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPACE(): TerminalNode {
		return this.getToken(AiDocParser.SPACE, 0);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(AiDocParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return AiDocParser.RULE_whitespace;
	}
	public enterRule(listener: AiDocParserListener): void {
	    if(listener.enterWhitespace) {
	 		listener.enterWhitespace(this);
		}
	}
	public exitRule(listener: AiDocParserListener): void {
	    if(listener.exitWhitespace) {
	 		listener.exitWhitespace(this);
		}
	}
}


export class Comment_lineContext extends ParserRuleContext {
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
	public TEXT_CONTENT(): TerminalNode {
		return this.getToken(AiDocParser.TEXT_CONTENT, 0);
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
	public SPACE(): TerminalNode {
		return this.getToken(AiDocParser.SPACE, 0);
	}
	public property_types(): Property_typesContext {
		return this.getTypedRuleContext(Property_typesContext, 0) as Property_typesContext;
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
	public SPACE_list(): TerminalNode[] {
	    	return this.getTokens(AiDocParser.SPACE);
	}
	public SPACE(i: number): TerminalNode {
		return this.getToken(AiDocParser.SPACE, i);
	}
	public PIPE(): TerminalNode {
		return this.getToken(AiDocParser.PIPE, 0);
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
	public SPACE(): TerminalNode {
		return this.getToken(AiDocParser.SPACE, 0);
	}
	public version_value(): Version_valueContext {
		return this.getTypedRuleContext(Version_valueContext, 0) as Version_valueContext;
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
