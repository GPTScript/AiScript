import ExpressionBase from "./ExpressionBase";
import FunctionSelector from "./FunctionSelector";
import IExpression from "./IExpression";

export default class FunctionCallExpression extends ExpressionBase {

    selector: FunctionSelector;
    argumentsList: IExpression[];

    constructor(selector: FunctionSelector, argumentsList: IExpression[]) {
        super();
        this.selector = selector;
        this.argumentsList = argumentsList;
    }


}
