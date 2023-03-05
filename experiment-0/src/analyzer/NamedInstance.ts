import INamed from "./INamed";
import IType from "../types/IType";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class NamedInstance implements INamed {

    name: VariableIdentifier;
    type: IType;

    constructor(id: VariableIdentifier, type: IType) {
        this.name = id;
        this.type = type;
    }

}
