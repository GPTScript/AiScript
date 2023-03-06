import Context from "../analyzer/Context";
import ITypeProducer from "../graph/IProducer";

export default interface IStatement {

    register(context: Context): void;
    wireDependencies(context: Context, producers: ITypeProducer[]): void;
}
