import IComment from "./IComment";
import IVersion from "./IVersion";

export default class VersionComment implements IComment {

    version: IVersion;

    constructor(version: IVersion) {
        this.version = version;
    }
}
