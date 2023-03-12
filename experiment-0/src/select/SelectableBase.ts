import CodeFragment from "../builder/CodeFragment";
import ISelectable from "./ISelectable";
import Context from "../analyzer/Context";
import ITypeListener from "../graph/ITypeListener";
import VariableIdentifier from "../builder/VariableIdentifier";

export default abstract class SelectableBase extends CodeFragment implements ISelectable {

    abstract loadContext(context: Context): Context;
    abstract addListener(context: Context, listener: ITypeListener): void;
    abstract getMemberListener(context: Context, memberId: VariableIdentifier): ITypeListener;
};
