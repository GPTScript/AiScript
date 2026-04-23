---
name: No dynamic imports/exports
description: All imports and exports must be explicit by name — no Object.assign, dynamic keys, or runtime subscripting
type: syntax
issue: 8
---

# No meta programming / subscripting on imports / exports

## Rationale

- Easy to read "Is _this_ function exported" rather than "Where are _all_ exported functions"
- Tooling (i.e. `tsc`) can't read exports that require runtime code to examine
- Possible security vuln: perhaps untrusted code can be placed in a trusted folder

## Example: Exports

### Bad

```js
Object.assign(module.exports, {
  create,
  get,
  update,
  destroy
});
```

### Good

```js
let Crud = module.exports;

Crud.create = function () {
  // ...
};

// ...
```

## Example: Dynamic Imports

### Bad

```js
let DynamicThings = {};
Fs.readdir(`./things/`).forEach(function (node) {
  DynamicThings[node] = require(`./things/${node}`);
});
```

### Good

If possible, the requires should be listed manually

```js
let DynamicThings = {
  Foo: require('./foo.js'),
  Bar: require('./bar.js'),
};
```

Otherwise, create a template for `npm pre-publish` (which also runs on `npm install`, locally) or similar:

```js
let js = `"use strict";
let DynamicThings = {};
`;

Fs.readdir(`./things/`).forEach(function (node) {
  // the final require will have the literal value of ${node}, not the variable
  js += `DynamicThings.${node} = require(\`./things/${node}\`);\n`
});
js += `\n`;

Fs.writeFile(`./generated-things.js`, js, `utf8`);
```

Require the generated file:

```js
let DynamicThings = require('/generated-things.js');
```
