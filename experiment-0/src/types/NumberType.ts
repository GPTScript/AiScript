import NativeType from "./NativeType";

export default class NumberType extends NativeType {

    static instance = new NumberType();

    private constructor() {
        super();
    }

    get typename(): string {
        return "Number";
    }

}
