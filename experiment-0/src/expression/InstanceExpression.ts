import ExpressionBase from "./ExpressionBase";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";
import NamedBase from "../analyzer/NamedBase";

export default class InstanceExpression extends ExpressionBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }

    check(context: Context): IType {
        throw new NotImplementedError();
    }

    wireDependencies(context: Context) {
        const named = context.getMember(this.variableId);
        if(named instanceof NamedBase)
            named.addListener((type: IType) => this.notifyListeners(type));
    }

    notifyListeners(type?: IType): boolean {
        return type ? this.listeners.notify(type) : false;
    }

}
