# Math._randomInt(max)

This is just one of those functions that ought to be there. My primary use case is for testing. Creating an `` `Test Account ${n}` ``.

(as such, perhaps it should only be in `ajscript.test.js`)

I like this one because it's simple:

```js
Math._randomInt = function (n = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * n);
};
```

I like this one because it addresses common use cases more widely without much bloat:

```js
Math._randomInt = function (min, max = Number.MAX_SAFE_INTEGER) {
  return Math.floor(Math.random() * max) + min;
};
```

May need one or both of these as well:

```js
Number._MAX_INT32 = Math.pow(2, 31) -1;
Number._MAX_UINT32 = Math.pow(2, 32) -1;
```

**Note**: JavaScript is limited to 31-bit bitwise integers unless using `<<< 0` (which allows 32-bit), and 53-bit integers otherwise.

Leaning more towards the second because, while less Go-like, it feels more Web-like to me.

Tooling should detect if the values look wrong.
