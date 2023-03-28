import Fragment from "../builder/Fragment";
import {ErrorListener, RecognitionException, Recognizer, Token} from "antlr4";
import AiParser from "../parser/AiParser";

export default class ProblemListener extends ErrorListener<Token> {

    syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined) {
        const fragment = Fragment.fromTokens("", offendingSymbol, offendingSymbol);
        this.reportError(fragment, e.message);
    }

    reportError(fragment: Fragment, message: string, ...relatedFragments: Fragment[]) {
        console.error(message);
    }
}
