import IType from "./IType";

export default class TypeSet extends Set<IType> implements IType {

    static EMPTY = new TypeSet();

    static singleton(type: IType): TypeSet {
        return new TypeSet([type]);
    }

    constructor(values?: readonly IType[] | null) {
        super(values);
    }
}
