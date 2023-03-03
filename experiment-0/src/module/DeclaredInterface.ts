import TypeIdentifier from "../builder/TypeIdentifier";
import InterfaceBase from "./InterfaceBase";

export default class DeclaredInterface extends InterfaceBase {

    constructor(name: TypeIdentifier) {
        super();
        this.name = name;
    }

}
