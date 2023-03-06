import Identifier from "../builder/Identifier";
import IExpression from "../expression/IExpression";
import LiteralBase from "./LiteralBase";
import KeyValuePair from "../utils/KeyValuePair";
import ObjectType from "../types/ObjectType";
import Field from "../module/Field";
import UnknownType from "../types/UnknownType";
import Context from "../analyzer/Context";
import IType from "../types/IType";

export default class ObjectLiteral extends LiteralBase<Map<Identifier, IExpression>> {

    checked = false;

    constructor(text: string, entries: KeyValuePair<Identifier, IExpression>[]) {
        // we nned a context to check expressions, so for now let's assume UnknownType
        const fields = entries.map(e => new Field(e.key, UnknownType.instance));
        super(text, new Map<Identifier, IExpression>(entries.map(e => e.asArray())), new ObjectType(fields));
    }

    check(context: Context): IType {
        if(!this.checked) {
            const fields = Array.from(this.value.entries()).map( e => new Field(e[0], e[1].check(context)));
            this.type = new ObjectType(fields);
            this.checked = true;
        }
        return this.type;
    }

}
