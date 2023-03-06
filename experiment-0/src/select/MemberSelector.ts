import ISelectable from "./ISelectable";
import VariableIdentifier from "../builder/VariableIdentifier";
import CodeFragment from "../builder/CodeFragment";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import ITypeListenerProvider from "../graph/ITypeListenerProvider";
import ITypeListener from "../graph/ITypeListener";
import NotImplementedError from "../error/NotImplementedError";
import ITypeProducer from "../graph/ITypeProducer";

export default class MemberSelector extends CodeFragment implements ITypeListenerProvider {

    parent: ISelectable;
    memberId: VariableIdentifier;

    constructor(parent: ISelectable, member: VariableIdentifier) {
        super();
        this.parent = parent;
        this.memberId = member;
    }

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        // TODO this.parent.wireDependencies(context);

    }

    loadContext(context: Context) {
        const parent = this.parent.loadContext(context);
        return parent.getMemberContext(this.memberId);
    }

    assignMember(context: Context, expression: IExpression) {
        const parent = this.parent.loadContext(context);
        parent.assignMember(this.memberId, expression);
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

    getListener(context: Context): ITypeListener {
        return (type: IType) => { throw new NotImplementedError(); };
    }

}
