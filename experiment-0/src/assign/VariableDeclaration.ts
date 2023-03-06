import AssignableBase from "./AssignableBase";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import IExpression from "../expression/IExpression";
import ITypeListener from "../graph/ITypeListener";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";
import ITypeProducer from "../graph/ITypeProducer";

export default class VariableDeclaration extends AssignableBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }

    register(context: Context, expression: IExpression): void {
        context.registerMember(this.variableId, expression);
    }

    wireDependencies(context: Context, producers: ITypeProducer[]) {
        // nothing to do
    }

    getListener(context: Context): ITypeListener {
        return (type: IType) => { throw new NotImplementedError(); };
    }


}
