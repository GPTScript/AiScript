import IStatement from "../statement/IStatement";
import {Token} from "antlr4";
import IInterface from "./IInterface";

export default class AiModule {

    statements: IStatement[];
    comments: Token[];
    interfaces = new Map<string, IInterface>();

    constructor(statements: IStatement[]) {
        this.statements = statements;
    }

}
