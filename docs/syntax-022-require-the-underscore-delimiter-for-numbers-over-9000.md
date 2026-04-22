# Require the underscore delimiter for numbers over 9000 

## Bad Examples

```js
let cost = 10000;

let max = 9007199254740991;
```

## Good Examples

```js
let cost = 100_00; // $100.00 in cents

let max = 9_007_199_254_740_991; // a number in the quadrillions
```

## FAQ

### What about hex?

```js
0x1001_1001
```

Hex doesn't preserve leading zeros `0x0000 === 0x00 === 0x0` and `BigInt` is its own special syntax `0x0123456789ABCDEF0123456789ABCDEFn`, so the same rules apply for non-BigInt Hex and Octal as for decimal.

### What about binary?

Hmm... have to think on that one. Possible the same rules for the same reason above.

8-bit bytes though...

```js
0b10001000_10001000_10001000_1000100
```

```js
0b10001000_10001000_10001000_1000100n
```
