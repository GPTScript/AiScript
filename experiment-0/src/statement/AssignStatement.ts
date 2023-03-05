import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import IAssignable from "../assign/IAssignable";
import Context from "../analyzer/Context";
import IType from "../types/IType";

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

    inferTypes(context: Context): IType {
        this.assignable.inferTypes(context, this.expression);
        return null;
    }

}
