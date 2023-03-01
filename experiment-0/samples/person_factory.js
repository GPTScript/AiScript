var Person = {};
Person.create = function(opts) {
    var p = {}
    p.name = opts.name
    return p
}
var p = Person.create({ name: "Jack" })
