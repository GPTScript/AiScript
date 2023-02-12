import ISelectable from "./ISelectable";
import VariableIdentifier from "../builder/VariableIdentifier";
import CodeFragment from "../builder/CodeFragment";

export default class MemberSelector extends CodeFragment {

    parent: ISelectable;
    member: VariableIdentifier;

    constructor(parent: ISelectable, member: VariableIdentifier) {
        super();
        this.parent = parent;
        this.member = member;
    }
}
