import ExpressionBase from "./ExpressionBase";
import IStatement from "../statement/IStatement";
import VariableIdentifier from "../builder/VariableIdentifier";

export default class FunctionDefinition extends ExpressionBase {

    parameters: VariableIdentifier[];
    statements: IStatement[];

    constructor(parameters: VariableIdentifier[], statements: IStatement[]) {
        super();
        this.parameters = parameters;
        this.statements = statements;
    }
}
