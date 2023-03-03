import IInterface from "./IInterface";
import TypeIdentifier from "../builder/TypeIdentifier";
import Field from "./Field";
import FunctionDefinition from "../expression/FunctionDefinition";
import NamedFunction from "../analyzer/NamedFunction";
import VariableIdentifier from "../builder/VariableIdentifier";
import IType from "../types/IType";
import CodeFragment from "../builder/CodeFragment";

export default abstract class InterfaceBase extends CodeFragment implements IInterface {

    name: TypeIdentifier;
    factory: FunctionDefinition;
    _fields = new Map<string, Field>();
    _functions = new Map<string, FunctionDefinition>();

    get fields(): Field[] {
        return Array.from(this._fields.values());
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

    registerField(name: VariableIdentifier, type: IType): void {
        // TODO check consistency
        this._fields.set(name.value, new Field(name, type));
    }

    assignFactory(body: FunctionDefinition): void {
        // TODO check consistency
        this.factory = body;
    }

    assignFunction(name: VariableIdentifier, body: FunctionDefinition): void {
        // TODO check consistency
        this._functions.set(name.value, body);
    }

    assignField(name: VariableIdentifier, type: IType): void {
        // TODO check consistency
        this._fields.set(name.value, new Field(name, type));
    }

}
