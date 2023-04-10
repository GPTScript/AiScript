import InterfaceBase from "./InterfaceBase";
import TypeSet from "../types/TypeSet";
import Hashcode from "../utils/Hashcode";
import Context from "../analyzer/Context";
import IInterface from "./IInterface";

export default class InferredInterface extends InterfaceBase {

    checkDuplicate(context: Context, other: IInterface): IInterface {
        if(other instanceof InferredInterface) {
            context.problemListener.reportError(other.id.fragment, "Type '" + other.id.value + "' is already declared", other.fragment);
            return this;
        } else {
            // TODO check field compatibility
            return other;
        }
    }

    generateDeclarationComment(): string {
        let lines = [
            "/**",
            this.generateInterfaceComment(),
            " *"
        ];
        lines = lines.concat(this.generatePropertyComments());
        lines = lines.concat( [
            " *",
            this.generateVersionComment(),
            " */\n"
        ]);
        return lines.join("\n");
    }

    private generateInterfaceComment(): string {
        return " * @" + this.name + " interface";
    }

    private generatePropertyComments(): string[] {
        return this.instanceFields.map(field => " * @" + field.id.value + " " + field.type.toString())
    }

    private generateVersionComment(): string {
        return " * $version draft " + Hashcode.toString(this.hashCode());
    }

    private hashCode(): number {
        const values = [this.name];
        this.instanceFields.forEach(field => {
            values.push(field.id.value);
            if(field.type instanceof TypeSet) {
                Array.from(field.type).forEach(type => values.push(field.type.typename));
            } else
                values.push(field.type.typename);
        })
        return Hashcode.array(values as []);
    }

}
