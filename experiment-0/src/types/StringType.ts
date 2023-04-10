import NativeType from "./NativeType";

export default class StringType extends NativeType {

    static instance = new StringType();

    private constructor() {
        super();
    }

    get typename(): string {
        return "String";
    }

}
