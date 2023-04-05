import IComment from "./IComment";

export default class TextComment implements IComment {

    text: string;

    constructor(text: string) {
        this.text = text;
    }
}
