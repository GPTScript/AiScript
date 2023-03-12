import ExpressionBase from "./ExpressionBase";
import IStatement from "../statement/IStatement";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import FunctionType from "../types/FunctionType";
import UnknownType from "../types/UnknownType";
import NamedInstance from "../analyzer/NamedInstance";
import ITypeProducer from "../graph/ITypeProducer";

export default class FunctionDefinition extends ExpressionBase {

    parameters: VariableIdentifier[];
    statements: IStatement[];
    _typedParameters: NamedInstance[];
    _type: FunctionType;

    constructor(parameters: VariableIdentifier[], statements: IStatement[]) {
        super();
        this.parameters = parameters;
        this.statements = statements;
    }

    get type(): FunctionType {
        if(!this._type) {
            this._typedParameters = this.parameters.map(id => new NamedInstance(id, UnknownType.instance));
            this._type = new FunctionType(this._typedParameters, UnknownType.instance);
        }
        return this._type;
    }

    check(context: Context): IType {
        return this.type;
    }

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        const local = context.newLocalContext();
        this.registerParameters(local);
        this.statements.forEach(stmt => stmt.register(local));
        this.statements.forEach(stmt => {
            stmt.wireDependencies(local, producers);
            if(stmt.canReturn())
                stmt.addReturnTypeListener((type: IType) => {
                    if(type.equals(this.type.returnType))
                        return false;
                    this.type.returnType = type;
                    this.notifyListeners();
                    return true;
                })
        });
    }

    notifyListeners(): boolean {
        return this.listeners.notify(this.type);
    }

    registerParameters(context: Context): void {
        // register the pre-created NamedInstances to which expressions are listening
        this.type.parameters.forEach((param, idx) => context.registerMemberField(this._typedParameters[idx]));
    }
}
