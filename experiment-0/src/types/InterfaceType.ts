import TypeBase from "./TypeBase";
import IInterface from "../module/IInterface";
import Context from "../analyzer/Context";
import IType from "./IType";
import NotImplementedError from "../error/NotImplementedError";

export default class InterfaceType extends TypeBase {

    interface_: IInterface;

    constructor(interface_: IInterface) {
        super();
        this.interface_ = interface_;
    }

    equals(other: IType): boolean {
        throw new NotImplementedError();
    }

    newContext(parent: Context): Context {
        return parent.newInterfaceContext(this)
    }

}
