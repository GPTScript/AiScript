import Hashcode from "../../src/utils/Hashcode";
import * as assert from "assert";

it("produces an 8-character code from a positive integer", () => {
    const value = Hashcode.toString(123);
    assert.equal(value.length, 8);
    assert.notEqual(value[0], '-');
})

it("produces an 8-character code from a negative integer", () => {
    const code = Hashcode.toString(-123);
    assert.equal(code.length, 8);
    assert.notEqual(code[0], '-');
})

it("performs round trip for a positive integer", () => {
    const value = Hashcode.toString(123);
    assert.equal(123, Hashcode.fromString(value));
})

it("performs round trip for a negative integer", () => {
    const value = Hashcode.toString(-123);
    assert.equal(-123, Hashcode.fromString(value));
})
