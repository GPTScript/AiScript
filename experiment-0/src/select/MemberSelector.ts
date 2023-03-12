import ISelectable from "./ISelectable";
import VariableIdentifier from "../builder/VariableIdentifier";
import CodeFragment from "../builder/CodeFragment";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import ITypeListenerProvider from "../graph/ITypeListenerProvider";
import ITypeListener from "../graph/ITypeListener";
import UnknownType from "../types/UnknownType";
import ObjectType from "../types/ObjectType";
import UnsupportedOperationError from "../error/UnsupportedOperationError";
import NamedBase from "../analyzer/NamedBase";
import ITypeProducer from "../graph/ITypeProducer";

export default class MemberSelector extends CodeFragment implements ITypeListenerProvider {

    parent: ISelectable;
    memberId: VariableIdentifier;
    _parentContext: Context = null;

    constructor(parent: ISelectable, member: VariableIdentifier) {
        super();
        this.parent = parent;
        this.memberId = member;
    }

    addListener(context: Context, listener: ITypeListener): void {
        this.parent.addListener(context, (type: IType) => {
            if(type instanceof ObjectType) {
                const fieldType = type.getFieldType(this.memberId);
                return listener(fieldType || UnknownType.instance);
            } else
                throw new UnsupportedOperationError(); // TODO
        });
    }

    assignMember(context: Context, expression: IExpression) {
        const parent = this.loadParentContext(context);
        parent.assignMemberExpression(this.memberId, expression);
    }

    checkExpression(context: Context): IType {
        const parent = this.loadParentContext(context);
        const named = parent.getMember(this.memberId);
        if(named)
            return named.type;
        else
            context.problemListener.reportError(this.memberId.fragment, "No such member: '" + this.memberId.value + "'");
    }

    getListener(context: Context): ITypeListener {
        const parent = this.loadParentContext(context);
        const named = parent.getMember(this.memberId);
        if(named instanceof NamedBase)
            return named.getListener(context);
        else
            throw new UnsupportedOperationError();
    }

    loadParentContext(context: Context) {
        // this is NOT an optimization, we need to re-use the same parent context which holds NamedInstances that are listened to for type changes
        if(!this._parentContext)
            this._parentContext = this.parent.loadContext(context);
        return this._parentContext;
    }


    wireDependencies(context: Context, producers: ITypeProducer[]) {
        const parent = this.loadParentContext(context);
        const named = parent.getMember(this.memberId);
        if(named instanceof NamedBase) {
            const listener = this.parent.getMemberListener(context, this.memberId);
            named.addListener(listener);
        }
    }
}
