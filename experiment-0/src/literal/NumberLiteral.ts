import LiteralBase from "./LiteralBase";
import NumberType from "../types/NumberType";

export default class NumberLiteral extends LiteralBase<number> {

    constructor(text: string) {
        super(text, parseFloat(text), NumberType.instance);
    }

}
