import NativeType from "./NativeType";
import Context from "../analyzer/Context";

export default class ObjectType extends NativeType {

    static instance = new ObjectType();

    private constructor() {
        super();
    }

    newContext(parent: Context): Context {
        return parent.newObjectContext();
    }

}
