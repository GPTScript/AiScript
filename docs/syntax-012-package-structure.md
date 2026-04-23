---
name: Package structure
description: Packages use mypkg.js at root with lib/ subdirectory, proper exports for Node and browser
type: syntax
issue: 12
---

# Package structure

How to structure an npm package for publishing for node and/or browsers (including webpack, etc), in the simplest way possible:

```js
mypkg/
    package.json
    package-lock.json
    lib/
    mypkg.js
    README.md
    LICENSE
```

`package.json`:
```json
{
    "main": "mypkg.js",
    "scripts": {
        "format": "npx prettier@2.x -w '**/*.{js,md,html,css}'",
        "lint": "npx jshint@2.x -c .jshintrc ./",
        "doc": "npx jsdoc .... i forgot... TODO"
    },
    "files": [
        "./lib/"
    ],
    "license": "SEE LICENSE IN LICENSE"
}
```

## For Node.js

`mypkg.js`:
```js
"use strict";

let MyPkg = module.exports;

MyPkg.doStuff = async function () {
  // ...
};
```

### Node Usage

```js
"use strict";

let MyPkg = require("mypkg");
```

## For Node + Browser (Isomorphic)

`mypkg.js`:
```js
(function (exports) {
  "use strict";

  let MyPkg = {};

  exports.MyPkg = MyPkg;

  MyPkg.doStuff = async function () {
    // ...
  };
}('undefined' !== typeof module && module.exports || window));
```

### Node + Browser + WebPack, etc Usage

Usage:

```js
(function (exports) {
  "use strict";

  let MyPkg = exports.MyPkg || require('mypkg').MyPkg;

  // ...
}('undefined' !== typeof module && module.exports || window));
```
