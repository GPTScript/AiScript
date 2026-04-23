---
name: Type system
description: Duck typing, auto-drafted type comments, concrete types, return type narrowing, transitive narrowing
type: syntax
issue: 53
---

# Type system: duck typing, type drafting, and narrowing

Split from #43 Language Draft — Type System section.

See also: #28 Axiom 7 (interfaces over generics — prefer duck typing and concrete interfaces).

Duck-Typing is King! (everything is an interface)

- Types are `TitleCase`
- Types are _Drafted_ automatically by tooling
- All properties are always optional?
  (because we can tell if a property exists?)

## Type Drafting

Types can be inferred from correct code, and _drafted_ automatically.

Consider this code:

```js
var Person = module.exports;
Person.create = function(opts) {
  var p = {};

  p.name = opts.name           // required
  p.age = opts.age || null     // optional
  p.ssn = opts.ssn             // required
  p.friend = opts.friend || p  // optional
  p.fullName = function () {
    return `${p.name} ${p.last}`
  };

  return p;
}
Person.fullName = function (p) {
  return `${p.name} ${p.last}`
};

Person.create({ name: "Jack", age: 42, friend: "Jeff" });
```

Since the code and its execution can be entirely understood, we can _draft_ the type based on known information:

```js
/***
 * A person interface
 * @Person Struct
 * @name String
 * @age Number?
 * @ssn UNKNOWN           // WARN: incomplete use / conflict
 * @friend String|Person
 *
 * $version draft ef2b31  // drafted, non-authoritative
 *                        // can be updated by tooling
 */
```

Note: `draft` means that we should not use the type comment to enforce what the code should be, but rather we re-gen on code update. Anytime the code is correct and the type definition is out-of-date we can change the `$version` to `draft` to allow it to be regenerated.

```js
var Person = {}

/***
 * @Create                        // the constructor type
 * @opts Person{                  // sub-interface definition
 *         name,
 *         age?,
 *         ssn,
 *         friend?,
 *       }
 *                                // (properties have the same type as Person)
 * returns @Person
 */
Person.create = function(opts) {
  var p = {};

  p.name = opts.name              // required
  p.age = opts.age || 0           // optional
  p.ssn = opts.ssn                // WARN: ambiguous
  p.friend = opts.friend || p     // enum

  return p;
}

Person.create({ name: "Jack", age: 42, friend: "Jeff" });
```

We can tell by the usage what a Person object can and can't be.

## Concrete types

```js
/***
 * A person (or person-esque) interface
 * @Person Struct            // Object, sans prototype stuff
 * @name String              // common String
 * @age  NaturalNumber|null  // 1 to MAX_SAFE_INTEGER, or null
 * @bankBalance BigInt       // can be pos, neg, or 0! (probably in pennies)
 * @friends []Person         // friend list or null
 * @favoritePet Pet|null?    // pet or null or not defined
 *
 * $version v1.0.1           // whether the type has been locked
 */

/*** @Person */
var Person = {};
Person.name = "AJ";
Person.age = 0;
```

To create an ad-hoc new type:

```js
function getInterestingType() {
    /*** @KnownType */
    var knownType = { foo: "bar" }

    var newProperties = { bar: "baz" };
    var newType = Object.assign(knownType, newProperties)
}

// this is now known to be KnowType-ish + `bar` and can be checked as such.
var interestingType = getInterestingType();
```

If a function can throw, that's part of its type information.
- not possible to throw: `function add() { var sum = 2 + 5; return sum; }`
- can throw: `function divide(a, b) { var quotient = a / b; return quotient; }`
- How should we indicate that? `/** @throws */` ?

## Return Type Narrowing (from #44)

The type system must know which specific type is returned based on code-path analysis.

```js
var hdpath = `m/44'/5'/0'/0`;
var xKey = DashHd.derivePath(walletKey, hdpath)
```

Depending on the string value, `xKey` could be of the generic type `HDKey`, but it could be of a more specific type — such as `HDWalletKey`, `HDAccountKey`, `HDXKey`, or `HDAddressKey`. The branching logic depends only on how the string is split and operated on, so it's analyzable at dev time.

Similarly, after a type-narrowing check like `Array.isArray(headers[key])`, the type system should know the narrowed type within that branch.

## Transitive Condition Narrowing (from #46)

If we assign one variable to another and test the new variable's properties, the type system should know that the same applies to the original:

```js
function mustSelectInputs({ inputs, satoshis, now = Date.now() }) {
   if (inputs) {
      return inputs;
   }

   var fullTransfer = !satoshis;
   if (fullTransfer) {
      throw new Error(`'satoshis' must be positive unless 'inputs' specified`);
   }

   // should know that satoshis is NOT undefined here
   inputs = DashApi.selectOptimalUtxos(coins, satoshis);
}
```
