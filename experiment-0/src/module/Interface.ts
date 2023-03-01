import CodeFragment from "../builder/CodeFragment";
import Documentation from "../documentation/Documentation";
import TypeIdentifier from "../builder/TypeIdentifier";

export default class Interface extends CodeFragment {

    static fromDocumentation(doc: Documentation): Interface {
        return null;
    }

    name: TypeIdentifier;
    fields: Field[];
}
