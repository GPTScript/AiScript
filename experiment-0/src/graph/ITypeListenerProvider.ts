import ITypeListener from "./ITypeListener";
import Context from "../analyzer/Context";

export default interface ITypeListenerProvider {
    getListener(context: Context): ITypeListener;
}
