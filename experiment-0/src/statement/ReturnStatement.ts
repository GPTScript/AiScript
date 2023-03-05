import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import NotImplementedError from "../error/NotImplementedError";
import IType from "../types/IType";

export default class ReturnStatement extends StatementBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }

    register(context: Context): void {
        // nothing to do
    }

    inferTypes(context: Context): IType {
        throw new NotImplementedError();
    }

}
