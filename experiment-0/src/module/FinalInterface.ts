import DeclaredInterface from "./DeclaredInterface";
import Context from "../analyzer/Context";
import FunctionDefinition from "../expression/FunctionDefinition";
import NotImplementedError from "../error/NotImplementedError";

export default abstract class FinalInterface extends DeclaredInterface {

    inferTypesFromFactory(context: Context, body: FunctionDefinition): void {
        throw new NotImplementedError();
    }

}
