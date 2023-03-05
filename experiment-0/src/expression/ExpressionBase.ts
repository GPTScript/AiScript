import CodeFragment from "../builder/CodeFragment";
import IExpression from "./IExpression";
import IType from "../types/IType";
import Context from "../analyzer/Context";

export default abstract class ExpressionBase extends CodeFragment implements IExpression {

    abstract check(context: Context): IType;
    abstract inferTypes(context: Context): IType;

};
