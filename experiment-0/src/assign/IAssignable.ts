import Context from "../analyzer/Context";
import IExpression from "../expression/IExpression";

export default interface IAssignable {

    register(context: Context, expression: IExpression): void;
    inferTypes(context: Context, expression: IExpression): void;
}
