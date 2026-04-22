# No ternary shorthand expressions

This rule comes from pretty much all decent languages (Go, Zig, Python).

# ❌ Bad

```js
let a = b ? c : d ? : e;
```

# ✅ Good

```js
// assign the fallback value
let a = e;
if (b) {
  if (c) {
    // update if the right conditions are met
    a = d;
  }
}
```

## Rationalé

Ternaries are the devil's playground.

> Readability counts.
