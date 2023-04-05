import Context from "../analyzer/Context";

export default interface IType {
    get typename(): string;
    equals(other: IType): boolean;
    newContext(parent: Context): Context;
}
