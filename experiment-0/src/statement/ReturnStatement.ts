import StatementBase from "./StatementBase";
import IExpression from "../expression/IExpression";

export default class ReturnStatement extends StatementBase {

    expression: IExpression;

    constructor(expression: IExpression) {
        super();
        this.expression = expression;
    }
}
