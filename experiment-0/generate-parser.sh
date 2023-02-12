export JAVA_HOME=`/usr/libexec/java_home -v 17`
export TOOL=~/Development/antlr4/ericvergnaud/antlr4/tool/target/antlr4-4.11.2-SNAPSHOT-complete.jar
pushd grammar
java -cp $TOOL org.antlr.v4.Tool AiLexer.g4 -o ../src/parser -Dlanguage=TypeScript
java -cp $TOOL org.antlr.v4.Tool AiParser.g4 -o ../src/parser -Dlanguage=TypeScript -listener -no-visitor
popd
