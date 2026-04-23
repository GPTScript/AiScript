---
name: Crypto._randomString
description: Generate random strings with custom alphabet dictionaries (base32, base58, base62, base64)
type: std
issue: 18
---

# Crypto._randomString() + Crypto._randomDictBaseX

In theory, you should just use `Crypto.randomUUID()` or `Crypto.randomBytes(16).toString('base64')`, but due to nuance differences in desires, people end up re-implementing a `randomString()` function.

Making this simpler may not actually fix that - people like to re-invent well-known wheels.

However, it _should_ help those who subscribe to AjScript to have it ready-at-hand.

```js
let rnd = Crypto._randomString(len, [dict]);

// crockford base32
Crypto._randomDictBase32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"

// bc base58x
Crypto._randomDictBase58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"

// gh base62 (alphanumeric)
Crypto._randomDictBase62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// base64 (silly, but convenient. TODO rename 'Base64Unsafe'?)
Crypto._randomDictBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

// urlsafe-base64 (TODO: name?)
Crypto._randomDictBase64Url = Crypto._randomDictBase64.slice(-2) + '-_';
```

### How to pass custom dictionary / charset?

Optional name? or optional dict?

```js
let rnd = Crypto._randomString(len, 'base32');
```

```js
let myDict = "ABC123...".split('')
let rnd = Crypto._randomString(let, myDict);
```

**I'm leaning toward this**:

```js
let myDict = "ABC123...".split('')
let rnd = Crypto._randomString(len, 'base58', myDict);
```

### char len vs entropy

Hmm...

I'm leaning towards `len` meaning _number of string characters_, as this seems most intuitive.

There may need to be a `Crypto._bitsPerChar(len)` and `Crypto._minCharsForBits(256)` or some such.

See <https://therootcompany.com/blog/how-many-bits-of-entropy-per-character/>.

### sync vs async?

Typically the strings people want are small - 32 bytes (256-bit entropy) or less, which points to a synchronous function being the most optimal, and I think even the browser `getRandomValues` is synchronous.
