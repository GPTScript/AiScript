import INamed from "./INamed";
import VariableIdentifier from "../builder/VariableIdentifier";
import FunctionType from "../types/FunctionType";

export default class NamedFunction implements INamed {

    id: VariableIdentifier;
    type: FunctionType;

    constructor(id: VariableIdentifier, type: FunctionType) {
        this.id = id;
        this.type = type;
    }

}
