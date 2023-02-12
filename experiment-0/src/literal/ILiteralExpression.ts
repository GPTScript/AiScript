import IExpression from "../expression/IExpression";

export default interface ILiteralExpression extends IExpression {
    text: string;
}
