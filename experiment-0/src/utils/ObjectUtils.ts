import UnsupportedOperationError from "../error/UnsupportedOperationError";

export function equalObjects(a: any, b: any) {
    if(a == b)
        return true;
    else if (a.equals)
        return a.equals(b);
    else if (b.equals)
        return b.equals(a);
    else if(Array.isArray(a) && Array.isArray(b))
        return equalArrays(a, b);
    else
        throw new UnsupportedOperationError();
}

function equalArrays(a: any[], b: any[]) {
    if(a.length != b.length)
        return false;
    for(let i = 0; i < a.length; i++) {
        if(!equalObjects(a[i], b[i]))
            return false;
    }
    return true;
}
