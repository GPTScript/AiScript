lexer grammar AiDocLexer;

INTERFACE: 'interface';
VERSION: 'version';
RETURN: 'return';

DRAFT: 'draft';
UNKNOWN: 'UNKNOWN';

HASH_CODE:
    HexDigit HexDigit HexDigit HexDigit+
    ;

SEMVER:
    'v' SemVal ( '.' SemVal ( '.' SemVal )? )?
    ;

PASCAL_CASE_IDENTIFIER:
	[A-Z] LetterOrDigit*
	;

CAMEL_CASE_IDENTIFIER:
    [a-z] LetterOrDigit*
    ;

fragment
LetterOrDigit:
	[a-zA-Z0-9$_] // these are the "letters or digits" below 0x7F
	;

ARONDBASE: '@';
DOLLAR: '$';
OPTIONAL: '?';
PIPE: '|';

AIDOC_START
	: '/**' STAR*
	;

AIDOC_END
	: '*/'
	;

NEWLINE
	: '\n' | '\r' | '\r\n'
	;

SPACE
	: (' '|'\t')+
	;

TEXT_CONTENT
	: ~[\n\r\t @*{}/a-zA-Z]+
	;

STAR
	: '*'
	;

SLASH
	: '/'
	;

INLINE_TAG_START
	: '{@'
	;

BRACE_OPEN
	: '{'
	;

BRACE_CLOSE
	: '}'
	;

fragment
HexDigit:
	[0-9a-fA-F]
	;


fragment
SemVal:
    '0'
    | [1-9]([0-9])*
    ;
