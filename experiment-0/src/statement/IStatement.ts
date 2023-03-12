import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";
import ITypeListener from "../graph/ITypeListener";

export default interface IStatement {

    canReturn(): boolean;
    register(context: Context): void;
    wireDependencies(context: Context, producers: ITypeProducer[]): void;
    addReturnTypeListener(listener: ITypeListener): void;
}
