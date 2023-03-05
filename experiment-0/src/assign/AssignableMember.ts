import AssignableBase from "./AssignableBase";
import MemberSelector from "../select/MemberSelector";
import Context from "../analyzer/Context";
import IExpression from "../expression/IExpression";

export default class AssignableMember extends AssignableBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }

    register(context: Context, expression: IExpression): void {
        this.selector.assignMember(context, expression);
   }

}
