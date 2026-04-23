# AjScript ADR Index

Actionable rules for writing AjScript. Load an ADR when you need its examples.

## browser

- [#72](browser-072-dom-queries-ajquery-pattern-with-scoped-parents.md) — DOM queries — $/$$ AJQuery: Use $/$$ helpers with optional parent scope instead of getElementById — prefer name, data-*, and contextual selectors over IDs
- [#73](browser-073-labels-wrap-inputs-inside-label-elements.md) — Labels — wrap inputs: Wrap inputs inside label elements for full click-target coverage — for/id only when nesting is impossible
- [#74](browser-074-id-namespace-pollution-always-use-hyphens-in-id-attributes.md) — ID namespace pollution — use hyphens: Avoid id attributes where possible — when unavoidable, always include a hyphen so the name can't collide with JS identifiers on window
- [#75](browser-075-dom-text-safety-never-innerhtml-for-user-controlled-content.md) — DOM text safety — no innerHTML: Use textContent, innerText, or insertAdjacentText for user/API content — never innerHTML or manual HTML string building
- [#76](browser-076-alert-visibility-toggle-with-hidden-attribute-not-css-classes.md) — Alert visibility — hidden attribute: Toggle role="alert" elements with the hidden attribute and data-variant — no wrapper divs or custom CSS classes
- [#77](browser-077-form-validation-required-attr-and-clearing-stale-error-state.md) — Form validation — required + clear stale state: Use required attr for mandatory inputs — clear custom validation errors at the top of each submit handler
- [#78](browser-078-form-post-for-redirects-build-forms-dynamically.md) — Form POST for redirects: Use semantic hidden forms in markup for POST-then-redirect flows — JS populates values and submits, only build dynamically when the form can't exist until runtime
- [#79](browser-079-no-template-interpolation-in-js-files-fetch-state-via-api.md) — No template interpolation in JS files: JS files must contain no server-side template syntax — fetch initial state via API, or use a tiny inline script block for unavoidable config
- [#80](browser-080-global-unhandled-rejection-handler-route-errors-via-currentevent.md) — Global rejection handler — currentEvent routing: Set currentEvent at the top of each async handler so the global unhandledrejection listener can route errors to the right UI element
- [#81](browser-081-browser-module-pattern-var-app-namespace-with-inline-onclick-handlers.md) — Browser module pattern — var App + onclick: Export a plain App namespace object, expose via window.App, wire events with inline onclick handlers — no addEventListener, no class

## js-style

- [#2](js-style-002-console-info-error-etc.md) — Console method conventions: console.info() for output, .error() for errors, .debug() for DEBUG, .warn() for recoverable — never .log() in prod
- [#32](js-style-032-all-functions-that-can-return-a-promise-should-be-async.md) — Promise-returning functions must be async: Mark all functions async if they can return a promise — guarantees rejection instead of sync throw
- [#33](js-style-033-the-isl-r-design-pattern-mvc-is-dead-long-live-mvc.md) — ISL-R Design Pattern: Organize by component (Interaction, Shape, Logic, Routing) not by category (models, views, controllers)
- [#64](js-style-064-layered-auth-and-validation.md) — Layered auth and validation: Apply broad checks broadly via middleware, fine checks locally in handlers — don't copy-paste auth into every handler
- [#66](js-style-066-abstract-by-the-3rd-time-wet-then-aha-then-dry.md) — When to abstract (WET/AHA/DRY): Tolerate duplication until the 3rd occurrence — don't abstract on first sight, but don't avoid the pattern forever either
- [#67](js-style-067-fix-it-now-don-t-work-around-what-you-can-fix.md) — Fix it now, don't work around it: When you encounter a fixable problem, fix it — don't add a workaround that you and others will repeat forever
- [#70](js-style-070-prefer-boring-code-over-clever-code.md) — Prefer boring code over clever code: If a solution feels clever, that's a warning — choose the obvious approach that any reader can follow without thinking

## meta

- [#28](meta-028-axioms-of-aj.md) — Axioms of AJ: 17 design axioms — limit usefulness, return something or nothing, let errors bubble, optimize for happy path
- [#35](meta-035-language-goals.md) — Language Goals: Static analysis, write-time tooling, real-time LSP, end-to-end typing — as a strict JavaScript subset
- [#68](meta-068-deliberate-constraints-define-craft.md) — Deliberate constraints define craft: AjScript exists because "use all of JavaScript" is not a craft — choosing a curated subset and using it intentionally is
- [#69](meta-069-every-rule-needs-a-counter-rule.md) — Every rule needs a counter-rule: When adding a constraint, define what keeps it in balance — a rule applied blindly becomes rule slop

## std

- [#4](std-004-escapehtml.md) — escapeHtml: Escape &, ", ', <, > in lexicographic order to prevent double-escaping
- [#6](std-006-array-remove-array-insertat.md) — Array utilities: Array._removeItem(val), Array._remove(index), Array._insertAt(index, item) — readable splice wrappers
- [#9](std-009-promise-parallel-run-async-functions-in-parallel.md) — Promise._parallel: Run up to N async tasks concurrently, return results in order — Promise._parallel(limit, arr, fn)
- [#10](std-010-promise-foreach-run-async-tasks-in-sequence.md) — Promise._forEach: Run async tasks sequentially without collecting results — Promise._forEach(arr, fn)
- [#11](std-011-regexp-escape.md) — RegExp._escape: Escape regex special characters for safe pattern construction — RegExp._escape(str)
- [#14](std-014-std-promise-map-run-async-functions-sequentially-and-store-results.md) — Promise._map: Run async functions one at a time, return ordered results array — Promise._map(arr, fn)
- [#18](std-018-crypto-randomstring-crypto-randomdictbasex.md) — Crypto._randomString: Generate random strings with custom alphabet dictionaries (base32, base58, base62, base64)
- [#21](std-021-math-randomint-max.md) — Math._randomInt: Generate random integers — Math._randomInt(min, max) preferred over single-arg form
- [#23](std-023-promise-sleep-ms.md) — Promise._sleep: Async delay utility for tests, rate-limiting, and CLI — Promise._sleep(ms)
- [#25](std-025-process-prompt-for-asking-questions-on-the-command-line.md) — process._prompt: CLI user input with autocomplete, character masking, and choice lists
- [#26](std-026-identify-functions-self-always-false-always-empty-etc.md) — Identity functions: Function._noop, Boolean._false/_true, Object._self, Object._null — functional programming primitives
- [#27](std-027-date-tolocalisostring-dateornull.md) — Date._toLocalISOString: Format dates as ISO strings with local time and timezone offset instead of UTC
- [#39](std-039-object-trim-obj-to-remove-undefined-values.md) — Object._trim: Return new object with all undefined properties removed — useful for APIs and serialization
- [#47](std-047-promise-queue-keep-an-ongoing-queue-of-a-fixed-size.md) — Promise._queue: Continuous task queue with fixed concurrency limit — push tasks as earlier ones complete

## syntax

- [#1](syntax-001-const-let.md) — var, let, and const: var for module-scope globals, let for function/block-scope (prefer immutable references), const only for true constants like PI
- [#3](syntax-003-no-async-try-catch.md) — No async try/catch: Use .catch() for async errors, try/catch only for short sync parsing blocks
- [#5](syntax-005-else-with-extreme-prejudice.md) — Minimize else: Prefer early returns, switch, and extracting branches into functions — else is discouraged, not banned, but the exception proves the rule
- [#7](syntax-007-expressions-not-allowed-in-template-strings.md) — No expressions in template strings: Template literals allow only variable/property access — no function calls, math, or nested templates
- [#8](syntax-008-no-meta-programming-subscripting-on-imports-exports.md) — No dynamic imports/exports: All imports and exports must be explicit by name — no Object.assign, dynamic keys, or runtime subscripting
- [#12](syntax-012-package-structure.md) — Package structure: Packages use mypkg.js at root with lib/ subdirectory, proper exports for Node and browser
- [#13](syntax-013-package-main-init-macros-and-side-effects.md) — main, init, and side effects: All side effects must live in main() or init() — top-level code must be statically analyzable
- [#15](syntax-015-one-operation-per-line-more-or-less.md) — One operation per line: Each statement performs one distinct operation — no chaining side effects or stacking assignments
- [#20](syntax-020-no-mixing-implicit-and-explicit-object-structuring.md) — No mixed object shorthand: Object literals must use all explicit key:value pairs or all shorthand — never mix both styles
- [#22](syntax-022-require-the-underscore-delimiter-for-numbers-over-9000.md) — Underscore delimiters for large numbers: Numbers over 9000 must use underscore separators in groups of three (10_000, not 10000)
- [#29](syntax-029-not-allowed-to-await-non-async-chain.md) — No await chaining: Each await must be its own statement — no chaining sync property access after an awaited call
- [#30](syntax-030-ajscript-is-strictly-strongly-typed-but-not-statically-typed.md) — Strict and strong typing: No type coercion — variables keep their type; use var shadowing to change types, not reassignment
- [#31](syntax-031-if-statements-only-allow-single-boolean-expressions.md) — Single boolean per if: Break complex conditions into named variables — if statements take only one simple boolean expression
- [#36](syntax-036-if-statements-only-allow-boolean-and-nullish-expressions-not-falsey-ones.md) — No falsey conditionals — truthiness allowed for nullish: Use explicit comparisons for numbers/strings (arr.length === 0) — but truthiness checks are fine for nullish values (objects, DOM returns, optional params)
- [#37](syntax-037-no-ternary-shorthand-expressions.md) — No ternary expressions: No ternary operator — use if statements and named variables for conditional logic
- [#50](syntax-050-import-and-export-default-no-require.md) — ES modules only: Use import/export syntax, not CommonJS require() — supported everywhere now
- [#51](syntax-051-3-space-tabs-seriously.md) — Tabs displayed as 3 spaces: Use tab characters for indentation, displayed as 3-space width — use literal spaces only when tabs can't be used
- [#53](syntax-053-type-system-duck-typing-type-drafting-and-narrowing.md) — Type system: Duck typing, auto-drafted type comments, concrete types, return type narrowing, transitive narrowing
- [#54](syntax-054-function-rules-naming-chaining-async-void-and-special-functions.md) — Function rules: camelCase names, no chaining after call, async/void rules, no generators, main/create/init conventions
- [#55](syntax-055-variable-declarations-var-shadowing-and-constants.md) — Variable declarations: var for module-scope, let for function/block-scope, shadow with let re-declaration to change types, ALL_CAPS for constants
- [#56](syntax-056-expression-types-capture-rules-and-accessor-chaining.md) — Expression rules: All expressions must be captured, accessors can chain on new lines, no complex subscript expressions
- [#57](syntax-057-string-and-template-literal-rules.md) — String rules: Double quotes for all strings — backtick templates only when interpolation is needed or the string contains double quotes — no single quotes
- [#60](syntax-060-keywords-reserved-words-operators-and-syntax-characters.md) — Keywords and syntax characters: 30 keywords, reserved/unused words, permitted operators, string quotes, bitwise ops, shebang, void disambiguation
- [#61](syntax-061-return-something-or-return-nothing.md) — Return values must be meaningful: Every return must convey meaning to the caller — use bare return to exit, never return a discarded value
- [#62](syntax-062-always-await-before-returning-a-promise.md) — Always await before returning: Never return an un-awaited promise — omitting await hides bugs when you later add logic before the return
- [#63](syntax-063-no-nested-parentheses.md) — No nested parentheses: Extract sub-expressions into named variables — if an expression needs inner parens, it has too many operations
- [#65](syntax-065-no-worthless-abstractions-no-thin-wrappers-use-namespace-objects.md) — No thin wrappers, use namespace exports: Don't wrap a call without adding value — export namespace objects (User.create) not bare functions (createUser)
- [#71](syntax-071-esm-exports-with-cjs-compatibility-no-top-level-await-in-libraries.md) — ESM exports with CJS compat: Export default namespace + reduplicate named exports for CJS — no top-level await in libraries
