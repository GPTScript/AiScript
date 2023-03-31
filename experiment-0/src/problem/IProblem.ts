import Fragment from "../builder/Fragment";
import ProblemType from "./ProblemType";

export default interface IProblem {
    fragment: Fragment;
    type: ProblemType;
    message: string;
    relatedFragments: Fragment[] | null;
}
