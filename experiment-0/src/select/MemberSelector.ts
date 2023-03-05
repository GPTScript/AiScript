import ISelectable from "./ISelectable";
import VariableIdentifier from "../builder/VariableIdentifier";
import CodeFragment from "../builder/CodeFragment";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";

export default class MemberSelector extends CodeFragment {

    parent: ISelectable;
    member: VariableIdentifier;

    constructor(parent: ISelectable, member: VariableIdentifier) {
        super();
        this.parent = parent;
        this.member = member;
    }

    assignMember(context: Context, expression: IExpression) {
        const parent = this.parent.loadContext(context);
        parent.assignMember(this.member, expression);
    }

    loadContext(context: Context) {
        const parent = this.parent.loadContext(context);
        return parent.getMemberContext(this.member);
    }


}
