---
name: Axioms of AJ
description: 17 design axioms — limit usefulness, return something or nothing, let errors bubble, optimize for happy path
type: meta
issue: 28
---

# Axioms of AJ

> An Expert's Guide to Navigating JavaScript in the 22nd Century

Work In Progress

Words that resonate through the halls of the Zen of Python, the Go Proverbs, and other Creeds of Craftsmanship...

```mkdn
0. Limit usefulness
1. Don't Make Waves
2. Less Magic in Code, More Magic in Tooling
3. return something, or return nothing
4. return await, or await without return
5. let errors bubble until they burst \
   (Correct or Classify, but do not Catch)
6. Gatekeepers at the gates, Doorkeepers at the doors
7. Interfaces over Generics
8. No worthless abstractions \
   (_Abstractions should be deep - John Ousterhout_)
9. But by the 3rd or 4th time, you should know what it is
10. await catch: Don't trade one pyramid of doom for another 
11. It's easier to read from top to bottom than left to right, or right to top \
  (return early)
12. Optimize for the happy path (not for exceptions)
13. _When it is broken, it is the right time to fix it - Chinese Fortune Cookie_
14. The constraint of the medium defines the Art \
   "Anything goes" is _not_ a workable constraint
15. For every metric, a counter metric
16. If it sounds cool, DON'T DO IT 🚨!
```

## Cross-references

| Axiom | ADR |
|-------|-----|
| 0. Limit usefulness | #35 Language Goals |
| 1. Don't make waves | #63 (no nested parens, named steps) |
| 2. Less magic in code, more in tooling | #13 main/init, #59 macros, #17 #19 #24 #38 auto-tooling |
| 3. Return something, or return nothing | #61 |
| 4. Return await, or await without return | #62, #29 no await chaining |
| 5. Let errors bubble | #3 no async try/catch |
| 6. Gatekeepers at the gates | #64 (layered auth middleware) |
| 7. Interfaces over generics | #53 Type system |
| 8. No worthless abstractions | #65 (no thin wrappers, namespace objects) |
| 9. By the 3rd or 4th time | #66 (WET → AHA → DRY) |
| 10. No pyramid trading | #3 no async try/catch |
| 11. Top-to-bottom, not left-to-right | #5 minimize else |
| 12. Optimize for the happy path | #5 minimize else |
| 13. Fix it when it's broken | #67 (fix root cause, not workaround) |
| 14. The constraint defines the art | #68 (deliberate constraints define craft) |
| 15. For every metric, a counter metric | #69 (every rule needs a counter-rule) |
| 16. If it sounds cool, don't do it | #70 (prefer boring code over clever code) |

Need a more succinct way to say "We did what we always do when there’s a problem without a clear solution: we waited. Waiting gives us more time to add experience and understanding of the problem and also more time to find a good solution." - [Toward Go 2](https://go.dev/blog/toward-go2)

## "return await, or await without return"

Omitting the `await` as a shortcut is cute, but likely to lead to bugs when you need to refactor later on:

```js
return fetchResponse.json()

// becomes
let data = fetchResponse.json()
data.foo = 'foo'; // ❌
return data;
```

vs

```js
return await fetchResponse.json()

// becomes
let data = await fetchResponse.json()
data.foo = 'foo'; // ✅
return data;
```

---

---

## Comments

### coolaj86 (2022-03-11)

## "return something, or return nothing"

`return`s should convey meaning.
- make a result available to the caller
- do not use as a "convenient" shortcut to "save" a line

### Bad Examples

```js
if (x) {
    return res.json(x);
}
```

```js
function runJob() {
    return otherWiseUnusedPromisableThing()
}
```

This axiom was intended to apply at the _language level_, but it also serves at the framework level. This is bad:

```js
res.json()
```

## Good Examples

```js
if (x) {
    res.json(x);
    return;
}
```

```js
async function runJob() {
    await otherWiseUnusedPromisableThing()
}
```

```js
res.json({ success: true });
```

### coolaj86 (2022-03-11)

## "let errors bubble, until they burst"

> Correct, Classify, but don't Catch

Preferential order for dealing with errors:

### 1. Correct the mistake

Ex: `ENOENT` => `Fs.mkdir(path, { recursive: true })`

### 2. Classify the error

Ex: `mustValidate(userInput)` throws an error with `err.status = 400`

### 3. but do NOT Catch

Don't catch uncorrectable errors locally. Let them bubble up.

Ex: `notFatalButShouldBeLogged()` throws an error with `err.code = 'E_WARN'`, which is caught and logged by a top-level error handler

Bad Ex:

```js
try {
    oops();
} catch(e) {
    /* silencing because not sure what to do here */ 
}
```


### coolaj86 (2022-07-10)

## "limit usefulness"

> "Perfection is achieved, not when there is nothing more to add, \
>  but when there is nothing left to take away." - Antoine de Saint-Exupéry

One of the human assets that becomes a real problem when programming is that we can find _anything_ useful - even when it's not for its intended or optimal use. So much so, in fact, that we have an entire area of study dedicated to it - it's called "Art".

Instead, I argue for the RISC (Reduced Instruction Set Computer) principle - less mental burden, fewer edge cases, etc.
