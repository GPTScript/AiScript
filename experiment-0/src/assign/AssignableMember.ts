import AssignableBase from "./AssignableBase";
import MemberSelector from "../select/MemberSelector";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";
import IExpression from "../expression/IExpression";
import IInterface from "../module/IInterface";
import ObjectType from "../types/ObjectType";
import ObjectLiteral from "../literal/ObjectLiteral";
import InferredInterface from "../module/InferredInterface";
import ISelectable from "../select/ISelectable";
import SelectableChild from "../select/SelectableChild";
import FunctionType from "../types/FunctionType";
import SelectableType from "../select/SelectableType";
import FunctionDefinition from "../expression/FunctionDefinition";

export default class AssignableMember extends AssignableBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }

    register(context: Context, expression: IExpression): void {
        const parent = this.loadParentContext(context, this.selector.parent);
        if(expression instanceof FunctionDefinition)
            parent.registerFunction(this.selector.member, expression);
        else
            throw new NotImplementedError();
    }

    check(context: Context): IType {
        throw new NotImplementedError();
    }

    private loadParentContext(context: Context, selectable: ISelectable) {
        if(selectable instanceof SelectableChild)
            context = this.loadParentContext(context, selectable);
        if(selectable instanceof MemberSelector)
            return context.getMemberContext(selectable.member);
        else if(selectable instanceof SelectableType) {
            const type = selectable.check(context);
            return Context.newInterfaceContext(context.calling, context, type);
        }
        throw new NotImplementedError();
    }
}
