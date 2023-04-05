import TypeBase from "./TypeBase";
import IType from "./IType";
import IExpression from "../expression/IExpression";
import Context from "../analyzer/Context";
import {equalObjects} from "../utils/ObjectUtils";
import NamedInstance from "../analyzer/NamedInstance";

export default class FunctionType extends TypeBase {

    parameters: NamedInstance[];
    returnType: IType;

    constructor(parameters: NamedInstance[], returnType: IType) {
        super();
        this.parameters = parameters;
        this.returnType = returnType;
    }

    get typename(): string {
        return this.toString(); // TODO
    }

    equals(other: IType): boolean {
        return other instanceof FunctionType
            && this.returnType.equals(other.returnType)
            && equalObjects(this.parameters, other.parameters);
    }

    checkValidArguments(context: Context, argumentsList: IExpression[]) {
        // TODO
    }
}
