import IStatement from "../statement/IStatement";
import {Token} from "antlr4";

export default class AiModule {

    statements: IStatement[];
    comments: Token[];

    constructor(statements: IStatement[]) {
        this.statements = statements;
    }

}
