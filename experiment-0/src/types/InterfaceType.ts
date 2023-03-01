import TypeBase from "./TypeBase";
import IInterface from "../module/IInterface";

export default class InterfaceType extends TypeBase {

    interface_: IInterface;

    constructor(interface_: IInterface) {
        super();
        this.interface_ = interface_;
    }


}
