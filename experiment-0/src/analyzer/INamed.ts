import IType from "../types/IType";
import VariableIdentifier from "../builder/VariableIdentifier";

export default interface INamed {
    name: VariableIdentifier;
    type: IType;
}
