import CodeFragment from "../builder/CodeFragment";
import IInterface from "./IInterface";
import Documentation from "../documentation/Documentation";
import NotImplementedError from "../error/NotImplementedError";
import TypeIdentifier from "../builder/TypeIdentifier";
import Field from "./Field";
import FunctionDefinition from "../expression/FunctionDefinition";
import NamedFunction from "../analyzer/NamedFunction";
import VariableIdentifier from "../builder/VariableIdentifier";

export default abstract class DeclaredInterface extends CodeFragment implements IInterface {

    static fromDocumentation(doc: Documentation): IInterface {
        throw new NotImplementedError();
    }

    name: TypeIdentifier;
    fields: Field[] = [];

    get factory(): FunctionDefinition {
        throw new NotImplementedError();
    }

    get functions(): NamedFunction[] {
        throw new NotImplementedError();
    }

    registerFactory(body: FunctionDefinition): void {
        throw new NotImplementedError();
    }

    registerFunction(name: VariableIdentifier, body: FunctionDefinition): void {
        throw new NotImplementedError();
    }

}
