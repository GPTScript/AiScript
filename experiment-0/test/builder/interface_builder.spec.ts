import assert from "assert";
import InterfaceBuilder from "../../src/builder/InterfaceBuilder";

it('parses empty comment',  () => {
    const intf = InterfaceBuilder.parse_interface("samples/aidoc/empty_comment.js");
    assert.ok(!intf);
});
