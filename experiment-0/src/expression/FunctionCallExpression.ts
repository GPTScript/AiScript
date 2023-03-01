import ExpressionBase from "./ExpressionBase";
import FunctionSelector from "./FunctionSelector";
import IExpression from "./IExpression";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";

export default class FunctionCallExpression extends ExpressionBase {

    selector: FunctionSelector;
    argumentsList: IExpression[];

    constructor(selector: FunctionSelector, argumentsList: IExpression[]) {
        super();
        this.selector = selector;
        this.argumentsList = argumentsList;
    }

    check(context: Context): IType {
        throw new NotImplementedError();
    }

}
