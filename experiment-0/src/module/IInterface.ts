import TypeIdentifier from "../builder/TypeIdentifier";
import Field from "./Field";
import NamedFunction from "../analyzer/NamedFunction";
import VariableIdentifier from "../builder/VariableIdentifier";
import FunctionDefinition from "../expression/FunctionDefinition";
import IType from "../types/IType";

export default interface IInterface {

    name: TypeIdentifier;
    get fields(): Field[];
    get functions(): NamedFunction[];
    get factory(): FunctionDefinition;
    registerFactory(body: FunctionDefinition): void;
    registerFunction(name: VariableIdentifier, body: FunctionDefinition): void;
    registerField(name: VariableIdentifier, type: IType): void;
    assignFactory(body: FunctionDefinition): void;
    assignFunction(name: VariableIdentifier, body: FunctionDefinition): void;
    assignField(name: VariableIdentifier, type: IType): void;
}
