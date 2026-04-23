---
name: Autocorrect template expressions
description: Extract function calls and nested templates from template literals into named variables
type: tooling
issue: 19
---

# Autocorrect: No invocations or nesting in string templates

This can be enforced by syntax and automatically corrected by tooling:

## Bad Examples

```js
let username = `test+${Crypto._randomBytes(16)}`;
```

```js
let username = `test+${Crypto._randomBytes(`${getBase()}`)}`;
```

## Good Examples

```js
let rnd = Crypto._randomBytes(16);
let username = `test+${rnd}`;
```

```js
let base = getBase();
let rnd = Crypto._randomBytes(16, `base${base}`);
let username = `test+${rnd}`;
```

## Tooling Example

```js
let AUTO_STR_157 = Crypto._randomBytes(16);
let username = `test+${AUTO_STR_157}`;
```

```js
let AUTO_STR_156 = getBase();
let AUTO_STR_157 = Crypto._randomBytes(16, `base${AUTO_STR_156}`);
let username = `test+${AUTO_STR_157}`;
```

## Dup

Oops. Dupe of #7.
