import assert from "assert";
import ModuleBuilder from "../../src/builder/ModuleBuilder";
import AssignStatement from "../../src/statement/AssignStatement";
import ObjectLiteral from "../../src/literal/ObjectLiteral";
import TypeDeclaration from "../../src/assign/TypeDeclaration";
import AssignableMember from "../../src/assign/AssignableMember";
import SelectableType from "../../src/select/SelectableType";
import FunctionDefinition from "../../src/expression/FunctionDefinition";
import VariableDeclaration from "../../src/assign/VariableDeclaration";
import SelectableInstance from "../../src/select/SelectableInstance";
import MemberExpression from "../../src/expression/MemberExpression";
import ReturnStatement from "../../src/statement/ReturnStatement";
import InstanceExpression from "../../src/expression/InstanceExpression";
import FunctionCallExpression from "../../src/expression/FunctionCallExpression";

it('builds assign_empty_object_to_var_type',  () => {
    const stmt = ModuleBuilder.parse_statement("samples/assign_empty_object_to_var_type.js");
    assert.ok(stmt instanceof AssignStatement);
    assert.ok(stmt.assignable instanceof TypeDeclaration);
    assert.equal(stmt.assignable.typeId.value, "Person");
    assert.ok(stmt.expression instanceof ObjectLiteral);
    assert.deepEqual(stmt.expression.value, new Map());
});

it('builds factory_with_1_string_field',  () => {
    let stmt = ModuleBuilder.parse_statement("samples/factory_with_1_string_field.js");
    assert.ok(stmt instanceof AssignStatement);
    assert.ok(stmt.assignable instanceof AssignableMember);
    const selector = stmt.assignable.selector;
    assert.ok(selector.parent instanceof SelectableType);
    assert.equal(selector.parent.typeId.value, "Person");
    assert.equal(selector.member.value, "create");
    assert.ok(stmt.expression instanceof FunctionDefinition);
    assert.equal(stmt.expression.parameters.map(id => id.value).join(","), "opts");
    const stmts = stmt.expression.statements;
    assert.equal(stmts.length, 3);
    stmt = stmts[0];
    assert.ok(stmt instanceof AssignStatement);
    assert.ok(stmt.assignable instanceof VariableDeclaration);
    assert.equal(stmt.assignable.variableId.value, "p");
    assert.ok(stmt.expression instanceof ObjectLiteral);
    stmt = stmts[1];
    assert.ok(stmt instanceof AssignStatement);
    assert.ok(stmt.assignable instanceof AssignableMember);
    assert.ok(stmt.assignable.selector.parent instanceof SelectableInstance);
    assert.equal(stmt.assignable.selector.parent.variableId.value, "p");
    assert.equal(stmt.assignable.selector.member.value, "name");
    assert.ok(stmt.expression instanceof MemberExpression);
    assert.ok(stmt.expression.selector.parent instanceof SelectableInstance);
    assert.equal(stmt.expression.selector.parent.variableId.value, "opts");
    assert.equal(stmt.expression.selector.member.value, "name");
    stmt = stmts[2];
    assert.ok(stmt instanceof ReturnStatement);
    assert.ok(stmt.expression instanceof InstanceExpression);
    assert.equal(stmt.expression.variableId.value, "p");
});


it('builds factory_call_with_1_string_field',  () => {
    let stmt = ModuleBuilder.parse_statement("samples/factory_call_with_1_string_field.js");
    assert.ok(stmt instanceof AssignStatement);
    assert.ok(stmt.assignable instanceof VariableDeclaration);
    assert.equal(stmt.assignable.variableId.value, "p");
    assert.ok(stmt.expression instanceof FunctionCallExpression);
    assert.ok(stmt.expression.selector.parent instanceof SelectableType)
    assert.equal(stmt.expression.selector.parent.typeId.value, "Person");
    assert.equal(stmt.expression.selector.function_.value, "create");
    assert.equal(stmt.expression.argumentsList.length, 1);
    const exp = stmt.expression.argumentsList[0];
    assert.ok(exp instanceof ObjectLiteral);
});

it('parses single line comments',  () => {
    const module = ModuleBuilder.parse_module("samples/single_line_comments.js");
    assert.ok(module);
    assert.equal(module.statements.length, 1);
    assert.ok(module.statements[0] instanceof AssignStatement);
    assert.equal(module.comments.length, 0);
});

it('parses multi line comments',  () => {
    const module = ModuleBuilder.parse_module("samples/multi_line_comments.js");
    assert.ok(module);
    assert.equal(module.statements.length, 1);
    assert.ok(module.statements[0] instanceof AssignStatement);
    assert.equal(module.comments.length, 3);
});
