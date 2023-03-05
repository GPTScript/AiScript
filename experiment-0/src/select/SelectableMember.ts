import ISelectable from "./ISelectable";
import SelectableChild from "./SelectableChild";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";

export default class SelectableMember extends SelectableChild {

    memberId: VariableIdentifier;

    constructor(parent: ISelectable, memberId: VariableIdentifier) {
        super(parent);
        this.memberId = memberId;
    }

    loadContext(context: Context): Context {
        const parent = this.parent.loadContext(context);
        return parent.getMemberContext(this.memberId);
    }

}
