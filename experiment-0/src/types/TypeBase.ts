import IType from "./IType";
import UnsupportedOperationError from "../error/UnsupportedOperationError";
import Context from "../analyzer/Context";

export default abstract class TypeBase implements IType {

    newContext(parent: Context): Context {
        throw new UnsupportedOperationError();
    }
    
}
