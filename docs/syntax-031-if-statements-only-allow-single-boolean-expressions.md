# if statements only allow SINGLE boolean expressions

This rule is taken from Zig.

## ❌ Bad Example

```js
if (!(new Date() < expiresAt && new Date() > activeAt)) {
    throw new Error("not valid");
}
```

```js
if (!(Date.now() < expires)) {
    throw new Error("expired");
}
```


## ✅ Good Example

```js
let now = Date.now();
let isValid = now < expiresAt && now >= activeAt;
if (!isValid) {
    throw new Error("not valid");
}
```

```js
let now = Date.now();
let isActive = now < expiresAt;
if (!isActive) {
    throw new Error("expired");
}
```

## Rationale

Complex expressions become quadratically more difficult as they are expanded. Limiting `if` statements to simple expressions improves readability, generally, and also causes the code to become more self-documenting (i.e. `isActive` vs `now < expiresAt && now >= activeAt`).

Also, due to the nature of JavaScript (i.e. `NaN` comparisons), it's easy to have false conditions such as `now > expires_at == false` when bugs have crept in `now > NaN == false`.

Using named boolean expressions (i.e. `isActive`) that can easily be negated (i.e. `!isActive`) improves correctness and security.
