import NativeType from "./NativeType";
import Context from "../analyzer/Context";
import IType from "./IType";
import Field from "../module/Field";

export default class ObjectType extends NativeType {

    fields: Field[];

    constructor(fields: Field[]) {
        super();
        this.fields = fields;
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

}
