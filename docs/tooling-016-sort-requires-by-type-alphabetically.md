---
name: Sort imports by category
description: Group imports by type (exports, env, built-in, 1st-party, 3rd-party) then alphabetically within each
type: tooling
issue: 16
---

# sort requires by type, alphabetically

Goal: create an eslint or other plugin that will automatically sort requires alphabetically.

## Good Example

Modules group by "native-ness", listed alphabetically by require path.

```js
// exports
let MyPkg = exports;

// ENVs
let debug = process.env.DEBUG;

// built-in & "AJ Std" modules
let Crypto = require("crypto");
let sleep = require("sleep");

// 1st party modules
let Coins = require("./lib/coins.js").Coins;
let Wallet = require("./lib/wallet.js").Wallet;

// 3rd party modules
let request = require("@root/require").require;
```

## Bad Example

```js
// bogo sort

let Wallet = require("./lib/wallet.js").Wallet;
let request = require("@root/require").require;
let debug = process.env.DEBUG;
let Crypto = require("crypto");
let MyPkg = exports;
let sleep = require("sleep");
let Coins = require("./lib/coins.js").Coins;
```

cc/ @wmerfalen

---

## Comments

### wmerfalen (2022-03-05)

This appears to be what we're after https://eslint.org/docs/developer-guide/working-with-custom-formatters

### wmerfalen (2022-03-13)

@coolaj86 can you modify the description of this issue to reflect what the before and after code should look like? I am having a hard time understanding what the description is supposed to represent

### coolaj86 (2022-03-13)

@wmerfalen done.
