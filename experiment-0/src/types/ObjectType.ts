import NativeType from "./NativeType";
import Context from "../analyzer/Context";
import IType from "./IType";
import ObjectField from "../module/ObjectField";
import VariableIdentifier from "../builder/VariableIdentifier";
import UnknownType from "./UnknownType";

export default class ObjectType extends NativeType {

    fields: ObjectField[];

    constructor(fields: ObjectField[]) {
        super();
        this.fields = fields;
    }

    get typename(): string {
        return "object";
    }

    equals(other: IType): boolean {
        if (!(other instanceof ObjectType))
            return false;
        if(this.fields.length != other.fields.length)
            return false;
        const thisNames = new Set<string>(this.fields.map(f => f.id.value));
        return !other.fields.some(f => !thisNames.has(f.id.value));
    }

    newContext(parent: Context): Context {
        return parent.newObjectContext();
    }

    getFieldType(id: VariableIdentifier) {
        const field = this.fields.find(f => f.id.value == id.value);
        return field ? field.type : UnknownType.instance;
    }

    withFieldType(id: VariableIdentifier, type: IType): ObjectType {
        const field = this.fields.find(f => f.id.value == id.value);
        if(field && field.type.equals(type))
            return this;
        const fields = [].concat(this.fields.filter(f => f == field));
        fields.push(new ObjectField(id, type));
        return new ObjectType(fields);
    }
}
