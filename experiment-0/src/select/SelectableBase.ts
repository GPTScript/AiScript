import CodeFragment from "../builder/CodeFragment";
import ISelectable from "./ISelectable";
import Context from "../analyzer/Context";

export default abstract class SelectableBase extends CodeFragment implements ISelectable {

    abstract loadContext(context: Context): Context;

};
