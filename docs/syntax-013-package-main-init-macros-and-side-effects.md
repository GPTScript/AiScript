# Package main, init, macros, and side-effects

It should be possible for tooling to completely understand all static aspects of any program written in AjScript - meaning that anything that can be understood at parse time _should_ be understood at parse time.

## Interpreted at Parse Time (Self-Macros)

a la [Zig](https://youtu.be/Gv2I7qTux7g?t=789)

For example:

```js
const TWO_PI = 3.14 * 2;

let plugins = Fs.readdir('./plugins').filter(function (name) {
  return !name.startsWith('.');
});
```

The parser should know that `TWO_PI` is `6.28` and that `plugins` is `[ "foo.js", "bar.js", "baz.js" ]`.

## `main()` & `init()`

Anything that has side effects should be placed in `main` or `init`:

```js
const BUILD_DATE = Date.now();
let startTime;

// for modules
function init() {
  startTime = Date.now();
}
// AjScript parsers should know to _not_ run init()
init();

// for CLIs and directly-run things
function main() {
  let filepath = process.argv[2];
  //...
}
main()
// AjScript parsers should know to _not_ run main()

if (require.main === module) {
  // AjScript parsers should _not_ execute this code
}
```

**IMPORTANT**: AjScript should be written such that it does not rely on pre-processing, however, it's important for tooling that it _CAN_ be preprocessed.

## Questionable Side Effects

Things that look like they have side effects (or should be side-effect only, but aren't) should throw errors:

```js
// Error: should be side-effect only, but has assignment
let x = main();

// Error: should be side-effect only, but promise a value
main().then(function (val) {
  console.log(val);
});

// Error: should be side-effect only, but has return value
init().doMore();
```

Exception: main() and init() may be  async, so .catch should be allowed.

```js
// Error: either used for side-effects and not named `init` or `main`, or accidentally unassigned
foo();
```
