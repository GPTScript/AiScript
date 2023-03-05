import ExpressionBase from "./ExpressionBase";
import IStatement from "../statement/IStatement";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import FunctionType from "../types/FunctionType";
import UnknownType from "../types/UnknownType";
import NamedInstance from "../analyzer/NamedInstance";
import NotImplementedError from "../error/NotImplementedError";

export default class FunctionDefinition extends ExpressionBase {

    parameters: VariableIdentifier[];
    statements: IStatement[];
    _type: FunctionType;

    constructor(parameters: VariableIdentifier[], statements: IStatement[]) {
        super();
        this.parameters = parameters;
        this.statements = statements;
    }

    get type(): FunctionType {
        if(!this._type) {
            const params = this.parameters.map(id => new NamedInstance(id, UnknownType.instance));
            this._type = new FunctionType(params, UnknownType.instance);
        }
        return this._type;
    }

    check(context: Context): IType {
        return this.type;
    }

    inferTypes(context: Context): IType {
        throw new NotImplementedError();
    }

    registerParameters(context: Context): void {
        this.type.parameters.forEach(param => context.registerField(param.id, param.type));
    }
}
