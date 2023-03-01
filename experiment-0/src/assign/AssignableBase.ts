import CodeFragment from "../builder/CodeFragment";
import IExpression from "../expression/IExpression";
import IType from "../types/IType";
import Context from "../analyzer/Context";
import IAssignable from "./IAssignable";

export default abstract class AssignableBase extends CodeFragment implements IExpression, IAssignable {

    abstract register(context: Context, expression: IExpression): void;
    abstract check(context: Context): IType;

};
