import {Token} from "antlr4";
import Location from "./Location";

export default class Fragment {

    static fromTokens(path: string, start: Token, end: Token): Fragment {
        const section = new Fragment();
        section.path = path;
        section.startLocation = new Location(start);
        section.endLocation = new Location(end, true);
        section.isBreakpoint = false;
        return section;
    }

    path: string;
    startLocation: Location;
    endLocation: Location;
    isBreakpoint: boolean;

    toString(): string {
        return "line " + this.startLocation.line + " in " + this.path;
    }
}
