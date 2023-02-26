parser grammar AiDocParser;

options { tokenVocab=AiDocLexer; }

documentation:
    NEWLINE* bounded_comment? NEWLINE* EOF
    ;

bounded_comment:
    comment_start NEWLINE comment_line* comment_end
    | comment_start comment_end
    ;

comment_start:
    AIDOC_START SPACE? comment?
    ;

comment_line:
    SPACE? STAR+ SPACE? comment? SPACE? NEWLINE
    ;

comment_end:
    (SPACE? STAR+ SPACE? comment?)? SPACE? AIDOC_END
    ;

comment:
    type_comment
    | property_comment
    | version_comment
    | text_comment
    ;

type_comment:
    ARONDBASE PASCAL_CASE_IDENTIFIER SPACE INTERFACE (SPACE text_comment)?
    ;

property_comment:
    ARONDBASE CAMEL_CASE_IDENTIFIER SPACE property_types (SPACE text_comment)?
    ;

property_types:
    property_type ( SPACE? PIPE SPACE? property_type )*
    ;

property_type:
    PASCAL_CASE_IDENTIFIER OPTIONAL?
    | UNKNOWN
    ;

version_comment:
    DOLLAR VERSION SPACE version_value (SPACE text_comment)?
    ;

version_value:
    DRAFT SPACE HASH_CODE
    | SEMVER
    ;

text_comment:
    text_start ( SPACE? (text_element | inline_tag))*
    ;

text_start:
    TEXT_CONTENT
    | PASCAL_CASE_IDENTIFIER
    | CAMEL_CASE_IDENTIFIER
    | STAR
    | SLASH
    | HASH_CODE
    | BRACE_OPEN
    | BRACE_CLOSE
    | keyword
    ;

keyword:
    INTERFACE
    | VERSION
    | DRAFT
    | UNKNOWN
    ;

text_element:
    text_start
    | ARONDBASE
    | DOLLAR
    ;

inline_tag:
    INLINE_TAG_START (PASCAL_CASE_IDENTIFIER | CAMEL_CASE_IDENTIFIER) SPACE? tag_content? BRACE_CLOSE
    ;

tag_content:
    BRACE_OPEN tag_content BRACE_CLOSE
    | tag_text+
    ;

tag_text:
    TEXT_CONTENT
    | PASCAL_CASE_IDENTIFIER
    | CAMEL_CASE_IDENTIFIER
    | STAR
    | SLASH
    | HASH_CODE
    | NEWLINE
    | keyword
    ;





