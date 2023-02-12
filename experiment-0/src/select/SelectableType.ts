import SelectableBase from "./SelectableBase";
import TypeIdentifier from "../builder/TypeIdentifier";

export default class SelectableType extends SelectableBase {

    typeId: TypeIdentifier;

    constructor(typeId: TypeIdentifier) {
        super();
        this.typeId = typeId;
    }
}
