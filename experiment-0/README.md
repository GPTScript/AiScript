This project is called experiment-0 because its sole purpose is to validate (or not!) some assumptions re the AiScript language:
 - it's possible to infer interface declarations from code that uses undeclared interfaces
 - it's possible to create a language that is a subset of JavaScript which satisfies the above
 - it's possible to create a library that will integrate with LSP

To achieve this experiment, some decisions were made:
 - use of antlr4 for building the lexer and parser. This is probably not the best choice in terms of raw performance, 
but it certainly is in terms of speed of development, which is more important at this stage
 - use of TypeScript as a language. Again this is way slower than C++ or go, but it is part of AJ's skillset, and it also
makes it easier to integrate with LSP for VSCode (since VSCode runs on V8, and sample code is in JS/TS).

The output is an ESM library generated using webpack. We haven't looked at building a different version for the browser and for node, 
which would be required, but is not in scope of the experiment. The library only runs in node for now.

Assuming you have recent versions of git, node and npm, building is as simple as:
 - git clone ...
 - npm install
 - npm run build

In order for the library to be used in other packages, it must also be published locally, as follows:
 - npm link

if the grammar changes, the lexer/perser needs to be regenerated

The inference algorithm is as follows:
 - parse the code, this produces an abstract syntax tree (under the _parser_ folder)
 - build constructs that represent the code, such as Statement, Expression and so on... (under the _builder_ folder)
 - the top-level construct is a Module, which holds all top-level constructs from a file (under the _module_ folder)
 - walk the module top-down to build a dependency tree, answering the following question: if the current construct could be typed, which accessible constructs would it infer its type from ? For example, in the statement: ```var a = 123```, the type of the left hand side ```a``` is inferred from the right hand-side expression, whose type is inferred from the number literal.
 - as the module is being walked, also collect constructs that are type _producers_. Such constructs are literals, including special ones such as the empty object ```{}```.
 - walking the module top-down results in the following: each construct has a list of dependencies, and we have a list of producers.
 - now it suffices, for each type _producer_, to tell their listeners that the type of the construct they depend on has changed. Doing this propagates the change bottom-up, up to top-level constructs in the module.

Not everything can be 100% inferred though:
 - a statement such as ```var Person = {}``` is assumed to be the beginning of an interface declaration (because Person is pascal-case)
 - a statement such as ```Person.create = function(...){.../...}``` is assumed to be a factory function (because it applies to a type, not to an instance, and the verb ```create```has a special meaning)
