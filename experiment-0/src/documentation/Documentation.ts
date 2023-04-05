import IComment from "./IComment";
import DeclaredInterface from "../module/DeclaredInterface";
import FinalVersion from "./FinalVersion";
import FinalInterface from "../module/FinalInterface";
import DraftVersion from "./DraftVersion";
import DraftInterface from "../module/DraftInterface";
import InterfaceTypeComment from "./InterfaceTypeComment";
import TypeIdentifier from "../builder/TypeIdentifier";
import IVersion from "./IVersion";
import VersionComment from "./VersionComment";
import PropertyTypeComment from "./PropertyTypeComment";

export default class Documentation {

    comments: IComment[];

    constructor(comments: IComment[]) {
        this.comments = comments || [];
    }

    readInterface(): DeclaredInterface | null {
        let intf: DeclaredInterface = null;
        const id = this.findInterfaceId();
        if(id) {
            const version = this.findVersion();
            if (version instanceof FinalVersion)
                intf = new FinalInterface(id);
            else if (version instanceof DraftVersion)
                intf = new DraftInterface(id);
            if (intf) {
                const properties = this.findProperties();
                intf.instanceFields = properties.map(prop => prop.toObjectField());
            }
        }
        return intf;
    }


    private findInterfaceId(): TypeIdentifier {
        const comment = this.comments.find(c => c instanceof InterfaceTypeComment);
        return comment instanceof InterfaceTypeComment ? comment.id : null;
    }

    private findVersion(): IVersion {
        const comment = this.comments.find(c => c instanceof VersionComment);
        return comment instanceof VersionComment ? comment.version : null;
    }

    private findProperties(): PropertyTypeComment[] {
        return this.comments.filter(c => c instanceof PropertyTypeComment) as PropertyTypeComment[];
    }

}
