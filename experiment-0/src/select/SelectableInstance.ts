import SelectableBase from "./SelectableBase";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import ITypeListener from "../graph/ITypeListener";
import NamedInstance from "../analyzer/NamedInstance";
import NotImplementedError from "../error/NotImplementedError";
import IType from "../types/IType";
import ObjectType from "../types/ObjectType";

export default class SelectableInstance extends SelectableBase {

    variableId: VariableIdentifier;

    constructor(variableId: VariableIdentifier) {
        super();
        this.variableId = variableId;
    }

    loadContext(context: Context): Context {
        return context.getMemberContext(this.variableId);
    }

    addListener(context: Context, listener: ITypeListener): void {
        const named = context.getMember(this.variableId);
        if (named instanceof NamedInstance)
            named.addListener(listener);
    }

    getMemberListener(context: Context, memberId: VariableIdentifier): ITypeListener {
        const named = context.getMember(this.variableId);
        if (named instanceof NamedInstance) {
            const parentType = named.type;
            if(parentType instanceof ObjectType) {
                const listener = named.getListener(context);
                return (type: IType) => {
                    const current = parentType.getFieldType(memberId);
                    if(current.equals(type))
                        return false;
                    return listener(parentType.withFieldType(memberId, type));
                }
            }
        }
        throw new NotImplementedError();
    }
}
