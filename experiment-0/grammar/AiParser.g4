parser grammar AiParser;

options {
  tokenVocab = AiLexer;
}

top_level_statement:
    statement[false]
    ;

statement[boolean allow_return]:
    assign_statement
    | { $allow_return }? return_statement
    ;

assign_statement:
    assignable ASSIGN expression
    ;

return_statement:
    RETURN expression?
    ;

assignable:
    type_declaration            # TypeDeclaration
    | variable_declaration      # VariableDeclaration
    | member_selector           # AssignableMember
    ;

type_declaration:
    VAR type_id
    ;

variable_declaration:
    VAR variable_id
    ;

member_selector:
    selectable ( DOT variable_id )+
    ;

selectable:
    type_id                     # SelectableType
    | variable_id               # SelectableVariable
    ;

type_id:
    PASCAL_CASE_IDENTIFIER
    ;

expression:
    literal_expression
    | instance_expression
    | member_expression
    | function_expression
    ;

literal_expression:
    object_literal
    ;

instance_expression:
    variable_id
    ;

member_expression:
    member_selector
    ;

function_expression:
    FUNCTION LPAR ( variable_id ( COMMA variable_id )* )? RPAR LCURL statement[true]* RCURL
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
