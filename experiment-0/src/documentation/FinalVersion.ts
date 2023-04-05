import IVersion from "./IVersion";

export default class FinalVersion implements IVersion {

    semanticVersion: string;

    constructor(semanticVersion: string) {
        this.semanticVersion = semanticVersion;
    }
}
