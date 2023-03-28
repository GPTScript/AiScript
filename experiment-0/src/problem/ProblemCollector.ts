import Fragment from "../builder/Fragment";
import ProblemListener from "./ProblemListener";
import IProblem from "./IProblem";

export default class ProblemCollector extends ProblemListener {

    problems: IProblem[] = [];

    reportError(fragment: Fragment, message: string, ...relatedFragments: Fragment[]) {
        this.problems.push({fragment, message, relatedFragments})
    }
}
