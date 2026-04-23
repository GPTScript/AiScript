---
name: Console method conventions
description: console.info() for output, .error() for errors, .debug() for DEBUG, .warn() for recoverable — never .log() in prod
type: js-style
issue: 2
---

# console -> info, error, etc

- `console.log()` development only - never commit to prod
- `console.info()` for regular output
- `console.error()` for error output
- `console.debug()` for when `process.env.DEBUG = true`
- `console.warn()` for when we should be sending someone an email that something is wrong, but we can handle it in a way that doesn't require crashing the program and we can't return a hard error
