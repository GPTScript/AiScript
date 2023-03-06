import INamed from "./INamed";
import IType from "../types/IType";
import VariableIdentifier from "../builder/VariableIdentifier";
import Context from "./Context";
import ITypeProducer from "../graph/ITypeProducer";
import ProducerListeners from "../graph/ProducerListeners";
import ITypeListener from "../graph/ITypeListener";

export default class NamedInstance implements INamed, ITypeProducer {

    id: VariableIdentifier;
    type: IType;
    listeners = new ProducerListeners();

    constructor(id: VariableIdentifier, type: IType) {
        this.id = id;
        this.type = type;
    }

    addListener(listener: ITypeListener) {
        this.listeners.push(listener);
    }

    notifyListeners(): boolean {
        return this.listeners.notify(this.type);
    }

    getListener(context: Context) {
        return (type: IType) => {
            if(type.equals(this.type))
                return false;
            this.type = type;
            this.notifyListeners();
            return true;
        }
    }

}
