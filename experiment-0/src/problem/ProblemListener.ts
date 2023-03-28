import Fragment from "../builder/Fragment";
import {ErrorListener, Token} from "antlr4";

export default class ProblemListener extends ErrorListener<Token> {

    reportError(fragment: Fragment, message: string, ...relatedFragments: Fragment[]) {
        console.error(message);
    }
}
