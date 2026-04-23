---
name: Every rule needs a counter-rule
description: When adding a constraint, define what keeps it in balance — a rule applied blindly becomes rule slop
type: meta
issue: 69
---

# Every rule needs a counter-rule

> "For every metric, a counter metric" — [Axiom 15](#28)

When a metric becomes a target, it ceases to be a valid metric. Any rule — style, lint, axiom — can be applied poorly if followed without understanding why it exists. For every constraint introduced, the counter-constraint that keeps the balance should also be stated.

> "Special cases aren't special enough to break the rules.
> Although practicality beats purity." — Zen of Python

The exception proves the rule: if you can't name the exception, you don't understand the rule.

See also: #68 (deliberate constraints define craft — but constraints need limits too).

## Rules and their counter-rules in AjScript

| Rule | Counter-rule |
|------|-------------|
| No try/catch for async (#3) | Short sync parsing blocks (JSON.parse) are the explicit exception |

This table should grow as counter-rules are identified. Each rule's ADR should name its own counter-rule (see #69 as the meta-rule for this).
