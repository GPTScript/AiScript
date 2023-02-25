export JAVA_HOME=`/usr/libexec/java_home -v 17`
export TOOL=~/Development/antlr4/releases/antlr-4.12.0-complete.jar
pushd grammar
java -cp $TOOL org.antlr.v4.Tool AiLexer.g4 -o ../src/parser -Dlanguage=TypeScript
java -cp $TOOL org.antlr.v4.Tool AiParser.g4 -o ../src/parser -Dlanguage=TypeScript -listener -no-visitor
java -cp $TOOL org.antlr.v4.Tool AiDocLexer.g4 -o ../src/parser -Dlanguage=TypeScript
java -cp $TOOL org.antlr.v4.Tool AiDocParser.g4 -o ../src/parser -Dlanguage=TypeScript -listener -no-visitor
popd
