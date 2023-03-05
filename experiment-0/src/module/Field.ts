import VariableIdentifier from "../builder/VariableIdentifier";
import IType from "../types/IType";
import INamed from "../analyzer/INamed";

export default class Field implements INamed {

    name: VariableIdentifier;
    type: IType;

    constructor(name: VariableIdentifier, type: IType) {
        this.name = name;
        this.type = type;
    }

}
