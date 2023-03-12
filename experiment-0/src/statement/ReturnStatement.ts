import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";
import ITypeListener from "../graph/ITypeListener";
import ProducerListeners from "../graph/ProducerListeners";
import IType from "../types/IType";

export default class ReturnStatement extends StatementBase {

    expression: IExpression;
    listeners = new ProducerListeners();

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    canReturn(): boolean {
        return true;
    }

    register(context: Context): void {
        // nothing to do
    }

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        this.expression.wireDependencies(context, producers);
        this.expression.addListener((type: IType)  => this.listeners.notify(type));
    }

    addReturnTypeListener(listener: ITypeListener) {
        this.listeners.push(listener);
    }
}
