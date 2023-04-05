import Identifier from "./Identifier";

export default class TypeIdentifier extends Identifier {

    optional: boolean;

    constructor(value: string, optional?: boolean) {
        super(value);
        this.optional = optional || false;
    }

}
