import Fragment from "../builder/Fragment";

export default interface IProblem {
    fragment: Fragment;
    message: string;
    relatedFragments: Fragment[] | null;
}
