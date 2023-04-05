import IComment from "./IComment";
import TypeIdentifier from "../builder/TypeIdentifier";
import ObjectField from "../module/ObjectField";
import TypeSet from "../types/TypeSet";
import {ITypeFromTypename} from "../utils/TypeUtils";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class PropertyTypeComment implements IComment {

    id: VariableIdentifier;
    types: TypeIdentifier[];

    constructor(id: VariableIdentifier, types: TypeIdentifier[]) {
        this.id = id;
        this.types = types;
    }

    toObjectField(): ObjectField {
        const types = this.types.map(type => ITypeFromTypename(type));
        const type = types.length > 1 ? new TypeSet(types) : types[0];
        return new ObjectField(this.id, type);
    }


}
