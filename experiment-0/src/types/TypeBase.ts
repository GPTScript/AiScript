import IType from "./IType";
import UnsupportedOperationError from "../error/UnsupportedOperationError";
import Context from "../analyzer/Context";

export default abstract class TypeBase implements IType {

    abstract get typename(): string;

    toString(): string {
        return this.typename;
    }

    equals(other: IType): boolean {
        return other==this;
    }

    newContext(parent: Context): Context {
        throw new UnsupportedOperationError();
    }


}
