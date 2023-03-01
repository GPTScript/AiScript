import Context from "../analyzer/Context";

export default interface IStatement {

    register(context: Context): void;
    inferTypes(context: Context): void;
}
