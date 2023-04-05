import Identifier from "../builder/Identifier";
import StringType from "../types/StringType";
import UnknownType from "../types/UnknownType";
import IType from "../types/IType";
import ObjectType from "../types/ObjectType";

export function ITypeFromTypename(id: Identifier): IType {
    switch(id.value) {
        case 'String':
            return StringType.instance;
        case 'UNKNOWN':
            return UnknownType.instance;
        default:
            return new ObjectType([]); // TODO support Interface and Function types
    }
}
