import ExpressionBase from "./ExpressionBase";
import FunctionSelector from "./FunctionSelector";
import IExpression from "./IExpression";
import Context from "../analyzer/Context";
import IType from "../types/IType";

export default class FunctionCallExpression extends ExpressionBase {

    selector: FunctionSelector;
    argumentsList: IExpression[];

    constructor(selector: FunctionSelector, argumentsList: IExpression[]) {
        super();
        this.selector = selector;
        this.argumentsList = argumentsList;
    }

    check(context: Context): IType {
        const type = this.selector.check(context);
        type.checkArguments(context, this.argumentsList);
        return type.returnType;
    }

}
