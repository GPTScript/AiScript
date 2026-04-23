---
name: Keywords and syntax characters
description: 30 keywords, reserved/unused words, permitted operators, string quotes, bitwise ops, shebang, void disambiguation
type: syntax
issue: 60
---

# Keywords, reserved words, operators, and syntax characters

Split from #43 Language Draft — Syntax section (Keywords + Syntax Characters + Other).

## Keywords

These words cannot be used for standalone variable or function names, but may be used as _property_ names.

(30) \`arguments\`, _\`async\`_, \`await\`, \`break\`, \`case\`, \`catch\`, \`const\`, \`continue\`, \`debugger\`, \`default\`, \`delete\`, \`else\`, \`export\`, _\`exports\`_, \`false\`, \`for\`, \`function\`, \`if\`, \`import\`, \`in\`, \`let\`, \`null\`, \`return\`, _\`require\`_, \`switch\`, \`throw\`, \`true\`, \`try\`, \`typeof\`, _\`undefined\`_, \`var\`, \`void\`

Idea: can we remove more without increasing pain?

(24) \`arguments\`, _\`async\`_, \`await\`, \`break\`, \`catch\`, \`continue\`, \`delete\`, \`else\`, \`export\`, _\`exports\`_, \`false\`, \`for\`, \`function\`, \`if\`, \`import\`, \`in\`, \`null\`, \`return\`, _\`require\`_, \`throw\`, \`true\`, \`try\`, \`typeof\`, _\`undefined\`_, \`var\`, \`void\`

(unused: \`case\`, \`debugger\`, \`default\`, \`switch\`, \`import\`, \`export\`, \`var\`, \`const\`)

### Special Words

- \`of\`
- \`new\`

### (Unused) Reserved Words

These words are reserved for historical reasons.

\`do\`, \`class\`, \`enum\`, \`eval\`, \`extends\`, \`finally\`, \`function*\`, \`implements\`, \`instanceof\`, \`interface\`, \`let\`, \`new\`, \`package\`, \`private\`, \`protected\`, \`public\`, \`static\`, \`super\`, \`this\`, \`while\`, \`with\`, \`yield\`, \`yield*\`

### Non-Reserved Words

These words might appear to be reserved, but they aren't.

\`abstract\`, \`boolean\`, \`byte\`, \`char\`, \`double\`, \`final\`, \`float\`, \`goto\`, \`int\`, \`long\`, \`native\`, \`short\`, \`synchronized\`, \`throws\`, \`transient\`, \`volatile\`

## Syntax Characters

Alphanumeric and Word Characters:
- \`a-z\`, \`A-Z\`, \`0-9\`, \`_\`

Identifiers can also contain:
- \`$\`

Accessors may also use:
- \`.\`, \`[\`, \`]\`, \`?.\` (which is a pair, not \`?\` and \`.\`), _newlines_ (but not spaces)

Functions use:
- \`(\`, \`)\`, \`,\`, \`{\`, \`}\`

Math Operations:
- \`+\` (but not \`++\` or \`+=\` or \`--\`)
- \`*\`, \`/\` (but not \`*=\`, \`\\=\`, or \`**=\`)
- \`**\` (like \`Math.pow()\`, but for \`BigInt\`s)
- \`%\`, \`>\`, \`<\`, \`<=\`, \`>=\`
- \`===\` (but not \`==\`)

Strings:
- \` \\\` \` (backtick), \`"\` (double quote), not \`'\` (single quote)

Logical Operators:
- \`!\`, \`!==\` (but not \`!=\`), \`&&\`, \`||\` (and maybe \`||=\`), \`??\`

Bitwise Operators:
- \`~\`, \`^\`, \`&\`, \`|\`, \`<<\`, \`>>>\`

## Other

- no \`for await\`
- no \`for ... in\` (unexpected string keys)

## Special syntax

- \`#!/usr/bin/env bun\`
- \`#!/usr/bin/env node\`
- \`#!/usr/bin/env deno\`

## No-Conflict

Cannot be in conflict with https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

## void disambiguation

\`void\` is among the Browser's best-kept secrets:

```js
// ❌
var x = a + b(function () {
  // whatever
}())
```
```js
// ✅
var x = a + b

void (function () {
  // whatever
}())
```
