import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import IAssignable from "../assign/IAssignable";
import Context from "../analyzer/Context";
import NotImplementedError from "../error/NotImplementedError";

export default class AssignStatement extends StatementBase {

    assignable: IAssignable;
    expression: IExpression;

    constructor(assignable: IAssignable, expression: IExpression) {
        super();
        this.assignable = assignable;
        this.expression = expression;
    }

    register(context: Context): void {
        this.assignable.register(context, this.expression);
    }

    inferTypes(context: Context): void {
        throw new NotImplementedError();
    }

}
