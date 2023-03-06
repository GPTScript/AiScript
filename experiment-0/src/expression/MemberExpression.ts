import ExpressionBase from "./ExpressionBase";
import MemberSelector from "../select/MemberSelector";
import IType from "../types/IType";
import Context from "../analyzer/Context";

export default class MemberExpression extends ExpressionBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }

    check(context: Context): IType {
        return this.selector.checkExpression(context);
    }

    wireDependencies(context: Context) {
        // TODO
    }

    notifyListeners(): boolean {
        // TODO
        return false;
    }


}
