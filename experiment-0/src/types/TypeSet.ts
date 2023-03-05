import IType from "./IType";
import UnsupportedOperationError from "../error/UnsupportedOperationError";
import Context from "../analyzer/Context";

export default class TypeSet extends Set<IType> implements IType {

    static EMPTY = new TypeSet();

    static singleton(type: IType): TypeSet {
        return new TypeSet([type]);
    }

    constructor(values?: readonly IType[] | null) {
        super(values);
    }

    newContext(parent: Context): Context {
        throw new UnsupportedOperationError();
    }
}
