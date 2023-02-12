import SelectableBase from "./SelectableBase";
import ISelectable from "./ISelectable";

export default abstract class SelectableChild extends SelectableBase {

    parent: ISelectable;

    constructor(parent: ISelectable) {
        super();
        this.parent = parent;
    }
}
