import ExpressionBase from "../expression/ExpressionBase";
import ILiteralExpression from "./ILiteralExpression";
import IType from "../types/IType";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";

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

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        // since a literal has a known type, they are type producers
        // we infer types backwards from them
        producers.push(this);
    }

    notifyListeners(): boolean {
        return this.listeners.notify(this.type);
    }
}
