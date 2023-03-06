import CodeFragment from "../builder/CodeFragment";
import IExpression from "./IExpression";
import IType from "../types/IType";
import Context from "../analyzer/Context";
import ProducerListeners from "../graph/ProducerListeners";
import ITypeListener from "../graph/ITypeListener";
import ITypeProducer from "../graph/ITypeProducer";

export default abstract class ExpressionBase extends CodeFragment implements IExpression {

    listeners = new ProducerListeners();

    abstract check(context: Context): IType;
    abstract wireDependencies(context: Context, producers: ITypeProducer[]): void;
    abstract notifyListeners(): boolean;

    addListener(listener: ITypeListener): void {
        this.listeners.push(listener);
    }



};
