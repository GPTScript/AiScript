# automatically convert all strings to ` strings

## Rule

Convert all strings to `` ` `` template strings

## Exceptions

- require paths `require("./blah")` must use double quotes
- object keys `{ "foo bar": "baz" }` must use double quotes
- `"use strict";` must use double quotes

## Rationalé

> There should be one-- and preferably only one --obvious way to do it.

- We don't need 3 different string types.
- Template strings are the most useful (least conflict / accidental use)
- `'` looks too much like `` ` ``, so that's out \
   (a little dust on your screen could cause hours of debugging)
- non-template strings are
  - syntactically required for imports, `"use strict";`, and object keys
  - required by AjScript for requires
  - best distinguished by `"` which is visually most dissimilar from `` ` ``

---

## Comments

### coolaj86 (2022-03-07)

cc/ @wmerfalen
