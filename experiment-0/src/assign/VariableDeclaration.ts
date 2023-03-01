import AssignableBase from "./AssignableBase";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";
import IExpression from "../expression/IExpression";

export default class VariableDeclaration extends AssignableBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }

    register(context: Context, expression: IExpression): void {
        throw new NotImplementedError();
    }

    check(context: Context): IType {
        throw new NotImplementedError();
    }

}
