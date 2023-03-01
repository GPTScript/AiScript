import TypeBase from "./TypeBase";
import NamedInstance from "../analyzer/NamedInstance";
import IType from "./IType";

export default class FunctionType extends TypeBase {

    parameters: NamedInstance[];
    returnType: IType;

    constructor(parameters: NamedInstance[], returnType: IType) {
        super();
        this.parameters = parameters;
        this.returnType = returnType;
    }


}
