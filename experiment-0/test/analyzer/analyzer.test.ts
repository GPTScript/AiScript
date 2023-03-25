import ModuleBuilder from "../../src/builder/ModuleBuilder";
import Analyzer from "../../src/analyzer/Analyzer";
import IInterface from "../../src/module/IInterface";
import StringType from "../../src/types/StringType";
import ProblemListener from "../../src/problem/ProblemListener";
import * as assert from "assert";

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
