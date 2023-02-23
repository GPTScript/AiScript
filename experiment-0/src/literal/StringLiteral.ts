import LiteralBase from "./LiteralBase";
export default class StringLiteral extends LiteralBase<string> {

    constructor(text: string) {
        super(text, text.substring(1, text.length - 1));
    }

}
