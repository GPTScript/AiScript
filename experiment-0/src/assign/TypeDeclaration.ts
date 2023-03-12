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
import InterfaceType from "../types/InterfaceType";
import ITypeListener from "../graph/ITypeListener";
import ITypeProducer from "../graph/ITypeProducer";

export default class TypeDeclaration extends AssignableBase {

    typeId: TypeIdentifier;

    constructor(typeId: TypeIdentifier) {
        super();
        this.typeId = typeId;
    }

    register(context: Context, expression: IExpression): void {
        let interface_: IInterface = null;
        const type = expression.check(context);
        if(type instanceof ObjectType && type.fields.length == 0)
            interface_ = new InferredInterface(this.typeId);
        if(interface_)
            context.registerInterface(this.typeId, interface_);
        else
            throw new NotImplementedError();
    }

    wireDependencies(context: Context, producers: ITypeProducer[]) {
        // nothing to do
    }

    getListener(context: Context): ITypeListener {
        return (type: IType) => {
            if(type instanceof InterfaceType) {
                const current = context.getRegisteredInterface(this.typeId);
                // TODO if(!type.interface_.equals(current)) {
                    context.registerInterface(this.typeId, type.interface_);
                    return true;
                // }
            }
            return false;
        }
    }

}
