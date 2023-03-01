import ExpressionBase from "./ExpressionBase";
import IStatement from "../statement/IStatement";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import FunctionType from "../types/FunctionType";
import UnknownType from "../types/UnknownType";
import NamedInstance from "../analyzer/NamedInstance";

export default class FunctionDefinition extends ExpressionBase {

    parameters: VariableIdentifier[];
    statements: IStatement[];
    type: FunctionType;

    constructor(parameters: VariableIdentifier[], statements: IStatement[]) {
        super();
        this.parameters = parameters;
        this.statements = statements;
    }

    check(context: Context): IType {
        if(!this.type) {
            const params = this.parameters.map(id => new NamedInstance(id, UnknownType.instance));
            this.type = new FunctionType(params, UnknownType.instance);
        }
        return this.type;
    }

}
