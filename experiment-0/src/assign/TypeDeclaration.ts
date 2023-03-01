import AssignableBase from "./AssignableBase";
import TypeIdentifier from "../builder/TypeIdentifier";
import Context from "../analyzer/Context";
import IType from "../types/IType";
import NotImplementedError from "../error/NotImplementedError";
import IExpression from "../expression/IExpression";
import ObjectType from "../types/ObjectType";
import ObjectLiteral from "../literal/ObjectLiteral";
import InferredInterface from "../module/InferredInterface";
import IInterface from "../module/IInterface";

export default class TypeDeclaration extends AssignableBase {

    typeId: TypeIdentifier;

    constructor(typeId: TypeIdentifier) {
        super();
        this.typeId = typeId;
    }

    register(context: Context, expression: IExpression): void {
        let interface_: IInterface = null;
        const type = expression.check(context);
        if(type == ObjectType.instance) {
            if(ObjectLiteral.EMPTY_OBJECT.equals(expression))
                interface_ = new InferredInterface(this.typeId);
        }
        if(interface_)
            context.registerInterface(this.typeId, interface_);
        else
            throw new NotImplementedError();
    }

    check(context: Context): IType {
        throw new NotImplementedError();
    }

}
