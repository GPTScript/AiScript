import AssignableBase from "./AssignableBase";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class VariableDeclaration extends AssignableBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }
}
