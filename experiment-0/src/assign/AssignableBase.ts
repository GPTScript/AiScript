import CodeFragment from "../builder/CodeFragment";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import IAssignable from "./IAssignable";
import ITypeListener from "../graph/ITypeListener";
import ITypeProducer from "../graph/ITypeProducer";

export default abstract class AssignableBase extends CodeFragment implements IAssignable {

    abstract register(context: Context, expression: IExpression): void;
    abstract wireDependencies(context: Context, producers: ITypeProducer[]): void;
    abstract getListener(context: Context): ITypeListener;


};
