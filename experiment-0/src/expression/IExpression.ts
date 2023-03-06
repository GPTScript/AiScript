import IType from "../types/IType";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";

export default interface IExpression extends ITypeProducer {

    wireDependencies(context: Context, producers: ITypeProducer[]): void
    check(context: Context): IType;

}
