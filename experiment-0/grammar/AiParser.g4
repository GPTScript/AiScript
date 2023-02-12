parser grammar AiParser;

options {
  tokenVocab = AiLexer;
}

statement:
    assign_statement
    ;

assign_statement:
    lhs_expression ASSIGN expression
    ;

lhs_expression:
    type_declaration
    ;

type_declaration:
    VAR type_id
    ;

type_id:
    PASCAL_CASE_IDENTIFIER
    ;

expression:
    object_expression
    ;

object_expression:
    LCURL ( object_item ( COMMA object_item )* )? RCURL
    ;

object_item:
    variable_id COLON expression
    ;

variable_id:
    CAMEL_CASE_IDENTIFIER
    ;
