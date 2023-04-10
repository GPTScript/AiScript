import assert from "assert";
import InterfaceBuilder from "../../src/builder/InterfaceBuilder";

it('parses empty comment',  () => {
    const intf = InterfaceBuilder.parse_interface("samples/aidoc/empty_comment.js");
    assert.ok(!intf);
});

it('parses simple comment',  () => {
    const intf = InterfaceBuilder.parse_interface("samples/aidoc/simple_comment.js");
    assert.ok(!intf);
});

it('parses interface comment',  () => {
    const intf = InterfaceBuilder.parse_interface("samples/aidoc/interface_comment.js");
    assert.ok(intf);
    assert.equal(intf.name, "Person");
    assert.equal(intf.instanceFields.length, 4);
});

