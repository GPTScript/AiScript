import ExpressionBase from "./ExpressionBase";
import MemberSelector from "../select/MemberSelector";
import NotImplementedError from "../error/NotImplementedError";
import IType from "../types/IType";
import Context from "../analyzer/Context";

export default class MemberExpression extends ExpressionBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }

    check(context: Context): IType {
        throw new NotImplementedError();
    }

}
