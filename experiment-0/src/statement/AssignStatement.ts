import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import IAssignable from "../assign/IAssignable";

export default class AssignStatement extends StatementBase {

    assignable: IAssignable;
    expression: IExpression;

    constructor(assignable: IAssignable, expression: IExpression) {
        super();
        this.assignable = assignable;
        this.expression = expression;
    }
}
