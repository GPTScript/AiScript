import INamed from "./INamed";
import VariableIdentifier from "../builder/VariableIdentifier";
import FunctionType from "../types/FunctionType";

export default class NamedFunction implements INamed {

    name: string;
    type: FunctionType;

    constructor(id: VariableIdentifier, type: FunctionType) {
        this.name = id.value;
        this.type = type;
    }

}