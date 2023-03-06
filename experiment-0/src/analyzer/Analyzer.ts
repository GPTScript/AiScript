import AiModule from "../module/AiModule";
import Context from "./Context";
import ProblemListener from "../problem/ProblemListener";
import ITypeProducer from "../graph/ITypeProducer";

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
        const producers: ITypeProducer[] = [] ;
        this.module.statements.forEach(stmt => stmt.register(this.context));
        this.module.statements.forEach(stmt => stmt.wireDependencies(this.context, producers));
        // repeatedly apply changes until stable state is reached
        for(;;) {
            const changed = producers.map(prod => prod.notifyListeners()).reduce((prev, current) => prev || current, false);
            if(!changed)
                break;
        }

    }
}
