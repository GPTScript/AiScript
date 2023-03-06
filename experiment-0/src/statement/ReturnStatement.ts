import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";

export default class ReturnStatement extends StatementBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    register(context: Context): void {
        // nothing to do
    }

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        this.expression.wireDependencies(context, producers);
    }

}
