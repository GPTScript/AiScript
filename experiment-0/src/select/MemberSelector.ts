import ISelectable from "./ISelectable";
import VariableIdentifier from "../builder/VariableIdentifier";
import CodeFragment from "../builder/CodeFragment";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";

export default class MemberSelector extends CodeFragment {

    parent: ISelectable;
    memberId: VariableIdentifier;

    constructor(parent: ISelectable, member: VariableIdentifier) {
        super();
        this.parent = parent;
        this.memberId = member;
    }

    loadContext(context: Context) {
        const parent = this.parent.loadContext(context);
        return parent.getMemberContext(this.memberId);
    }

    assignMember(context: Context, expression: IExpression) {
        const parent = this.parent.loadContext(context);
        parent.assignMember(this.memberId, expression);
    }

    inferAssignedType(context: Context, expression: IExpression) {
        const parent = this.parent.loadContext(context);
        parent.inferMemberType(this.memberId, expression);
    }

    checkExpression(context: Context): IType {
        const parent = this.parent.loadContext(context);
        const named = parent.getMember(this.memberId);
        if(named)
            return named.type;
        else
            context.problemListener.reportError(this.memberId.fragment, "No such member: '" + this.memberId.value + "'");
    }

    inferExpressionType(context: Context): IType {
        return this.checkExpression(context);
    }
}
