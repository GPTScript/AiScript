import VariableIdentifier from "../builder/VariableIdentifier";
import IType from "../types/IType";

export default class Field {

    name: VariableIdentifier;
    type: IType;

    constructor(name: VariableIdentifier, type: IType) {
        this.name = name;
        this.type = type;
    }

}
