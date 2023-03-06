import ITypeListener from "./ITypeListener";
import IType from "../types/IType";

export default class ProducerListeners extends Array<ITypeListener> {

    notify(type: IType): boolean {
        return this.map(fn => fn(type)).reduce((prev, current) => prev || current, false);
    }
}
