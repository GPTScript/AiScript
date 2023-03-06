import ExpressionBase from "./ExpressionBase";
import FunctionSelector from "./FunctionSelector";
import IExpression from "./IExpression";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import ITypeProducer from "../graph/ITypeProducer";

export default class FunctionCallExpression extends ExpressionBase {

    selector: FunctionSelector;
    argumentsList: IExpression[];

    constructor(selector: FunctionSelector, argumentsList: IExpression[]) {
        super();
        this.selector = selector;
        this.argumentsList = argumentsList;
    }

    check(context: Context): IType {
        this.checkArgumentTypes(context);
        const type = this.selector.check(context);
        type.checkValidArguments(context, this.argumentsList);
        return type.returnType;
    }

    private checkArgumentTypes(context: Context) {
        this.argumentsList.forEach(arg => arg.check(context));
    }

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        const type = this.selector.check(context);
        this.argumentsList.forEach((arg, idx) => {
            arg.wireDependencies(context, producers);
            const param = type.parameters[idx];
            arg.addListener(param.getListener(context));
        })
    }

    notifyListeners(): boolean {
        // TODO
        return false;
    }

}
