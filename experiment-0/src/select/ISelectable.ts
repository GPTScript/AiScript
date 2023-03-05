import Context from "../analyzer/Context";

export default interface ISelectable {

    loadContext(context: Context): Context;
}
