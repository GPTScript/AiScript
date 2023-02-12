import CodeFragment from "./CodeFragment";

export default class Identifier extends CodeFragment {

    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }

    equals(other: any) {
        return this == other || (other instanceof Identifier && this.value == other.value);
    }

}
