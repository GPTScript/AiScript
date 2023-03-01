import AiModule from "../module/AiModule";
import Interface from "../module/Interface";

export default class Analyzer {

    module: AiModule;
    interfaces = new Map<string, Interface>();

    constructor(module: AiModule) {
        this.module = module;
    }


    analyze() {
        
    }
}
