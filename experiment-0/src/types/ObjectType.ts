import NativeType from "./NativeType";

export default class ObjectType extends NativeType {

    static instance = new ObjectType();

    private constructor() {
        super();
    }

}
