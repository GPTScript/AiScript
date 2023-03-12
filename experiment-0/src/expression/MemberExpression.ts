import ExpressionBase from "./ExpressionBase";
import MemberSelector from "../select/MemberSelector";
import IType from "../types/IType";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";

export default class MemberExpression extends ExpressionBase {

    selector: MemberSelector;

    constructor(selector: MemberSelector) {
        super();
        this.selector = selector;
    }

    check(context: Context): IType {
        return this.selector.checkExpression(context);
    }

    wireDependencies(context: Context, producers: ITypeProducer[]): void {
        this.selector.addListener(context, (type: IType) => this.notifyListeners(type));
    }

    notifyListeners(type?: IType): boolean {
        return type ? this.listeners.notify(type) : false;
    }


}
