import TypeBase from "./TypeBase";

export default class UnknownType extends TypeBase {

    static instance = new UnknownType();

    private constructor() {
        super();
    }

}
