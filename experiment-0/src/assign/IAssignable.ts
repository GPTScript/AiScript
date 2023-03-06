import Context from "../analyzer/Context";
import IExpression from "../expression/IExpression";
import ITypeListenerProvider from "../graph/ITypeListenerProvider";
import ITypeProducer from "../graph/ITypeProducer";

export default interface IAssignable extends ITypeListenerProvider {

    register(context: Context, expression: IExpression): void;
    wireDependencies(context: Context, producers: ITypeProducer[]): void;
}
