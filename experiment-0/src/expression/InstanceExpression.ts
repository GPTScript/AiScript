import ExpressionBase from "./ExpressionBase";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class InstanceExpression extends ExpressionBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }

}
