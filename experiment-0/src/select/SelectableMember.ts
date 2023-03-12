import ISelectable from "./ISelectable";
import SelectableChild from "./SelectableChild";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import ITypeListener from "../graph/ITypeListener";
import NotImplementedError from "../error/NotImplementedError";

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

    addListener(context: Context, listener: ITypeListener): void {
        throw new NotImplementedError();
    }

    getMemberListener(context: Context, memberId: VariableIdentifier): ITypeListener {
        throw new NotImplementedError();
    }
}
