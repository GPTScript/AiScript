import IType from "../types/IType";
import Context from "../analyzer/Context";

export default interface IExpression {

    check(context: Context): IType;
    inferTypes(context: Context): IType;

}
