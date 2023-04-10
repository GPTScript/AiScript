import AiModule from "../module/AiModule";
import Context from "./Context";
import ProblemListener from "../problem/ProblemListener";
import ITypeProducer from "../graph/ITypeProducer";
import {Token} from "antlr4";
import InterfaceBuilder from "../builder/InterfaceBuilder";

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

    analyze(): void {
        const producers: ITypeProducer[] = [] ;
        this.module.comments.forEach(token => this.analyzeComment(token));
        this.module.statements.forEach(stmt => stmt.register(this.context));
        this.module.statements.forEach(stmt => stmt.wireDependencies(this.context, producers));
        // repeatedly apply changes until a stable state is reached
        for(;;) {
            const changed = producers.map(prod => prod.notifyListeners()).reduce((prev, current) => prev || current, false);
            if(!changed)
                break;
        }

    }

    analyzeComment(token: Token): void {
        const intf = InterfaceBuilder.parse_interface(token.text);
        if(intf)
            this.module.interfaces.set(intf.name, intf);
    }
}
