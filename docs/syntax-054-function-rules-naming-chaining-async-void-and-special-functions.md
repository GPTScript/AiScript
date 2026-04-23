---
name: Function rules
description: camelCase names, no chaining after call, async/void rules, no generators, main/create/init conventions
type: syntax
issue: 54
---

# Function rules: naming, chaining, async, void, and special functions

Split from #43 Language Draft — Functions section.

- function names are `camelCase`
   ```js
   // ✅
   function doStuff() {
     // statements
   }
   ```
   ```js
   // ❌
   function do_stuff() {
     // statements
   }
   ```
- a function expression can be assigned to a property
  ```js
  // ❌
  var doStuff = function () {
    // ...
  };
  ```
  ```js
  // ✅
  foo.bar = function () {
    // ...
  };
  ```
  ```js
  // ⚠️ not sure on this one, learning towards no
  foo.bar(function () {
    // ...
  });
  ```
  ```js
  // ✅ definitely okay
  foo.bar(doStuff);
  function doStuff() {
    // ...
  })
  ```
- a function can be declared after a `return`
  ```js
  function main () {
    // ⚠️ not sure on this one, learning yes
    foo.bar(doStuff);
    return;

    function doStuff() {
      // ...
    })
  }
  ```
- calling a function is the end of an expression (no chaining)
   ```js
   foo.bar.baz(); // ✅
   ```
   ```js
   foo.bar.baz().length; // ❌
   ```
   ```js
   // ⚠️ EXCEPTION we probably have to have .then().catch()
   await foo.bar.baz().then().catch().then();
   ```
- functions can be `async` (but cannot be generators)
   ```js
   // ✅
   async function doStuff() {
      // statements
   }
   ```
   ```js
   // ❌
   function* doStuff() {
      // statements
   }
   ```
- return values must be used or `void`ed (for side effects)
   ```js
   // ✅ used
   var quux = foo.bar.baz();

   // ✅ discarded
   void foo.bar.baz();
   ```
- `async` statements MUST be called with `await`
   ```js
   // ✅
   await foo.bar.baz();
   ```
- `async` expressions are valid if Promise is a valid type
   ```js
   // ✅
   var jobs = [];
   jobs.push(
       foo.bar.baz(),
   );
   ```
- true background tasks that can throw MUST be handled
   ```js
   // ✅
   setImmediate(async function () {
     var result = await foo.bar.baz();
     result.catch(console.error);
   });
   ```
- you cannot invoke a non function
   ```js
   // ❌
   var MyPackage = exports

   (function () {
     // ...
   }())
   ```
   ```js
   // ✅
   var MyPackage = exports

   void (function () {
     // ...
   }())
   ```
- any invocation outside of `main()` must be statically inspectable
   ```js
   // ❌
   var x = makeRequest(process.env.API_TOKEN);
   
   function main() {
     var y = doMoreStuff(x);
   }
   ```
   ```js
   // ✅
   var x = doStuff();
   
   function main() {
     // 💪 we should know exactly what x is here
     var y = doMoreStuff(x);
   }
   ```
- there MUST NOT be whitespace between the identifier (`fn`) and the invocation (`(`)
  ```js
  // ❌ 
  fn
  (
    1,
    2,
    3,
  )
  ```
  ```js
  // ✅ 
  fn(
    1,
    2,
    3,
  )
  ```

## Special Functions

- `async function main()` must exist for "bins"
- `function create()` must NOT be async
- `async function init()` MUST be async
