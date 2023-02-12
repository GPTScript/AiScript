const isNode =
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;
// use eval to fool webpack and mocha
const fs = isNode ? await eval("import('fs')") : null;

const _fileExists: (path: string) => boolean = fs ? fs.existsSync : (path: string) => false;

export function fileExists(path: string) {
    return _fileExists(path);
}
