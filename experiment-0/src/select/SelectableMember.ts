import ISelectable from "./ISelectable";
import SelectableChild from "./SelectableChild";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class SelectableMember extends SelectableChild {

    memberId: VariableIdentifier;

    constructor(parent: ISelectable, memberId: VariableIdentifier) {
        super(parent);
        this.memberId = memberId;
    }
}
