---
name: No nested parentheses
description: Extract sub-expressions into named variables — if an expression needs inner parens, it has too many operations
type: syntax
issue: 63
---

# No nested parentheses

> "Don't Make Waves" — [Axiom 1](#28)

If an expression needs inner parens, it has too many operations. Extract into named variables so precedence is never in question. This also prevents `prettier` from silently removing parens it considers redundant.

See also: #15 (one operation per line), #56 (all expressions must be captured).

## ALWAYS extract sub-expressions so no line needs nested parens

Before:
```js
var n = (2 / (2 + 3)) * 2;
```

After:
```js
var divisor = 2 + 3;
var ratio = 2 / divisor;
var result = ratio * 2;
```

## ALWAYS extract function calls out of conditions

Before:
```js
if (getStuff()) {
}
```

After:
```js
var stuff = getStuff();
if (stuff) {
}
```

## ALWAYS extract into a variable when prettier would strip your parens

```js
// prettier rewrites both of these identically:
var message = greeting + (whom || "you");
var message = greeting + whom || "you";
```

```js
// named variable makes the intent unambiguous
var recipient = whom || "you";
var message = greeting + recipient;
```
