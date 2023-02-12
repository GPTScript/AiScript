import Identifier from "../builder/Identifier";
import IExpression from "../expression/IExpression";
import LiteralBase from "./LiteralBase";
import KeyValuePair from "../utils/KeyValuePair";

export default class ObjectLiteral extends LiteralBase<Map<Identifier, IExpression>> {

    constructor(text: string, entries: KeyValuePair<Identifier, IExpression>[]) {
        super(text, new Map<Identifier, IExpression>(entries.map(e => e.asArray())));
    }

}
