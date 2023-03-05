import Identifier from "../builder/Identifier";
import IExpression from "../expression/IExpression";
import LiteralBase from "./LiteralBase";
import KeyValuePair from "../utils/KeyValuePair";
import ObjectType from "../types/ObjectType";
import IType from "../types/IType";
import Context from "../analyzer/Context";

export default class ObjectLiteral extends LiteralBase<Map<Identifier, IExpression>> {

    static EMPTY_OBJECT = new ObjectLiteral("{}", []);

    constructor(text: string, entries: KeyValuePair<Identifier, IExpression>[]) {
        super(text, new Map<Identifier, IExpression>(entries.map(e => e.asArray())), ObjectType.instance);
    }

    inferTypes(context: Context): IType {
        return super.inferTypes(context); // TODO: use value types to enrich type
    }

}
