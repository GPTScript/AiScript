import VariableIdentifier from "../builder/VariableIdentifier";
import IType from "../types/IType";
import INamed from "../analyzer/INamed";

export default class Field implements INamed {

    id: VariableIdentifier;
    type: IType;

    constructor(id: VariableIdentifier, type: IType) {
        this.id = id;
        this.type = type;
    }

}
