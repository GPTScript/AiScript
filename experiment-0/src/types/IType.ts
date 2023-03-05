import Context from "../analyzer/Context";

export default interface IType {
    newContext(parent: Context): Context;
}
