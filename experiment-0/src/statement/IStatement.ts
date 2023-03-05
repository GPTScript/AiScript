import Context from "../analyzer/Context";
import IType from "../types/IType";

export default interface IStatement {

    register(context: Context): void;
    inferTypes(context: Context): IType;
}
