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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'interface'", 
                                                   "'version'", "'return'", 
                                                   "'draft'", "'UNKNOWN'", 
                                                   null, null, null, null, 
                                                   "'@'", "'$'", "'?'", 
                                                   "'|'", null, "'*/'", 
                                                   null, null, null, "'*'", 
                                                   "'/'", "'{@'", "'{'", 
                                                   "'}'" ];
	public static readonly symbolicNames: string[] = [ null, "INTERFACE", "VERSION", 
                                                    "RETURN", "DRAFT", "UNKNOWN", 
                                                    "HASH_CODE", "SEMVER", 
                                                    "PASCAL_CASE_IDENTIFIER", 
                                                    "CAMEL_CASE_IDENTIFIER", 
                                                    "ARONDBASE", "DOLLAR", 
                                                    "OPTIONAL", "PIPE", 
                                                    "AIDOC_START", "AIDOC_END", 
                                                    "NEWLINE", "SPACE", 
                                                    "TEXT_CONTENT", "STAR", 
                                                    "SLASH", "INLINE_TAG_START", 
                                                    "BRACE_OPEN", "BRACE_CLOSE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"INTERFACE", "VERSION", "RETURN", "DRAFT", "UNKNOWN", "HASH_CODE", "SEMVER", 
		"PASCAL_CASE_IDENTIFIER", "CAMEL_CASE_IDENTIFIER", "LetterOrDigit", "ARONDBASE", 
		"DOLLAR", "OPTIONAL", "PIPE", "AIDOC_START", "AIDOC_END", "NEWLINE", "SPACE", 
		"TEXT_CONTENT", "STAR", "SLASH", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", 
		"HexDigit", "SemVal",
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

	public static readonly _serializedATN: number[] = [4,0,23,185,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,4,5,97,8,5,11,5,12,5,98,
	1,6,1,6,1,6,1,6,1,6,1,6,3,6,107,8,6,3,6,109,8,6,1,7,1,7,5,7,113,8,7,10,
	7,12,7,116,9,7,1,8,1,8,5,8,120,8,8,10,8,12,8,123,9,8,1,9,1,9,1,10,1,10,
	1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,5,14,140,8,14,10,
	14,12,14,143,9,14,1,15,1,15,1,15,1,16,1,16,1,16,3,16,151,8,16,1,17,4,17,
	154,8,17,11,17,12,17,155,1,18,4,18,159,8,18,11,18,12,18,160,1,19,1,19,1,
	20,1,20,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,5,25,
	179,8,25,10,25,12,25,182,9,25,3,25,184,8,25,0,0,26,1,1,3,2,5,3,7,4,9,5,
	11,6,13,7,15,8,17,9,19,0,21,10,23,11,25,12,27,13,29,14,31,15,33,16,35,17,
	37,18,39,19,41,20,43,21,45,22,47,23,49,0,51,0,1,0,9,1,0,65,90,1,0,97,122,
	5,0,36,36,48,57,65,90,95,95,97,122,2,0,10,10,13,13,2,0,9,9,32,32,8,0,9,
	10,13,13,32,32,42,42,47,47,64,90,97,123,125,125,3,0,48,57,65,70,97,102,
	1,0,49,57,1,0,48,57,192,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
	0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,21,1,
	0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,
	0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,
	0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,1,53,1,0,0,0,3,63,1,0,0,0,5,71,1,0,0,0,
	7,78,1,0,0,0,9,84,1,0,0,0,11,92,1,0,0,0,13,100,1,0,0,0,15,110,1,0,0,0,17,
	117,1,0,0,0,19,124,1,0,0,0,21,126,1,0,0,0,23,128,1,0,0,0,25,130,1,0,0,0,
	27,132,1,0,0,0,29,134,1,0,0,0,31,144,1,0,0,0,33,150,1,0,0,0,35,153,1,0,
	0,0,37,158,1,0,0,0,39,162,1,0,0,0,41,164,1,0,0,0,43,166,1,0,0,0,45,169,
	1,0,0,0,47,171,1,0,0,0,49,173,1,0,0,0,51,183,1,0,0,0,53,54,5,105,0,0,54,
	55,5,110,0,0,55,56,5,116,0,0,56,57,5,101,0,0,57,58,5,114,0,0,58,59,5,102,
	0,0,59,60,5,97,0,0,60,61,5,99,0,0,61,62,5,101,0,0,62,2,1,0,0,0,63,64,5,
	118,0,0,64,65,5,101,0,0,65,66,5,114,0,0,66,67,5,115,0,0,67,68,5,105,0,0,
	68,69,5,111,0,0,69,70,5,110,0,0,70,4,1,0,0,0,71,72,5,114,0,0,72,73,5,101,
	0,0,73,74,5,116,0,0,74,75,5,117,0,0,75,76,5,114,0,0,76,77,5,110,0,0,77,
	6,1,0,0,0,78,79,5,100,0,0,79,80,5,114,0,0,80,81,5,97,0,0,81,82,5,102,0,
	0,82,83,5,116,0,0,83,8,1,0,0,0,84,85,5,85,0,0,85,86,5,78,0,0,86,87,5,75,
	0,0,87,88,5,78,0,0,88,89,5,79,0,0,89,90,5,87,0,0,90,91,5,78,0,0,91,10,1,
	0,0,0,92,93,3,49,24,0,93,94,3,49,24,0,94,96,3,49,24,0,95,97,3,49,24,0,96,
	95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,12,1,0,0,0,100,
	101,5,118,0,0,101,108,3,51,25,0,102,103,5,46,0,0,103,106,3,51,25,0,104,
	105,5,46,0,0,105,107,3,51,25,0,106,104,1,0,0,0,106,107,1,0,0,0,107,109,
	1,0,0,0,108,102,1,0,0,0,108,109,1,0,0,0,109,14,1,0,0,0,110,114,7,0,0,0,
	111,113,3,19,9,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,
	1,0,0,0,115,16,1,0,0,0,116,114,1,0,0,0,117,121,7,1,0,0,118,120,3,19,9,0,
	119,118,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,18,
	1,0,0,0,123,121,1,0,0,0,124,125,7,2,0,0,125,20,1,0,0,0,126,127,5,64,0,0,
	127,22,1,0,0,0,128,129,5,36,0,0,129,24,1,0,0,0,130,131,5,63,0,0,131,26,
	1,0,0,0,132,133,5,124,0,0,133,28,1,0,0,0,134,135,5,47,0,0,135,136,5,42,
	0,0,136,137,5,42,0,0,137,141,1,0,0,0,138,140,3,39,19,0,139,138,1,0,0,0,
	140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,30,1,0,0,0,143,141,
	1,0,0,0,144,145,5,42,0,0,145,146,5,47,0,0,146,32,1,0,0,0,147,151,7,3,0,
	0,148,149,5,13,0,0,149,151,5,10,0,0,150,147,1,0,0,0,150,148,1,0,0,0,151,
	34,1,0,0,0,152,154,7,4,0,0,153,152,1,0,0,0,154,155,1,0,0,0,155,153,1,0,
	0,0,155,156,1,0,0,0,156,36,1,0,0,0,157,159,8,5,0,0,158,157,1,0,0,0,159,
	160,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,38,1,0,0,0,162,163,5,42,
	0,0,163,40,1,0,0,0,164,165,5,47,0,0,165,42,1,0,0,0,166,167,5,123,0,0,167,
	168,5,64,0,0,168,44,1,0,0,0,169,170,5,123,0,0,170,46,1,0,0,0,171,172,5,
	125,0,0,172,48,1,0,0,0,173,174,7,6,0,0,174,50,1,0,0,0,175,184,5,48,0,0,
	176,180,7,7,0,0,177,179,7,8,0,0,178,177,1,0,0,0,179,182,1,0,0,0,180,178,
	1,0,0,0,180,181,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,183,175,1,0,0,0,
	183,176,1,0,0,0,184,52,1,0,0,0,12,0,98,106,108,114,121,141,150,155,160,
	180,183,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AiDocLexer.__ATN) {
			AiDocLexer.__ATN = new ATNDeserializer().deserialize(AiDocLexer._serializedATN);
		}

		return AiDocLexer.__ATN;
	}


	static DecisionsToDFA = AiDocLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}