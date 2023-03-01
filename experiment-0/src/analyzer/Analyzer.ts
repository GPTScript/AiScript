import AiModule from "../module/AiModule";
import Context from "./Context";
import ProblemListener from "../problem/ProblemListener";

export default class Analyzer {

    module: AiModule;
    context: Context;

    constructor(module: AiModule, listener: ProblemListener) {
        this.module = module;
        this.context = Context.newModuleContext(module, listener);
    }

    get interfaces() {
        return this.module.interfaces;
    }

    analyze() {
        this.module.statements.forEach(stmt => stmt.register(this.context));
        this.module.statements.forEach(stmt => stmt.inferTypes(this.context));
    }
}
