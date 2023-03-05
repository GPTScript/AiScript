import AiModule from "../module/AiModule";
import TypeIdentifier from "../builder/TypeIdentifier";
import UnsupportedOperationError from "../error/UnsupportedOperationError";
import IInterface from "../module/IInterface";
import ProblemListener from "../problem/ProblemListener";
import FinalInterface from "../module/FinalInterface";
import NotImplementedError from "../error/NotImplementedError";
import FunctionType from "../types/FunctionType";
import VariableIdentifier from "../builder/VariableIdentifier";
import INamed from "./INamed";
import InterfaceType from "../types/InterfaceType";
import FunctionDefinition from "../expression/FunctionDefinition";
import IType from "../types/IType";
import IExpression from "../expression/IExpression";
import Field from "../module/Field";
import NamedFunction from "./NamedFunction";
import NamedInstance from "./NamedInstance";

export default abstract class Context {

    static newModuleContext(module: AiModule, listener: ProblemListener) {
        const context = new ModuleContext(module);
        context.globals = context;
        context.calling = null;
        context.parent = null;
        context.problemListener = listener;
        return context;
    }

    static newInterfaceContext(calling: Context, parent: Context, type: InterfaceType) {
        const context = new InterfaceContext(type);
        context.globals = parent.globals;
        context.calling = calling;
        context.parent = parent;
        context.problemListener = parent.problemListener;
        return context;
    }

    globals: ModuleContext;
    calling: Context | null;
    parent: Context | null;
    problemListener: ProblemListener;

    registerInterface(typeId: TypeIdentifier, interface_: IInterface): void {
        throw new UnsupportedOperationError("Should never get there!");
    }

    getRegisteredInterface(typeId: TypeIdentifier): IInterface | null  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    registerMember(member: VariableIdentifier, expression: IExpression): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    assignMember(member: VariableIdentifier, expression: IExpression): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    getMemberContext(member: VariableIdentifier): Context  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    registerFunction(member: VariableIdentifier, definition: FunctionDefinition): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    registerField(member: VariableIdentifier, type: IType): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    getMember(member: VariableIdentifier): INamed {
        throw new UnsupportedOperationError("Should never get there!");
    }
}

class LocalContext extends Context {

    members = new Map<string, INamed>();

    registerMember(member: VariableIdentifier, expression: IExpression) {
        if (this.members.has(member.value))
            this.problemListener.reportError(member.fragment, "Duplicate name '" + member.value + "'");
        if(expression instanceof FunctionDefinition)
            this.registerFunction(member, expression);
        else
            this.registerField(member, expression.check(this));
    }

    getMember(member: VariableIdentifier): INamed {
        return this.members.get(member.value) || null;
    }

    registerField(member: VariableIdentifier, type: IType) {
        this.members.set(member.value, new NamedInstance(member, type));
    }

}

class ModuleContext extends LocalContext {

    module: AiModule;

    constructor(module: AiModule) {
        super();
        this.module = module;
    }

    registerInterface(typeId: TypeIdentifier, interface_: IInterface) {
        if(!this.module.interfaces.has(typeId.value))
            this.module.interfaces.set(typeId.value, interface_);
        else {
            const existing = this.module.interfaces.get(typeId.value);
            if(existing instanceof FinalInterface)
                this.problemListener.reportError(typeId.fragment, "Type '" + typeId.value + "' is already declared", existing.fragment);
            else
                throw new NotImplementedError("Checking compatible draft interface is not implemented");
        }
    }

    getRegisteredInterface(typeId: TypeIdentifier): IInterface | null {
        return this.module.interfaces.get(typeId.value) || null;
    }

    getMemberContext(member: VariableIdentifier): Context {
        if(this.members.has(member.value)) {
            const type = this.members.get(member.value).type;
            if(type instanceof InterfaceType)
                return Context.newInterfaceContext(this.calling, this, type);
            /* else if(type instanceof FunctionType)
                return Context.newFunctionContext(this, type);
            else if(type instanceof NativeType)
                return Context.newNativeContext(this, type); */
        }
        throw new NotImplementedError("Checking compatible draft interface is not implemented");
    }
}

class InterfaceContext extends Context {

    private static isFactory(member: VariableIdentifier) {
        return "create" == member.value;
    }

    type: InterfaceType;

    constructor(type: InterfaceType) {
        super();
        this.type = type;
    }

    registerMember(member: VariableIdentifier, expression: IExpression) {
        if(expression instanceof FunctionDefinition) {
            if(InterfaceContext.isFactory(member)) {
                expression.type.returnType = this.type;
                this.type.interface_.registerFactory(expression);
            } else
                this.type.interface_.registerStaticFunction(member, expression);
        } else
            this.type.interface_.registerStaticField(member, expression.check(this));
    }

    assignMember(member: VariableIdentifier, expression: IExpression) {
        if(expression instanceof FunctionDefinition) {
            if(InterfaceContext.isFactory(member)) {
                expression.type.returnType = this.type;
                this.type.interface_.assignFactory(expression);
            } else
                this.type.interface_.assignStaticFunction(member, expression);
        } else
            this.type.interface_.assignStaticField(member, expression.check(this));
    }

    getMember(member: VariableIdentifier): INamed {
        if(InterfaceContext.isFactory(member))
            return new NamedFunction(member, this.type.interface_.factory.type);
       else
           return this.type.interface_.getStaticMember(member);
    }



}
