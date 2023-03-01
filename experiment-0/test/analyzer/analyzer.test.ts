import ModuleBuilder from "../../src/builder/ModuleBuilder";
import * as assert from "assert";
import Analyzer from "../../src/analyzer/Analyzer";
import Interface from "../../src/module/Interface";
import StringType from "../../src/types/StringType";
import TypeSet from "../../src/types/TypeSet";

it('infers Parent member types',  () => {
    const module = ModuleBuilder.parse_module("samples/person_factory.js");
    const analyser = new Analyzer(module);
    analyser.analyze();
    assert.equal(analyser.interfaces.size, 1);
    const person: Interface = analyser.interfaces.values().next().value;
    assert.equal(person.name, "Person");
    assert.equal(person.fields.length, 1);
    const name = person.fields[0];
    assert.equal(name.name, "name");
    assert.equal(name.type, TypeSet.singleton(StringType.instance));
});
