---
name: Expression rules
description: All expressions must be captured, accessors can chain on new lines, no complex subscript expressions
type: syntax
issue: 56
---

# Expression types, capture rules, and accessor chaining

Split from #43 Language Draft — Expressions section.

- We have several types of expressions:
  - Template String Expressions
    (the same as accessor expressions for now)
  - Accessor Expressions
    (access variables and properties)
  - Invocation Expressions
    (accessor expression ending with a function invocation)
  - Bitwise Expression
  - Sum, Difference, Product, Quotient, and Exponent Expressions
  - Logical Expression (between Boolean expressions)
  - Boolean Expression
  - Nullish Expression
- All expressions MUST be captured
  (EXCEPTION: functions can be \`void\`ed, see #54)
  ```js
  // ❌
  void foo.bar.baz;
  foo.bar.baz;
  ```
  ```js
  // ✅
  var x = foo.bar.baz;
  ```
- Accessors can be chained, and on new lines
  (but not functions, see #54)
  ```js
  // ✅
  // ES-style (but prettier-supported)
  var x = foo["1"]
    .bar
    .baz;
  // Go-style 💪
  var x = foo["1"].
    bar.
    baz;
  ```
- Accessors cannot contain complex expressions
  ```js
  // ❌
  var x = foo[n + 1];
  var y = foo[n + 2];
  ```
  ```js
  // ✅ tedious but...
  n = n + 1
  var x = foo[n]
  n = n + 1
  var y = foo[n]

  n = bar.baz()
  var z = foo[n]

  var a = foo[bar.bar]
  ```
- no whitespace between \`arr\` or \`obj\` and \`[\`
  ```js
  // ❌
  arr
    [
      1,
    ]
  ```
  ```js
  // ✅
  arr[
    "1" // newline allowed for compat with prettier
  ]
  ```
