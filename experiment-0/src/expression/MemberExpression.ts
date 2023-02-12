import ExpressionBase from "./ExpressionBase";
import MemberSelector from "../select/MemberSelector";

export default class MemberExpression extends ExpressionBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }

}
