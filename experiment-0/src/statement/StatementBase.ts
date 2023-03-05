import CodeFragment from "../builder/CodeFragment";
import IStatement from "./IStatement";
import Context from "../analyzer/Context";
import IType from "../types/IType";

export default abstract class StatementBase extends CodeFragment implements IStatement {

    abstract register(context: Context): void;
    abstract inferTypes(context: Context): IType;

}
