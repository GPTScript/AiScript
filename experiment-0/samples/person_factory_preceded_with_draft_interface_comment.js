var Person = {}
/***
 * @Person interface
 *
 * @name String
 *
 * $version draft ef2b31
 */
Person.create = function(opts) {
    var p = {}
    p.name = opts.name
    return p
}
var p = Person.create({ name: "Jack" })
