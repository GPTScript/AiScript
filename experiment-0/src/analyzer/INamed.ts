import IType from "../types/IType";
import VariableIdentifier from "../builder/VariableIdentifier";

export default interface INamed {
    id: VariableIdentifier;
    type: IType;
}
