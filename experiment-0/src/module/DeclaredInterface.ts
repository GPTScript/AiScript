import InterfaceBase from "./InterfaceBase";
import ObjectField from "./ObjectField";
import TypeIdentifier from "../builder/TypeIdentifier";

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
}
