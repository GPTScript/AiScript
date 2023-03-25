import TypeIdentifier from "../builder/TypeIdentifier";
import ObjectField from "./ObjectField";
import NamedFunction from "../analyzer/NamedFunction";
import VariableIdentifier from "../builder/VariableIdentifier";
import FunctionDefinition from "../expression/FunctionDefinition";
import IType from "../types/IType";
import INamed from "../analyzer/INamed";

export default interface IInterface {

    id: TypeIdentifier;
    get name(): string;

    registerFactory(body: FunctionDefinition): void;
    assignFactory(body: FunctionDefinition): void;
    get factory(): FunctionDefinition;

    registerStaticFunction(name: VariableIdentifier, body: FunctionDefinition): void;
    assignStaticFunction(name: VariableIdentifier, body: FunctionDefinition): void;
    get staticFunctions(): NamedFunction[];

    registerStaticField(name: VariableIdentifier, type: IType): void;
    assignStaticField(name: VariableIdentifier, type: IType): void;
    get staticFields(): ObjectField[];

    getStaticMember(id: VariableIdentifier): INamed;

    get instanceFields(): ObjectField[];
}
