import TypeIdentifier from "../builder/TypeIdentifier";
import IComment from "./IComment";

export default class InterfaceTypeComment implements IComment {

    id: TypeIdentifier;

    constructor(id: TypeIdentifier) {
        this.id = id;
    }
}
