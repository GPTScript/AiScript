// Generated from AiDocLexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class AiDocLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, null, null, "'@'", 
                                                   "'$'", "'?'", "'|'", 
                                                   "'interface'", "'version'", 
                                                   "'draft'", "'UNKNOWN'", 
                                                   null, null, null, "'*'", 
                                                   "'/'", null, "'*/'", 
                                                   "'{@'", "'{'", "'}'" ];
	public static readonly symbolicNames: string[] = [ null, "PASCAL_CASE_IDENTIFIER", 
                                                    "CAMEL_CASE_IDENTIFIER", 
                                                    "ARONDBASE", "DOLLAR", 
                                                    "OPTIONAL", "PIPE", 
                                                    "INTERFACE", "VERSION", 
                                                    "DRAFT", "UNKNOWN", 
                                                    "NEWLINE", "SPACE", 
                                                    "TEXT_CONTENT", "STAR", 
                                                    "SLASH", "AIDOC_START", 
                                                    "AIDOC_END", "INLINE_TAG_START", 
                                                    "BRACE_OPEN", "BRACE_CLOSE", 
                                                    "HASH_CODE", "SEMVER" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"PASCAL_CASE_IDENTIFIER", "CAMEL_CASE_IDENTIFIER", "LetterOrDigit", "ARONDBASE", 
		"DOLLAR", "OPTIONAL", "PIPE", "INTERFACE", "VERSION", "DRAFT", "UNKNOWN", 
		"NEWLINE", "SPACE", "TEXT_CONTENT", "STAR", "SLASH", "AIDOC_START", "AIDOC_END", 
		"INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "HASH_CODE", "HexDigit", 
		"SEMVER", "SemVal",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, AiDocLexer._ATN, AiDocLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "AiDocLexer.g4"; }

	public get literalNames(): (string | null)[] { return AiDocLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return AiDocLexer.symbolicNames; }
	public get ruleNames(): string[] { return AiDocLexer.ruleNames; }

	public get serializedATN(): number[] { return AiDocLexer._serializedATN; }

	public get channelNames(): string[] { return AiDocLexer.channelNames; }

	public get modeNames(): string[] { return AiDocLexer.modeNames; }

	// @Override
	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.NEWLINE_sempred(localctx, predIndex);
		}
		return true;
	}
	private NEWLINE_sempred(localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this._input.LA(1) != '/'.charCodeAt(0);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,0,22,188,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,1,0,1,0,5,0,54,8,0,10,0,12,0,57,9,0,1,1,1,1,5,1,61,8,1,10,1,12,
	1,64,9,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,
	9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,111,8,11,
	1,11,3,11,114,8,11,1,11,1,11,1,11,4,11,119,8,11,11,11,12,11,120,3,11,123,
	8,11,1,12,4,12,126,8,12,11,12,12,12,127,1,13,4,13,131,8,13,11,13,12,13,
	132,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,5,16,144,8,16,10,16,12,
	16,147,9,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,
	1,21,1,21,4,21,163,8,21,11,21,12,21,164,1,22,1,22,1,23,1,23,1,23,1,23,1,
	23,1,23,3,23,175,8,23,3,23,177,8,23,1,24,1,24,1,24,5,24,182,8,24,10,24,
	12,24,185,9,24,3,24,187,8,24,0,0,25,1,1,3,2,5,0,7,3,9,4,11,5,13,6,15,7,
	17,8,19,9,21,10,23,11,25,12,27,13,29,14,31,15,33,16,35,17,37,18,39,19,41,
	20,43,21,45,0,47,22,49,0,1,0,9,1,0,65,90,1,0,97,122,5,0,36,36,48,57,65,
	90,95,95,97,122,2,0,10,10,13,13,2,0,9,9,32,32,8,0,9,10,13,13,32,32,42,42,
	47,47,64,90,97,123,125,125,3,0,48,57,65,70,97,102,1,0,49,57,1,0,48,57,198,
	0,1,1,0,0,0,0,3,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
	0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
	1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,
	0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,47,1,0,0,0,1,51,
	1,0,0,0,3,58,1,0,0,0,5,65,1,0,0,0,7,67,1,0,0,0,9,69,1,0,0,0,11,71,1,0,0,
	0,13,73,1,0,0,0,15,75,1,0,0,0,17,85,1,0,0,0,19,93,1,0,0,0,21,99,1,0,0,0,
	23,110,1,0,0,0,25,125,1,0,0,0,27,130,1,0,0,0,29,134,1,0,0,0,31,136,1,0,
	0,0,33,138,1,0,0,0,35,148,1,0,0,0,37,151,1,0,0,0,39,154,1,0,0,0,41,156,
	1,0,0,0,43,158,1,0,0,0,45,166,1,0,0,0,47,168,1,0,0,0,49,186,1,0,0,0,51,
	55,7,0,0,0,52,54,3,5,2,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,
	1,0,0,0,56,2,1,0,0,0,57,55,1,0,0,0,58,62,7,1,0,0,59,61,3,5,2,0,60,59,1,
	0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,4,1,0,0,0,64,62,1,0,
	0,0,65,66,7,2,0,0,66,6,1,0,0,0,67,68,5,64,0,0,68,8,1,0,0,0,69,70,5,36,0,
	0,70,10,1,0,0,0,71,72,5,63,0,0,72,12,1,0,0,0,73,74,5,124,0,0,74,14,1,0,
	0,0,75,76,5,105,0,0,76,77,5,110,0,0,77,78,5,116,0,0,78,79,5,101,0,0,79,
	80,5,114,0,0,80,81,5,102,0,0,81,82,5,97,0,0,82,83,5,99,0,0,83,84,5,101,
	0,0,84,16,1,0,0,0,85,86,5,118,0,0,86,87,5,101,0,0,87,88,5,114,0,0,88,89,
	5,115,0,0,89,90,5,105,0,0,90,91,5,111,0,0,91,92,5,110,0,0,92,18,1,0,0,0,
	93,94,5,100,0,0,94,95,5,114,0,0,95,96,5,97,0,0,96,97,5,102,0,0,97,98,5,
	116,0,0,98,20,1,0,0,0,99,100,5,85,0,0,100,101,5,78,0,0,101,102,5,75,0,0,
	102,103,5,78,0,0,103,104,5,79,0,0,104,105,5,87,0,0,105,106,5,78,0,0,106,
	22,1,0,0,0,107,111,7,3,0,0,108,109,5,13,0,0,109,111,5,10,0,0,110,107,1,
	0,0,0,110,108,1,0,0,0,111,122,1,0,0,0,112,114,3,25,12,0,113,112,1,0,0,0,
	113,114,1,0,0,0,114,118,1,0,0,0,115,116,3,29,14,0,116,117,4,11,0,0,117,
	119,1,0,0,0,118,115,1,0,0,0,119,120,1,0,0,0,120,118,1,0,0,0,120,121,1,0,
	0,0,121,123,1,0,0,0,122,113,1,0,0,0,122,123,1,0,0,0,123,24,1,0,0,0,124,
	126,7,4,0,0,125,124,1,0,0,0,126,127,1,0,0,0,127,125,1,0,0,0,127,128,1,0,
	0,0,128,26,1,0,0,0,129,131,8,5,0,0,130,129,1,0,0,0,131,132,1,0,0,0,132,
	130,1,0,0,0,132,133,1,0,0,0,133,28,1,0,0,0,134,135,5,42,0,0,135,30,1,0,
	0,0,136,137,5,47,0,0,137,32,1,0,0,0,138,139,5,47,0,0,139,140,5,42,0,0,140,
	141,5,42,0,0,141,145,1,0,0,0,142,144,3,29,14,0,143,142,1,0,0,0,144,147,
	1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,34,1,0,0,0,147,145,1,0,0,0,
	148,149,5,42,0,0,149,150,5,47,0,0,150,36,1,0,0,0,151,152,5,123,0,0,152,
	153,5,64,0,0,153,38,1,0,0,0,154,155,5,123,0,0,155,40,1,0,0,0,156,157,5,
	125,0,0,157,42,1,0,0,0,158,159,3,45,22,0,159,160,3,45,22,0,160,162,3,45,
	22,0,161,163,3,45,22,0,162,161,1,0,0,0,163,164,1,0,0,0,164,162,1,0,0,0,
	164,165,1,0,0,0,165,44,1,0,0,0,166,167,7,6,0,0,167,46,1,0,0,0,168,169,5,
	118,0,0,169,176,3,49,24,0,170,171,5,46,0,0,171,174,3,49,24,0,172,173,5,
	46,0,0,173,175,3,49,24,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,
	0,176,170,1,0,0,0,176,177,1,0,0,0,177,48,1,0,0,0,178,187,5,48,0,0,179,183,
	7,7,0,0,180,182,7,8,0,0,181,180,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,
	183,184,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,186,178,1,0,0,0,186,179,
	1,0,0,0,187,50,1,0,0,0,15,0,55,62,110,113,120,122,127,132,145,164,174,176,
	183,186,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AiDocLexer.__ATN) {
			AiDocLexer.__ATN = new ATNDeserializer().deserialize(AiDocLexer._serializedATN);
		}

		return AiDocLexer.__ATN;
	}


	static DecisionsToDFA = AiDocLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}