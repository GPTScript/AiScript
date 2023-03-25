import IInterface from "./IInterface";
import TypeIdentifier from "../builder/TypeIdentifier";
import ObjectField from "./ObjectField";
import FunctionDefinition from "../expression/FunctionDefinition";
import NamedFunction from "../analyzer/NamedFunction";
import VariableIdentifier from "../builder/VariableIdentifier";
import IType from "../types/IType";
import CodeFragment from "../builder/CodeFragment";
import INamed from "../analyzer/INamed";
import ObjectType from "../types/ObjectType";

export default abstract class InterfaceBase extends CodeFragment implements IInterface {

    id: TypeIdentifier;
    factory: FunctionDefinition;
    _staticFields = new Map<string, ObjectField>();
    _staticFunctions = new Map<string, FunctionDefinition>();

    constructor(id: TypeIdentifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    registerFactory(body: FunctionDefinition): void {
        // TODO check consistency
        this.factory = body;
    }

    assignFactory(body: FunctionDefinition): void {
        // TODO check consistency
        this.factory = body;
    }

    registerStaticFunction(name: VariableIdentifier, body: FunctionDefinition): void {
        // TODO check consistency
        this._staticFunctions.set(name.value, body);
    }

    assignStaticFunction(name: VariableIdentifier, body: FunctionDefinition): void {
        // TODO check consistency
        this._staticFunctions.set(name.value, body);
    }

    get staticFunctions(): NamedFunction[] {
        return Array.from(this._staticFunctions.entries())
            .map(entry => new NamedFunction(new VariableIdentifier(entry[0]), entry[1].type));
    }

    registerStaticField(name: VariableIdentifier, type: IType): void {
        // TODO check consistency
        this._staticFields.set(name.value, new ObjectField(name, type));
    }

    assignStaticField(name: VariableIdentifier, type: IType): void {
        // TODO check consistency
        this._staticFields.set(name.value, new ObjectField(name, type));
    }

    get staticFields(): ObjectField[] {
        return Array.from(this._staticFields.values());
    }

    getStaticMember(member: VariableIdentifier): INamed {
        if(this._staticFields.has(member.value))
            return this._staticFields.get(member.value);
        if(this._staticFunctions.has(member.value)) {
            const body = this._staticFunctions.get(member.value);
            return new NamedFunction(member, body.type);
        }
        return null;
    }

    get instanceFields(): ObjectField[] {
        const type = this.factory ? this.factory.type.returnType : null;
        if(type instanceof ObjectType)
            return type.fields;
        else
            return [];
    }

}
