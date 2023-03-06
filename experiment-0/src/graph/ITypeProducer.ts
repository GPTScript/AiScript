import ITypeListener from "./ITypeListener";

export default interface ITypeProducer {
    addListener(listener: ITypeListener): void;
    notifyListeners(): boolean;
}
