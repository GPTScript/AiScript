import ModuleBuilder from "../../src/builder/ModuleBuilder";
import * as assert from "assert";
import Analyzer from "../../src/analyzer/Analyzer";
import IInterface from "../../src/module/IInterface";
import StringType from "../../src/types/StringType";
import TypeSet from "../../src/types/TypeSet";
import ProblemListener from "../../src/problem/ProblemListener";

it('infers Parent member types',  () => {
    const listener = new ProblemListener();
    const module = ModuleBuilder.parse_module("samples/person_factory.js", listener);
    assert.equal(module.statements.length, 3);
    const analyser = new Analyzer(module, listener);
    analyser.analyze();
    assert.equal(analyser.interfaces.size, 1);
    const person: IInterface = analyser.interfaces.values().next().value;
    assert.equal(person.name, "Person");
    assert.equal(person.staticFields.length, 1);
    const name = person.staticFields[0];
    assert.equal(name.id.value, "name");
    assert.equal(name.type, TypeSet.singleton(StringType.instance));
});
