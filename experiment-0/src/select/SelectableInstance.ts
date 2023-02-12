import SelectableBase from "./SelectableBase";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class SelectableInstance extends SelectableBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }
}
