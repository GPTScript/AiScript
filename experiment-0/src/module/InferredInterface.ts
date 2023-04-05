import InterfaceBase from "./InterfaceBase";
import HashCode from "hashcode.ts";
import TypeSet from "../types/TypeSet";

export default class InferredInterface extends InterfaceBase {

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
        return " * $version draft " + this.hashCode().toString(16);
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
        return HashCode.array(values as []);
    }

}
