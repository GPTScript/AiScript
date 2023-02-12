import assert from "assert";
import AiBuilder from "../../src/builder/AiBuilder";
import AssignStatement from "../../src/statement/AssignStatement";
import ObjectLiteral from "../../src/literal/ObjectLiteral";

it('parses an assign statement',  () => {
    const stmt = AiBuilder.parse_statement("samples/assign_empty_object_to_var_type.js");
    assert.ok(stmt instanceof AssignStatement);
    assert.ok(stmt.expression instanceof ObjectLiteral);
    assert.deepEqual(stmt.expression.value, new Map());
});
