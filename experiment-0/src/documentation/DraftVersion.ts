import IVersion from "./IVersion";

export default class DraftVersion implements IVersion {

    hashCode: string;

    constructor(hashCode: string) {
        this.hashCode = hashCode;
    }
}
