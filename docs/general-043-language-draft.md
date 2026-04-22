# Language Draft

# Table of Contents

- Guiding Principles
- Examples
  - [Type System](#type-system)
  - [Functions](#functions)
  - [Variables](#variables)
  - [Expressions](#expressions)
  - [Macro System](#macro-system)
- Glossary of Keywords & Syntax

# Questions

- Is it possible to eliminate semicolons without creating opportunities for obscure errors?
- Is it possible to eliminate either try/catch or .catch().then()? \
  (probably not since you can't unwind an async stack)

# Guiding Principles

- readability first
- everything is an interface
- maximize tool-assisted coding

Language Principles
- smaller language, larger standard library
- environment dictates use case
   - single-core Browser with mostly-memcopy workers (<https://brave.com/>)
   - single-core servers that scale horizontally (<https://bun.sh/>)
   - low-latency document-processing systems (<https://wintercg.org/>)
   - low-hertz microcontrollers (<https://bellard.org/quickjs/>)

Syntax Principles
- performance over cool functional and CS concepts \
   (no prototypes, no inheritance, no chaining, no reduce)
- minimize human brain parser complexity \
   (at the expense of expressiveness and the tax of verbosity)
- minimize machine parser complexity (hopefully for all benefits)

# Ai JitScript by Example

## Type System

Duck-Typing is King! (everything is an interface)

- Types are `TitleCase`
- Types are _Drafted_ automatically by tooling
- All properties are always optional? \
  (because we can tell if a property exists?)

### Type Drafting

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


### Concrete types

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
- ```js
   // not possible to throw
   function add() {
     var sum = 2 + 5;
     return sum;
   }
   ```
- ```js
   // can throw
   function divide(a, b) {
     var quotient = a / b;
     return quotient;
   }
   ```
- How should we indicate that? /** @throws */ ?


## Functions

- function names are `camelCase`
   ```js
   // ✅
   function doStuff() {
     // statements
   }
   ```
   ```js
   // ❌
   function do_stuff() {
     // statements
   }
   ```
- a function expression can be assigned to a property
  ```js
  // ❌
  var doStuff = function () {
    // ...
  };
  ```
  ```js
  // ✅
  foo.bar = function () {
    // ...
  };
  ```
  ```js
  // ⚠️ not sure on this one, learning towards no
  foo.bar(function () {
    // ...
  });
  ```
  ```js
  // ✅ definitely okay
  foo.bar(doStuff);
  function doStuff() {
    // ...
  })
  ```
- a function can be declared after a `return`
  ```js
  function main () {
    // ⚠️ not sure on this one, learning yes
    foo.bar(doStuff);
    return;

    function doStuff() {
      // ...
    })
  }
  ```
- calling a function is the end of an expression (no chaining)
   ```js
   foo.bar.baz(); // ✅
   ```
   ```js
   foo.bar.baz().length; // ❌
   ```
   ```js
   // ⚠️ EXCEPTION we probably have to have .then().catch()
   await foo.bar.baz().then().catch().then();
   ```
- functions can be `async` (but cannot be generators)
   ```js
   // ✅
   async function doStuff() {
      // statements
   }
   ```
   ```js
   // ❌
   function* doStuff() {
      // statements
   }
   ```
- return values must be used or `void`ed (for side effects)
   ```js
   // ✅ used
   var quux = foo.bar.baz();

   // ✅ discarded
   void foo.bar.baz();
   ```
- `async` statements MUST be called with `await`
   ```js
   // ✅
   await foo.bar.baz();
   ```
- `async` expressions are valid if Promise is a valid type
   ```js
   // ✅
   var jobs = [];
   jobs.push(
       foo.bar.baz(),
   );
   ```
- true background tasks that can throw MUST be handled
   ```js
   // ✅
   setImmediate(async function () {
     var result = await foo.bar.baz();
     result.catch(console.error);
   });
   ```
- you cannot invoke a non function
   ```js
   // ❌
   var MyPackage = exports

   (function () {
     // ...
   }())
   ```
   ```js
   // ✅
   var MyPackage = exports

   void (function () {
     // ...
   }())
   ```
- any invocation outside of `main()` must be statically inspectable
   ```js
   // ❌
   var x = makeRequest(process.env.API_TOKEN);
   
   function main() {
     var y = doMoreStuff(x);
   }
   ```
   ```js
   // ✅
   var x = doStuff();
   
   function main() {
     // 💪 we should know exactly what x is here
     var y = doMoreStuff(x);
   }
   ```
   ```js
   // ⚠️ maybe?
   var x = Fs.readFileSync("./thing.txt", null);
   
   function main() {
     // 💪 we should know exactly what x is here
     var y = doMoreStuff(x);
   }
   ```
- there MUST NOT be whitespace the identifier (`fn`) and the invocation (`(`)
  ```js
  // ❌ 
  fn
  (
    1,
    2,
    3,
  )
  ```
  ```js
  // ✅ 
  fn(
    1,
    2,
    3,
  )
  ```

### Special Functions

- `async function main()` must exist for "bins"
- `function create()` must NOT be async
- `async function init()` MUST be async

## Variables

- considering `var` only because...
- shadowing is possible
  ```js
  // ❌
  // "string"
  var age = input.value;

  // "number" cannot change types!!!
  age = parseInt(age, 10);
  ```
  ```js
  // ✅
  // "string"
  var age = input.value;

  // "number" (shadowed)
  var age = parseInt(age, 10);
  ```
- constants are `ALL_CAPS`
  ```js
  var PI = 3.14
  ```

## Expressions

- We have several types of expressions:
  - Template String Expressions \
    (the same as accessor expressions for now)
  - Accessor Expressions \
    (access variables and properties)
  - Invocation Expressions \
    (accessor expression ending with a function invocation)
  - Bitwise Expression
  - Sum, Difference, Product, Quotient, and Exponent Expressions
  - Logical Expression (between Boolean expressions)
  - Boolean Expression
  - Nullish Expression
- All expressions MUST be captured \
  (EXCEPTION: functions can be `void`ed, see [Functions](#functions))
  ```js
  // ❌
  void foo.bar.baz;
  foo.bar.baz;
  ```
  ```js
  // ✅
  var x = foo.bar.baz;
  ```
- Accessors can be chained, and on new lines \
  (but not functions, see [Functions](#functions))
  ```js
  // ✅
  // ES-style (but prettier-supported)
  var x = foo["1"]
    .bar
    .baz;
  // Go-style 💪
  var x = foo["1"].
    bar.
    baz; 
  ```
- Accessors cannot contain complex expressions
  ```js
  // ❌ 
  var x = foo[n + 1];
  var y = foo[n + 2];
  ```
  ```js
  // ✅ tedious but... maybe allow `+=` ?
  n = n + 1
  var x = foo[n]
  n = n + 1
  var y = foo[n]

  n = bar.baz()
  var z = foo[n]

  var a = foo[bar.bar]
  ```
  ```js
  // ⚠️ I'm on the fence - this is hard to read, leaning no
  var x = foo[bar.baz()];
  ```
- no whitespace between `arr` or `obj` and `[`
  ```js
  // ❌ 
  arr
    [
      1, // obviously no comma
    ]
  ```
  ```js
  // ✅
  arr[
    "1" // newline allowed for compat with `prettier`
  ]
  ```

## Strings

- templates MUST ONLY contain strings and Accessor Expressions - no Invocations:
  ```js
  // ❌
  var msg = `Hello ${friend[i].name}, I'm ${me.getName()}`
  ```
  ```js
  // ✅
  var name = me.getName();
  var msg = `Hello ${friend[i].name}, I'm ${name}`
  ```
  note: this is an argument _against_ allowing `+=` in sub-index: \
  we can create template strings we can interpolate _without_ `eval`
  ```js
  function execTemplate(tmpl, { friend, me }) {
    var accessors = tmpl.match(/magic/g);
    // ... magic
    {
      var val = getByMagic(accessorPath, friend);
      replaceByMagic(tmpl, accessorPath, val);
    }
  }
  ```
  or we could have _another_ type of expression just for \
  template strings that allows the simplest accessors, \
  but not invocations (potentially unsafe) or indexes + logic

## Numbers

Some rough, not-well-thought-out ideas (Re: can division throw):
- 1 - NaturalNumber? (only 1 - Math.MAX_SAFE_NUMBER)
- 0 - BitwiseInteger (can be zero, but not negative, up to 2**32)
- -1 - Integer (can be 0, or negative)
- 1n - BigInt
- 1.0 - Float

# Macro System

Think of `prettier` - the macro parser and expander executes on save.

- Arrow Expressions to Functions
   ```js
   // 🤮
   const annoyMe = n => n + 1
   // or
   const annoyMe = (n) => { 
     n + 1
   }
   ```
   ```js
   // 😉
   function annoyMe(n) {
     return n + 1
   }
   ```
- Class Statement to Factory Function
   ```js
   // 🫤
   class SelfLoathing {
     constructor() {
       this.name = "evil";
     }
     greet(other) {
       return `Hello ${other}, I'm ${this.name}`;
     }
   }
   ```
   ```js
   // 😉
   var SelfLoathing = {};
   SelfLoathing.create = function () {
     var s = {};

     s.name = "evil";

     s.greet = function (other) {
       return `Hello ${other}, I'm ${s.name}`;       
     };

     return s;
   };
   // TODO how do we chose the name of `this` => `s`?
   // note: either `var s = { foo: bar, baz: quux }`
   //       or `var s = {}; s.foo = bar; s.baz = quux;`
   //       but not `var s = { foo: bar }; s.baz = quux;`
   ```

# Syntax

## Keywords

<!--
function quotify(str) {
    return str.split(/[, ]+/).filter(Boolean).join('`, `');
}
-->

These words cannot be used for standalone variable or function names, but may be used as _property_ names.

(30) `arguments`, _`async`_, `await`, `break`, `case`, `catch`, `const`, `continue`, `debugger`, `default`, `delete`, `else`, `export`, _`exports`_, `false`, `for`, `function`, `if`, `import`, `in`, `let`, `null`, `return`, _`require`_ , `switch`, `throw`, `true`, `try`, `typeof`, _`undefined`_, `var`, `void`

Idea: can we remove more without increasing pain?

(24) `arguments`, _`async`_, `await`, `break`, `catch`, `continue`, `delete`, `else`, `export`, _`exports`_, `false`, `for`, `function`, `if`, `import`, `in`, `null`, `return`, _`require`_, `throw`, `true`, `try`, `typeof`, _`undefined`_, `var`, `void`

(unused: `case`, `debugger`, `default`, `switch`, `import`, `export`, `var`, `const`)

### Special Words

- `of`
- `new`

### (Unused) Reserved Words

These words are reserved for historical reasons.

`do`, `class`, `enum`, `eval`, `extends`, `finally`, `function*`, `implements`, `instanceof`, `interface`, `let`, `new`, `package`, `private`, `protected`, `public`, `static`, `super`, `this`, `while`, `with`, `yield`, `yield*`

### Non-Reserved Words

These words might appear to be reserved, but they aren't.

`abstract`, `boolean`, `byte`, `char`, `double`, `final`, `float`, `goto`, `int`, `long`, `native`, `short`, `synchronized`, `throws`, `transient`, `volatile`

## Syntax Characters

Alphanumeric and Word Characters:
- `a-z`
- `A-Z`
- `0-9`
- `_`,

Identifiers can also contain:
- `$`

Accessors may also use:
- `.`
- `[`
- `]`
- `?.` (which is a pair, not `?` and `.`)
- _newlines_ (but not spaces)

Functions use:
- `(`, `)`
- `,`
- `{`, `}`

Math Operations:
- `+` (but not `++` or `+=` or `--`)
- `*`, `/` (but not `*=`, `\=`, or `**=`)
- `**` (like `Math.pow()`, but for `BigInt`s)
- `%`
-  `>`, `<`, `<=`, `>=`
- `===` (but not `==`)

Strings:
- `` ` ``
- `"`
- (not `'`)

Logical Operators:
- `!`
- `!==` (but not `!=`)
- `&&`
- `||` (and maaaaaybe `||=`)
- `??` (⚠️ do we need that in this language?) \
   (ex: `function ({ x = null }) { x = x ?? true }`)

Bitwise Operators
- `~`
- `^`, but not `^=`
- `&`, but not `&=`
- `|`, but not `|=`
- `<<`, `>>>` (I'm not sure about `>>`, no `<<=` or `>>=`)

## Other

- no `for await`
- no `for ... in` (unexpected string keys)

## Special syntax

- `#!/usr/bin/env bun`
- `#!/usr/bin/env node`
- `#!/usr/bin/env deno`

## No-Conflict

Cannot be in conflict with <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types> or <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators>

## Nutty Things

`void` is among the Browser's best-kept secrets:

```js
// ❌
var x = a + b(function () {
  // whatever
}())
```
```js
// ✅
var x = a + b

void (function () {
  // whatever
}())
```
```js
// ✅
var x = a + b;

(function () {
  // whatever
}());
```
---
```js
// ❌ // b["apples,bananas,oranges"].forEach(...)
var x = a + b[
  "apples",
  "bananas",
  "oranges",
].forEach(function () {
  // ...
})
```
```js
// ✅
var x = a + b

void [
  "apples",
  "bananas",
  "oranges",
].forEach(function () {
  // ...
})
```
```js
// ✅
var x = a + b;

[
  "apples",
  "bananas",
  "oranges",
].forEach(function () {
  // ...
});
```
