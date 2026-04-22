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
