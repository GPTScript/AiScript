lexer grammar AiLexer;

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

// §3.10.2 Floating-Point Literals

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

// §3.10.3 Boolean Literals

BOOLEAN_LITERAL:
	'true'
	|	'false'
	;

// §3.10.4 Character Literals

CHAR_LITERAL:
	'\'' SingleCharacter '\''
	|	'\'' EscapeSequence '\''
	;

fragment
SingleCharacter:
	~['\\\r\n]
	;

// §3.10.5 String Literals

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

// §3.10.6 Escape Sequences for Character and String Literals

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

// §3.10.7 The Null Literal

NULL_LITERAL:
	'null'
	;

// §3.8 Identifiers (must appear after all keywords in the grammar)

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

// §3. White space, must appear last

WS:
	[ \t\r\n\u000C]+ -> skip
    ;

