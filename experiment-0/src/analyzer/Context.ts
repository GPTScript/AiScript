import AiModule from "../module/AiModule";
import TypeIdentifier from "../builder/TypeIdentifier";
import UnsupportedOperationError from "../error/UnsupportedOperationError";
import IInterface from "../module/IInterface";
import ProblemListener from "../problem/ProblemListener";
import FinalInterface from "../module/FinalInterface";
import NotImplementedError from "../error/NotImplementedError";
import VariableIdentifier from "../builder/VariableIdentifier";
import INamed from "./INamed";
import InterfaceType from "../types/InterfaceType";
import FunctionDefinition from "../expression/FunctionDefinition";
import IExpression from "../expression/IExpression";
import NamedFunction from "./NamedFunction";
import NamedInstance from "./NamedInstance";
import UnknownType from "../types/UnknownType";
import InferredInterface from "../module/InferredInterface";
import DraftInterface from "../module/DraftInterface";
import DeclaredInterface from "../module/DeclaredInterface";

export default abstract class Context {

    static newModuleContext(module: AiModule, listener: ProblemListener) {
        const context = new ModuleContext(module);
        context.globals = context;
        context.calling = null;
        context.parent = null;
        context.problemListener = listener;
        return context;
    }

    globals: ModuleContext;
    calling: Context | null;
    parent: Context | null;
    problemListener: ProblemListener;

    newLocalContext(): LocalContext {
        const local = new LocalContext();
        local.globals = this.globals;
        local.calling = this;
        local.parent = null;
        local.problemListener = this.problemListener;
        return local;

    }

    newChildContext(): LocalContext {
        return this.makeChildContext(new LocalContext());
    }

    newInterfaceContext(type: InterfaceType): InterfaceContext {
        return this.makeChildContext(new InterfaceContext(type));
    }

    newObjectContext(): ObjectContext {
        return this.makeChildContext(new ObjectContext());
    }

    newUnknownTypeContext(): UnknownTypeContext {
        return this.makeChildContext(new UnknownTypeContext());
    }

    makeChildContext<T extends Context>(child: T): T {
        child.globals = this.globals;
        child.calling = this.calling;
        child.parent = this;
        child.problemListener = this.problemListener;
        return child;
    }

    registerInterface(typeId: TypeIdentifier, interface_: IInterface): void {
        throw new UnsupportedOperationError("Should never get there!");
    }

    getRegisteredInterface(typeId: TypeIdentifier): IInterface | null  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    registerMemberExpression(member: VariableIdentifier, expression: IExpression): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    assignMemberExpression(member: VariableIdentifier, expression: IExpression): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    getMemberContext(member: VariableIdentifier): Context  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    registerMemberFunction(member: VariableIdentifier, definition: FunctionDefinition): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    registerMemberField(named: INamed): void  {
        throw new UnsupportedOperationError("Should never get there!");
    }

    getMember(member: VariableIdentifier): INamed {
        throw new UnsupportedOperationError("Should never get there!");
    }

}

class ObjectContext extends Context {

    members = new Map<string, INamed>();

    registerMemberExpression(member: VariableIdentifier, expression: IExpression) {
        if (this.members.has(member.value))
            this.problemListener.reportError(member.fragment, "Duplicate name '" + member.value + "'");
        if(expression instanceof FunctionDefinition)
            this.registerMemberFunction(member, expression);
        else
            this.registerMemberField(new NamedInstance(member, expression.check(this)));
    }

    assignMemberExpression(member: VariableIdentifier, expression: IExpression) {
        if(expression instanceof FunctionDefinition)
            this.registerMemberFunction(member, expression);
        else
            this.registerMemberField(new NamedInstance(member, expression.check(this)));
    }

    getMemberContext(member: VariableIdentifier): Context  {
        if(this.members.has(member.value)) {
            const type = this.members.get(member.value).type;
            return type.newContext(this);
        } else if(this.parent)
            return this.parent.getMemberContext(member);
        else if(this.globals)
            return this.globals.getMemberContext(member);
        else
            return null;
    }

    getMember(member: VariableIdentifier): INamed {
        return this.members.get(member.value) || null;
    }

    registerMemberField(named: INamed) {
        this.members.set(named.id.value, named);
    }

}

class UnknownTypeContext extends ObjectContext {

    getMember(member: VariableIdentifier): INamed {
        let named = super.getMember(member);
        if(named == null) {
            this.registerMemberField(new NamedInstance(member, UnknownType.instance));
            named = super.getMember(member);
        }
        return named;
    }

}

class LocalContext extends ObjectContext {
    // simply treat members as locals

}

class ModuleContext extends LocalContext {

    module: AiModule;

    constructor(module: AiModule) {
        super();
        this.module = module;
    }

    registerInterface(typeId: TypeIdentifier, interface_: IInterface) {
        let existing = this.module.interfaces.get(typeId.value);
        if(existing)
            existing = existing.checkDuplicate(this, interface_);
        interface_ = existing ? existing : interface_;
        this.module.interfaces.set(typeId.value, interface_);
    }

    getRegisteredInterface(typeId: TypeIdentifier): IInterface | null {
        return this.module.interfaces.get(typeId.value) || null;
    }

    getMemberContext(member: VariableIdentifier): Context {
        if(this.members.has(member.value)) {
            const type = this.members.get(member.value).type;
            return type.newContext(this);
            /* else if(type instanceof FunctionType)
                return Context.newFunctionContext(this, type);
            else if(type instanceof NativeType)
                return Context.newNativeContext(this, type); */
        } else
            return super.getMemberContext(member);
    }
}

class InterfaceContext extends ObjectContext {

    private static isFactory(member: VariableIdentifier) {
        return "create" == member.value;
    }

    type: InterfaceType;

    constructor(type: InterfaceType) {
        super();
        this.type = type;
    }

    registerMemberExpression(member: VariableIdentifier, expression: IExpression) {
        if(expression instanceof FunctionDefinition) {
            if(InterfaceContext.isFactory(member)) {
                expression.type.returnType = this.type;
                this.type.interface_.registerFactory(expression);
            } else
                this.type.interface_.registerStaticFunction(member, expression);
        } else
            this.type.interface_.registerStaticField(member, expression.check(this));
    }

    assignMemberExpression(member: VariableIdentifier, expression: IExpression) {
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
