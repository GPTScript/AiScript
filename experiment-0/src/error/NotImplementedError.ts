export default class NotImplementedError extends Error {

    constructor(message?: string) {
        super(message || "Not implemented yet!");
    }
}
