import TypeBase from "./TypeBase";
import IInterface from "../module/IInterface";
import Context from "../analyzer/Context";

export default class InterfaceType extends TypeBase {

    interface_: IInterface;

    constructor(interface_: IInterface) {
        super();
        this.interface_ = interface_;
    }

    newContext(parent: Context): Context {
        return parent.newInterfaceContext(this)
    }

}
