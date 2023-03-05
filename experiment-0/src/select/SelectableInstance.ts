import SelectableBase from "./SelectableBase";
import VariableIdentifier from "../builder/VariableIdentifier";
import NotImplementedError from "../error/NotImplementedError";
import Context from "../analyzer/Context";

export default class SelectableInstance extends SelectableBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }

    loadContext(context: Context): Context {
        throw new NotImplementedError();
    }
}
