lexer grammar AiLexer;

channels { COMMENT }

MULTI_LINE_COMMENT: '/*' .*? '*/' -> channel(COMMENT);
SINGLE_LINE_COMMENT: '//' ~[\r\n\u2028\u2029]* -> skip;

LPAR: '(';
RPAR: ')';
LBRAK: '[';
RBRAK: ']';
LCURL: '{';
RCURL: '}';

DOT: '.';
COMMA: ',';
COLON: ':';
SEMI: ';';

ASSIGN: '=';

VAR: 'var';
RETURN: 'return';
FUNCTION: 'function';

INTEGER_LITERAL:
    DecimalIntegerLiteral
    |	HexIntegerLiteral
	|	OctalIntegerLiteral
	|	BinaryIntegerLiteral
	;

fragment
DecimalIntegerLiteral:
	DecimalNumeral IntegerTypeSuffix?
	;

fragment
HexIntegerLiteral:
	HexNumeral IntegerTypeSuffix?
	;

fragment
OctalIntegerLiteral:
	OctalNumeral IntegerTypeSuffix?
	;

fragment
BinaryIntegerLiteral:
	BinaryNumeral IntegerTypeSuffix?
	;

fragment
IntegerTypeSuffix:
	[lL]
	;

fragment
DecimalNumeral:
	'0'
	|	NonZeroDigit (Digits? | Underscores Digits)
	;

fragment
Digits:
	Digit (DigitsAndUnderscores? Digit)?
	;

fragment
Digit:
	'0'
	|	NonZeroDigit
	;

fragment
NonZeroDigit:
	[1-9]
	;

fragment
DigitsAndUnderscores:
	DigitOrUnderscore+
	;

fragment
DigitOrUnderscore:
	Digit
	|	'_'
	;

fragment
Underscores:
	'_'+
	;

fragment
HexNumeral:
	'0' [xX] HexDigits
	;

fragment
HexDigits:
	HexDigit (HexDigitsAndUnderscores? HexDigit)?
	;

fragment
HexDigit:
	[0-9a-fA-F]
	;

fragment
HexDigitsAndUnderscores:
	HexDigitOrUnderscore+
	;

fragment
HexDigitOrUnderscore:
	HexDigit
	|	'_'
	;

fragment
OctalNumeral:
	'0' Underscores? OctalDigits
	;

fragment
OctalDigits:
	OctalDigit (OctalDigitsAndUnderscores? OctalDigit)?
	;

fragment
OctalDigit:
	[0-7]
	;

fragment
OctalDigitsAndUnderscores:
	OctalDigitOrUnderscore+
	;

fragment
OctalDigitOrUnderscore:
	OctalDigit
	|	'_'
	;

fragment
BinaryNumeral:
	'0' [bB] BinaryDigits
	;

fragment
BinaryDigits:
	BinaryDigit (BinaryDigitsAndUnderscores? BinaryDigit)?
	;

fragment
BinaryDigit:
	[01]
	;

fragment
BinaryDigitsAndUnderscores:
	BinaryDigitOrUnderscore+
	;

fragment
BinaryDigitOrUnderscore:
	BinaryDigit
	|	'_'
	;

DECIMAL_LITERAL:
	DecimalFloatingPointLiteral
	|	HexadecimalFloatingPointLiteral
	;

fragment
DecimalFloatingPointLiteral:
	Digits '.' Digits? ExponentPart? FloatTypeSuffix?
	|	'.' Digits ExponentPart? FloatTypeSuffix?
	|	Digits ExponentPart FloatTypeSuffix?
	|	Digits FloatTypeSuffix
	;

fragment
ExponentPart:
	ExponentIndicator SignedInteger
	;

fragment
ExponentIndicator:
	[eE]
	;

fragment
SignedInteger:
	Sign? Digits
	;

fragment
Sign:
	[+-]
	;

fragment
FloatTypeSuffix:
	[fFdD]
	;

fragment
HexadecimalFloatingPointLiteral:
	HexSignificand BinaryExponent FloatTypeSuffix?
	;

fragment
HexSignificand:
	HexNumeral '.'?
	|	'0' [xX] HexDigits? '.' HexDigits
	;

fragment
BinaryExponent:
	BinaryExponentIndicator SignedInteger
	;

fragment
BinaryExponentIndicator:
	[pP]
	;

NULL_LITERAL:
	'null'
	;

BOOLEAN_LITERAL:
	'true'
	|	'false'
	;

CHAR_LITERAL:
	'\'' SingleCharacter '\''
	|	'\'' EscapeSequence '\''
	;

fragment
SingleCharacter:
	~['\\\r\n]
	;

STRING_LITERAL:
	'"' StringCharacters? '"'
	;

fragment
StringCharacters:
	StringCharacter+
	;

fragment
StringCharacter:
	~["\\\r\n]
	|	EscapeSequence
	;

fragment
EscapeSequence:
       '\\' [btnfr"'\\]
	|	OctalEscape
    |   UnicodeEscape // This is not in the spec but prevents having to preprocess the input
	;

fragment
OctalEscape:
	'\\' OctalDigit
	|	'\\' OctalDigit OctalDigit
	|	'\\' ZeroToThree OctalDigit OctalDigit
	;

fragment
ZeroToThree:
	[0-3]
	;

// This is not in the spec but prevents having to preprocess the input
fragment
UnicodeEscape:
	'\\' 'u'+ HexDigit HexDigit HexDigit HexDigit
    ;

PASCAL_CASE_IDENTIFIER:
	[A-Z] LetterOrDigit*
	;

CAMEL_CASE_IDENTIFIER:
    [a-z] LetterOrDigit*
    ;

ANY_IDENTIFIER:
    Letter LetterOrDigit*
    ;

fragment
Letter:
	[a-zA-Z$_] // these are the "letters" below 0x7F
	;

fragment
LetterOrDigit:
	[a-zA-Z0-9$_] // these are the "letters or digits" below 0x7F
	;

WS:
	[ \t\r\n\u000C]+ -> skip
    ;

