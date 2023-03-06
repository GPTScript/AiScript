import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import IAssignable from "../assign/IAssignable";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";

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

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        this.assignable.wireDependencies(context, producers);
        this.expression.wireDependencies(context, producers);
        this.expression.addListener(this.assignable.getListener(context));
    }

}
