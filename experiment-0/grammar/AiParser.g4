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
    | function_call_expression
    | function_definition
    ;

literal_expression:
    object_literal
    | string_literal
    ;

string_literal:
    STRING_LITERAL
    ;

instance_expression:
    variable_id
    ;

member_expression:
    member_selector
    ;

function_call_expression:
    function_selector argument_list
    ;

function_selector:
    selectable ( DOT variable_id )*
    ;

argument_list:
    LPAR ( expression ( COMMA expression )* )? RPAR
    ;

function_definition:
    FUNCTION parameter_list LCURL statement[true]* RCURL
    ;

parameter_list:
    LPAR ( variable_id ( COMMA variable_id )* )? RPAR
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
