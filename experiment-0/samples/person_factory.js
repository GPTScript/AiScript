var Person = {}
Person.create = function(opts) {
    var p = {}
    p.name = opts.name
    p.age = opts.age
    return p
}
var p = Person.create({ name: "Jack", age: 50 })
