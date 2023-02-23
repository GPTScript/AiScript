import ISelectable from "../select/ISelectable";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class FunctionSelector {

    parent: ISelectable;
    function_: VariableIdentifier;

    constructor(parent: ISelectable, function_: VariableIdentifier) {
        this.parent = parent;
        this.function_ = function_;
    }
}
