---
name: Language Goals
description: Static analysis, write-time tooling, real-time LSP, end-to-end typing — as a strict JavaScript subset
type: meta
issue: 35
---

# Language Goals

See also: #28 Axiom 0 (limit usefulness — RISC principle, fewer features, fewer edge cases).

Rather than a Union of languages, AjScript is meant to be an Intersection of languages.

What's the smallest, least featureful language that we can produce given only the best parts of Go, Rust and Zig, which can be run unambiguously by a JavaScript / ES20xx interpreter - such as Bun and Browsers?

# Goals

## Number 1: Advanced static analysis.

It should (probably) never be necessary to define a return type.

```js
// static-dynamic "comptime" typing
arr.map(function (x) {
  // it should be known by virtue of the type of `arr` what `id` is and that the type of `id` is the return type
  return x.id;
})
```

- on "comptime" analysis: https://news.ycombinator.com/item?id=26416531

## Number 2: Advanced write-time tooling.

It should (probably) never be necessary to define an input type. Writing the code should be sufficient to generate the types.

- `prettier`-like code modification on save

## Number 3: Real-time tooling.

The tooling should be so fast that I could use auto-complete while typing in real-time.

- People typically only update 1 file per second, and less than a dozen files per task (aside from wide refactoring).
- It doesn't make sense to do _all_ the work for _all_ of the files _every_ time.
- cache parse tree, static analysis, dynamic analysis

## Number 4: End-to-end Typing

It sucks to have to write types in 2+ different places. Especially when it comes to migrating databases or otherwise refactoring the data structure.

Could code realistically be automatically updated to reflect data updates?

Perhaps `sqlc` could help: https://docs.sqlc.dev/en/latest/reference/config.html?highlight=json#json

## Number XX: Strict subset of JavaScript

It must be a strict subset of JavaScript that does not require any tooling to run in a browser.

Also, it must work _with_ the grain of JavaScript, not against it.

- Duck-typing
- Go-like, Zig-like

### Alternate Name Ideas

See also: https://github.com/GPTScript/AjScript/issues/42

- GPTScript
- Ai Script (i depicted as latin swash letter j)
- JITScript

# Tricky Bits

### Generic Modification w/o Downcast

It should be possible to require any `Partial<T>` type, but return the original `T` variant.

- Foo
- FooNew = Omit<"id", Foo>
- FooUpdate = Include<"comment", Foo>
- Fooish = Partial<Foo> (also matches most `FooNew`s and all `FooUpdate`s)

```js
/**
 * @param {Partial<Foo>} foo
 * @returns foo<Same>
 */
Foo.normalize = function (fooish) {
  if (!fooish.name) {
    fooish.name = 'fooish';
  }
  return fooish;
}
```

- we can know ahead of time the broadest type this could fit (`Foo`)
- and the narrowest type it could fit (i.e. if a property is removed) (`FooNew`)
- we can know what modifications were made

There's an argument to be made that these are confusing semantics:
- if it returns an object, why isn't it a different object?
- if it _doesn't_ return an object, why are there side effects?

Going "with the grain" of the dynamic nature of AjScript and the ValueObject-oriented design, it seems that it requiring a full copy is not necessary.

Maybe a naming scheme for functions that modify is in order?

```
Foo.$normalize()
```
