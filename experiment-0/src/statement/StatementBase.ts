import CodeFragment from "../builder/CodeFragment";
import IStatement from "./IStatement";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";

export default abstract class StatementBase extends CodeFragment implements IStatement {

    abstract register(context: Context): void;
    abstract wireDependencies(context: Context, producers: ITypeProducer[]): void;

}
