import TypeIdentifier from "../builder/TypeIdentifier";
import Field from "./Field";
import NamedFunction from "../analyzer/NamedFunction";
import FunctionType from "../types/FunctionType";
import VariableIdentifier from "../builder/VariableIdentifier";
import FunctionDefinition from "../expression/FunctionDefinition";

export default interface IInterface {

    name: TypeIdentifier;
    get fields(): Field[];
    get functions(): NamedFunction[];
    get factory(): FunctionDefinition;
    registerFactory(body: FunctionDefinition): void;
    registerFunction(name: VariableIdentifier, body: FunctionDefinition): void;

}
