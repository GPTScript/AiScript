import InterfaceBase from "./InterfaceBase";
import ObjectField from "./ObjectField";
import TypeIdentifier from "../builder/TypeIdentifier";
import Context from "../analyzer/Context";
import IInterface from "./IInterface";

export default abstract class DeclaredInterface extends InterfaceBase {

    _instanceFields = new Map<string, ObjectField>();

    constructor(id: TypeIdentifier) {
        super(id);
    }

    get instanceFields(): ObjectField[] {
        return Array.from(this._instanceFields.values());
    }

    set instanceFields(fields: ObjectField[]) {
        this._instanceFields.clear();
        fields.forEach(field => this._instanceFields.set(field.id.value, field));
    }

    checkDuplicate(context: Context, other: IInterface): IInterface {
        if(other instanceof DeclaredInterface) {
            context.problemListener.reportError(other.id.fragment, "Type '" + other.id.value + "' is already declared", other.fragment);
            return this;
        } else {
            // TODO check field compatibility
            return this;
        }
    }
}
