import IInterface from "./IInterface";
import TypeIdentifier from "../builder/TypeIdentifier";
import Field from "./Field";
import FunctionDefinition from "../expression/FunctionDefinition";
import NamedFunction from "../analyzer/NamedFunction";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class InferredInterface implements IInterface {

    name: TypeIdentifier;
    fields: Field[] = [];
    factory: FunctionDefinition;
    _functions = new Map<string, FunctionDefinition>();

    constructor(name: TypeIdentifier) {
        this.name = name;
    }

    get functions(): NamedFunction[] {
        return Array.from(this._functions.entries())
            .map(entry => new NamedFunction(new VariableIdentifier(entry[0]), entry[1].type));
    }

    registerFactory(body: FunctionDefinition): void {
        // TODO check consistency
        this.factory = body;
    }

    registerFunction(name: VariableIdentifier, body: FunctionDefinition): void {
        // TODO check consistency
        this._functions.set(name.value, body);
    }

}
