import Context from "../analyzer/Context";
import ITypeListener from "../graph/ITypeListener";
import VariableIdentifier from "../builder/VariableIdentifier";

export default interface ISelectable {

    loadContext(context: Context): Context;
    addListener(context: Context, listener: ITypeListener): void;
    getMemberListener(context: Context, memberId: VariableIdentifier): ITypeListener;
}
