parser grammar AiParser;

options {
  tokenVocab = AiLexer;
}

statement:
    assign_statement
    ;

assign_statement:
    assignable ASSIGN expression
    ;

assignable:
    type_declaration
    ;

type_declaration:
    VAR type_id
    ;

type_id:
    PASCAL_CASE_IDENTIFIER
    ;

expression:
    literal_expression
    ;

literal_expression:
    object_literal
    ;

object_literal:
    LCURL ( object_entry ( COMMA object_entry )* )? RCURL
    ;

object_entry:
    variable_id COLON expression
    ;

variable_id:
    CAMEL_CASE_IDENTIFIER
    ;
