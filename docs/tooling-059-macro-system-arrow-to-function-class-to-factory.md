---
name: Macro system
description: On-save transforms — arrow expressions to function declarations, class statements to factory functions
type: tooling
issue: 59
---

# Macro system: arrow-to-function, class-to-factory

Split from #43 Language Draft — Macro System section.

Think of `prettier` - the macro parser and expander executes on save.

- Arrow Expressions to Functions
   ```js
   // 🤮
   const annoyMe = n => n + 1
   // or
   const annoyMe = (n) => {
     n + 1
   }
   ```
   ```js
   // 😉
   function annoyMe(n) {
     return n + 1
   }
   ```
- Class Statement to Factory Function
   ```js
   // 🫤
   class SelfLoathing {
     constructor() {
       this.name = "evil";
     }
     greet(other) {
       return `Hello ${other}, I'm ${this.name}`;
     }
   }
   ```
   ```js
   // 😉
   var SelfLoathing = {};
   SelfLoathing.create = function () {
     var s = {};

     s.name = "evil";

     s.greet = function (other) {
       return `Hello ${other}, I'm ${s.name}`;
     };

     return s;
   };
   // TODO how do we chose the name of `this` => `s`?
   // note: either `var s = { foo: bar, baz: quux }`
   //       or `var s = {}; s.foo = bar; s.baz = quux;`
   //       but not `var s = { foo: bar }; s.baz = quux;`
   ```
