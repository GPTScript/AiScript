# Example: AjScript must know which type is returned

See <https://github.com/dashhive/DashHD.js/issues/26>.

```js
var hdpath = `m/44'/5'/0'/0`;
var xKey = DashHd.derivePath(walletKey, hdpath)
```

Depending on the string value, `xKey` could be of the generic type `HDKey`, but it could be of a more specific type - such as `HDWalletKey`, `HDAccountKey`, `HDXKey`, or `HDAddressKey`.

The logic for returning the types is not yet implemented, but it could be.

None of the branching logic will depend on anything but how the string is split and operated on, so it's possible to analyze at dev time.

---

## Comments

### coolaj86 (2023-03-26)

Another example:

```js
    let resp = await fetch(url, opts);
    /** @type {Record<String,String|Array<String>>} */
    let headers = {};
    for (let [key, value] of resp.headers.entries()) {
      if (headers[key]) {
        let isArray = Array.isArray(headers[key]);
        if (!isArray) {
          //@ts-ignore
          headers[key] = [headers[key]];
        }
        //@ts-ignore
        headers[key].push(value);
      }
    }
```

It should know that it's an array in the one case and not in the other.
