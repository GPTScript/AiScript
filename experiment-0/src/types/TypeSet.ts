import IType from "./IType";
import UnsupportedOperationError from "../error/UnsupportedOperationError";
import Context from "../analyzer/Context";
import NotImplementedError from "../error/NotImplementedError";

export default class TypeSet extends Set<IType> implements IType {

    static EMPTY = new TypeSet();

    static singleton(type: IType): TypeSet {
        return new TypeSet([type]);
    }

    constructor(values?: readonly IType[] | null) {
        super(values);
    }

    get typename(): string {
        throw new UnsupportedOperationError("Should never get there!");
    }

    toString(): string {
        return Array.from(this).map(t => t.typename).join(" | ");
    }

    equals(other: IType): boolean {
        throw new NotImplementedError();
    }

    newContext(parent: Context): Context {
        throw new UnsupportedOperationError();
    }

}
