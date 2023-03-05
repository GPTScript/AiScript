import ExpressionBase from "../expression/ExpressionBase";
import ILiteralExpression from "./ILiteralExpression";
import IType from "../types/IType";
import Context from "../analyzer/Context";

export default abstract class LiteralBase<T> extends ExpressionBase implements ILiteralExpression {

    text: string;
    value: T;
    type: IType;

    constructor(text: string, value: T, type: IType) {
        super();
        this.text = text;
        this.value = value;
        this.type = type;
    }

    equals(other: any) {
        return other instanceof LiteralBase && other.text == this.text;
    }

    check(context: Context): IType {
        return this.type;
    }

    inferTypes(context: Context): IType {
        return this.type;
    }
}
