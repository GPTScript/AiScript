import Context from "../analyzer/Context";

export default interface IType {
    equals(other: IType): boolean;
    newContext(parent: Context): Context;
}
