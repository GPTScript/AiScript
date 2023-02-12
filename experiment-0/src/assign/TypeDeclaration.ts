import AssignableBase from "./AssignableBase";
import TypeIdentifier from "../builder/TypeIdentifier";

export default class TypeDeclaration extends AssignableBase {

    typeId: TypeIdentifier;

    constructor(typeId: TypeIdentifier) {
        super();
        this.typeId = typeId;
    }
}
