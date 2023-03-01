import LiteralBase from "./LiteralBase";
import StringType from "../types/StringType";
export default class StringLiteral extends LiteralBase<string> {

    constructor(text: string) {
        super(text, text.substring(1, text.length - 1), StringType.instance);
    }

}
