import SelectableBase from "./SelectableBase";
import TypeIdentifier from "../builder/TypeIdentifier";
import InterfaceType from "../types/InterfaceType";
import Context from "../analyzer/Context";
import ITypeListener from "../graph/ITypeListener";
import NotImplementedError from "../error/NotImplementedError";
import VariableIdentifier from "../builder/VariableIdentifier";
import IType from "../types/IType";
import ObjectField from "../module/ObjectField";
import UnsupportedOperationError from "../error/UnsupportedOperationError";

export default class SelectableType extends SelectableBase {

    typeId: TypeIdentifier;

    constructor(typeId: TypeIdentifier) {
        super();
        this.typeId = typeId;
    }

    check(context: Context): InterfaceType {
        // for now, let's assume TypeIdentifier can only refer to an interface
        const interface_ = context.getRegisteredInterface(this.typeId);
        if (interface_)
            return new InterfaceType(interface_);
        else
            context.problemListener.reportError(this.typeId.fragment, "No such type: " + this.typeId.value);
    }

    loadContext(context: Context): Context {
        const type = this.check(context);
        return type.newContext(context);
    }

    addListener(context: Context, listener: ITypeListener): void {
        throw new NotImplementedError();
    }

    getMemberListener(context: Context, memberId: VariableIdentifier): ITypeListener {
        // for now, let's assume TypeIdentifier can only refer to an interface
        const interface_ = context.getRegisteredInterface(this.typeId);
        if (interface_)
            return (type: IType) =>  {
                const named = interface_.getStaticMember(memberId);
                if(named.type.equals(type))
                    return false;
                if(named instanceof ObjectField)
                    interface_.assignStaticField(memberId, type);
                // if it's a function it's already been updated
                // TODO notify listeners
                return true;
            }
        else
            throw new UnsupportedOperationError();
    }

}
