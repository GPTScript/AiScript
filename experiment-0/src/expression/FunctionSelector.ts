import ISelectable from "../select/ISelectable";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import FunctionType from "../types/FunctionType";

export default class FunctionSelector {

    parent: ISelectable;
    function_: VariableIdentifier;

    constructor(parent: ISelectable, function_: VariableIdentifier) {
        this.parent = parent;
        this.function_ = function_;
    }

    // @ts-ignore
    check(context: Context): FunctionType {
        const parent = this.parent.loadContext(context);
        const member = parent ? parent.getMember(this.function_) : null;
        if(!member)
            context.problemListener.reportError(this.function_.fragment, "No such function: " + this.function_.value);
        else if(member.type instanceof FunctionType)
            return member.type;
        else
            context.problemListener.reportError(this.function_.fragment, "Not a function: " + this.function_.value);

    }
}
