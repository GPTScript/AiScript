import ExpressionBase from "../expression/ExpressionBase";
import ILiteralExpression from "./ILiteralExpression";

export default abstract class LiteralBase<T> extends ExpressionBase implements ILiteralExpression {

    text: string;
    value: T;

    constructor(text: string, value: T) {
        super();
        this.text = text;
        this.value = value;
    }

}
