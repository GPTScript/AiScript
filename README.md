# AjScript (ˈā•ī ˈskript)

<small>(it's a roman _swash letter i_, but also for _JIT_)</small>

> A Minimal, Full-Stack, Tool-Assisted Language. \
> Strictly & Strongly-Typed, for Browsers and Bun.

```js
var msg = `Hello, World!`;

async function main() {
  for (;;) {
    console.info(msg);
    break;
  }
}

main();
```

## Language Spec

See <https://github.com/GPTScript/AiScript/issues/43>.

## Why

> No matter how [simple] the API, the world will produce [those] capable of misusing it. \
> ~ [Lawrence Dol](https://github.com/tc39/proposal-regex-escaping/issues/37#issuecomment-739081896)

<small>(but that doesn't mean we shouldn't try our best to provide one)</small>

We're facing a new age of programming - a nexus of two delimmas:
- far more programmers are junior than are senior
- AI (tool-assisted) programming is quickly becoming unavoidable

This produces a paradox:
- most code is written by the inexperienced
- most training models are therefore trained to be inexperienced \
  (and training models are _far_ less _actually_ intelligent than humans)

AjScript solves this by providing a small, less-expressive (but familiar) language
that *can be learned in a weekend* (a la Go), and encourages **readability above all else**.

Most importantly, we take make the best use of capabilities that Browsers have to offer, in the fastest way possible,
with the most correct type system, and the best tools imaginable - to make our everyday lives better as programmers who
(by choice or otherwise) use Browsers and Bun as development platforms.

## Values

> Perfection is Achieved Not When There Is Nothing More to Add, But When There Is Nothing Left to Take Away \
> ~ Antoine de Saint-Exupery

We follow the [Unix Philosophy][unix-philosophy], the [Zen of Python][zen-python], the [Go Proverbs][go-proverbs], the [Prettier Rationale][prettier-rationale], the [Zen of Zig][zen-zig] and the [Axioms of AJ][axioms-aj].

**In summary**:

Write Correct, Safe Programs that span across Time and Developers

- Readable > Writable
- Less > More
- Necessary > Expressive
- Tool-Assisted > Manual
- Macros > Transpiling
- Hueristics > Statistics
- Standard Library > Packages
- Tooling Ecosystem > Popular Opinions
- Engineering > Development
- Just-in-Time Re-learning > A Human's Working Memory
- JIT > Never
- Top to Bottom > Left to Right

[unix-philosophy]: https://en.wikipedia.org/wiki/Unix_philosophy#Origin
[zen-python]: https://github.com/ewjoachim/zen-of-python
[go-proverbs]: https://github.com/BeyondCodeBootcamp/go-proverbs/
[prettier-rationale]: https://prettier.io/docs/en/rationale.html
[zen-zig]: https://ziglang.org/documentation/0.10.1/#Zen
[axioms-aj]: https://github.com/coolaj86/AiScript/issues/28

## Compatibility with Browsers & Bun

> Small language, Robust Standard Library

AjScript is it's own language with its own ethos, syntax, design patterns, and standard library -
some of which varies wildly from some of the most popular frontend and backend frameworks today. \

That said, one of the design constraints is that it **must remain natively compatible** with Browsers and Bun \
(and by extension Node and Deno) **without transpiling**.

This means that, **from a syntax perspective _only_**, it is a strict subset (of the common subset) of the
language defined by what Browsers and Bun implement. To be more specific: AjScript **will not adopt** any
syntax that has not existed in all **mainstream browsers for at least 18 months**.

And while AjScript adopts much of what Browsers provide as "the standard library", it also extends it
with a small set of syntax-compatible additions that are necessary to write correct, safe programs -
things like `RegExp._escape(str)` and `Promise._parallel(qty, arr, fn)`).
