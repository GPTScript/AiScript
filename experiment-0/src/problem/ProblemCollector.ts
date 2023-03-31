import Fragment from "../builder/Fragment";
import ProblemListener from "./ProblemListener";
import IProblem from "./IProblem";
import ProblemType from "./ProblemType";

export default class ProblemCollector extends ProblemListener {

    problems: IProblem[] = [];

    reportError(fragment: Fragment, message: string, ...relatedFragments: Fragment[]) {
        const msg = message && message.length ? message : "Invalid syntax";
        this.problems.push({fragment, type: ProblemType.ERROR, message: msg, relatedFragments})
    }
}
