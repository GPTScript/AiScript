---
name: No expressions in template strings
description: Template literals allow only variable/property access — no function calls, math, or nested templates
type: syntax
issue: 7
---

# expressions not allowed in template strings

Allowed:

```js
`Hello ${person.name}!`
```

Not allowed:

```js
`Hello ${await getPerson(2).name()}`
```

Certainly not allowed:

nested template strings


- https://eslint.org/docs/rules/no-template-curly-in-string
- https://github.com/eslint/eslint/issues/12064
