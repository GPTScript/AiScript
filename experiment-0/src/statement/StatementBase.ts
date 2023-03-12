import CodeFragment from "../builder/CodeFragment";
import IStatement from "./IStatement";
import Context from "../analyzer/Context";
import ITypeProducer from "../graph/ITypeProducer";
import ITypeListener from "../graph/ITypeListener";
import * as assert from "assert";

export default abstract class StatementBase extends CodeFragment implements IStatement {

    canReturn(): boolean {
        return false;
    }
    abstract register(context: Context): void;
    abstract wireDependencies(context: Context, producers: ITypeProducer[]): void;
    addReturnTypeListener(listener: ITypeListener): void {
        assert.ok(!this.canReturn());
    }

}
