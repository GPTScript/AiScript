import AssignableBase from "./AssignableBase";
import MemberSelector from "../select/MemberSelector";
import Context from "../analyzer/Context";
import IExpression from "../expression/IExpression";
import ITypeListener from "../graph/ITypeListener";
import ITypeProducer from "../graph/ITypeProducer";

export default class AssignableMember extends AssignableBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }

    register(context: Context, expression: IExpression): void {
        this.selector.assignMember(context, expression);
    }

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        this.selector.wireDependencies(context, producers);
    }

    getListener(context: Context): ITypeListener {
        return this.selector.getListener(context);
    }


}
