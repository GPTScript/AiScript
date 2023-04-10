import ModuleBuilder from "../../src/builder/ModuleBuilder";
import Analyzer from "../../src/analyzer/Analyzer";
import IInterface from "../../src/module/IInterface";
import StringType from "../../src/types/StringType";
import ProblemListener from "../../src/problem/ProblemListener";
import * as assert from "assert";
import {InferredInterface} from "../../src";
import TypeIdentifier from "../../src/builder/TypeIdentifier";
import DraftInterface from "../../src/module/DraftInterface";

it('infers Parent member types',  () => {
    const listener = new ProblemListener();
    const module = ModuleBuilder.parse_module("samples/person_factory.js", listener);
    assert.equal(module.statements.length, 3);
    const analyser = new Analyzer(module, listener);
    analyser.analyze();
    assert.equal(analyser.interfaces.size, 1);
    const person: IInterface = analyser.interfaces.values().next().value;
    assert.equal(person.name, "Person");
    const fields = person.instanceFields;
    assert.equal(fields.length, 1);
    const name = fields[0];
    assert.equal(name.id.value, "name");
    assert.equal(name.type, StringType.instance);
});

it("registers interface comment", () => {
    const listener = new ProblemListener();
    const module = ModuleBuilder.parse_module("samples/aidoc/interface_comment.js", listener);
    const analyser = new Analyzer(module, listener);
    analyser.analyze();
    const person: IInterface = analyser.interfaces.values().next().value;
    assert.ok(person instanceof DraftInterface);
    assert.equal(person.name, "Person");
    assert.equal(person.instanceFields.length, 4);
});

it("generates interface comment", () => {
    const listener = new ProblemListener();
    const module = ModuleBuilder.parse_module("samples/person_factory.js", listener);
    const analyser = new Analyzer(module, listener);
    analyser.analyze();
    const person: IInterface = analyser.interfaces.values().next().value;
    assert.ok(person instanceof InferredInterface);
    const comment = person.generateDeclarationComment();
    assert.ok(comment.indexOf("@Person interface") > 0);
    assert.ok(comment.indexOf("@name String") > 0);
});

it("utilizes interface comment", () => {
    const listener = new ProblemListener();
    const module = ModuleBuilder.parse_module("samples/person_factory_preceded_with_draft_interface_comment.js", listener);
    const analyser = new Analyzer(module, listener);
    analyser.analyze();
    assert.equal(analyser.interfaces.size, 1);
    const person: IInterface = analyser.interfaces.values().next().value;
    assert.ok(person instanceof DraftInterface);
    assert.equal(person.name, "Person");
    assert.equal(person.instanceFields.length, 1);
    assert.equal(person.instanceFields[0].id.value, "name");
});

