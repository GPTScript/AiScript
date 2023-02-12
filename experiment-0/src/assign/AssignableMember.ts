import AssignableBase from "./AssignableBase";
import MemberSelector from "../select/MemberSelector";

export default class AssignableMember extends AssignableBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }
}
