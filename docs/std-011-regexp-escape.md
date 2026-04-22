# RegExp._escape

Implementation

```js
RegExp._escape = function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
```

Good Usage:

```js
new RegExp(escapeRegExp(str), 'g');
```

Bad Usage:

```js
new RegExp('\\' + escapeRegExp(str), 'g');
```

Unlikely to ever be accepted into ECMAScript. See:
- https://esdiscuss.org/topic/regexp-escape
- https://github.com/tc39/proposal-regex-escaping/issues/37

---

## Comments

### DBBrowne (2022-03-11)

What would someone be trying to achieve with the "Bad Usage" pattern?

### coolaj86 (2022-03-15)

That's the question of the decade isn't it... https://github.com/tc39/proposal-regex-escaping/issues/37#issuecomment-1056902176

### DBBrowne (2022-03-15)

So someone might use the `'\\' + escapeRegExp(...)` pattern if they were trying to escape a \ at the beginning of their regex?
Which would be unnecessary here, because escaping that initial `\` should be handled by the `escapeRegEx` function?

### coolaj86 (2022-03-15)

It doesn't make any sense. I couldn't find any explanation of "the even/odd problem", just a reference to it.

I'll summarize it here as well:

You'd have to be stupid to do that. Obviously if you only use an escape on _part_ of your string, only part of your string is escaped. If you use `\` then it _may_ escape whatever comes next. If you use `\\` then the `\` is escaped. If it's a string then `\\\` means nothing and `\\\\` would mean `\\` which, as regex would be a single literal `\`.

I can't explain it better because it's literally nonsense, which is what everyone is so upset about.

### coolaj86 (2022-03-15)

(seriously, don't dig too deep trying to understand it, it's lost cause - someone just made up a bad use case and I'm quoting it here not because it would ever make sense, but just to document exactly what was shown to be an invalid use)
