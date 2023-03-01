import CodeFragment from "../builder/CodeFragment";
import IStatement from "./IStatement";
import Context from "../analyzer/Context";

export default abstract class StatementBase extends CodeFragment implements IStatement {

    abstract register(context: Context): void;
    abstract inferTypes(context: Context): void;

}
