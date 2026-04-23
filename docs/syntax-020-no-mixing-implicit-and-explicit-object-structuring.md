---
name: No mixed object shorthand
description: Object literals must use all explicit key:value pairs or all shorthand — never mix both styles
type: syntax
issue: 20
---

# No mixing implicit and explicit object structuring

I believe both Go and Rust behave this way - you have to pick a side (either positional arguments, or named keys).

## Bad Example

```js
doStuff({
  name: myName,
  age,
  shoe_size: shoeSize,
})
```

## Good Examples

```js
doStuff({
  name: myName,
  age: age,
  shoe_size: shoeSize,
})
```

```js
let name = myName;
let shoe_size = shoeSize;
doStuff({
  name,
  age,
  shoe_size,
})
```
