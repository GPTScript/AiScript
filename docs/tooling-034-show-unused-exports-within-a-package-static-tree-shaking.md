# Show unused exports, within a package (static tree-shaking)

When we're creating a library, all exports are assumed to be valid - it's more important that they're provided than that they're used.

When we're writing an application it's useful to identify code that is exported, but never used.

- [ ] Look across the package, recursively
- [ ] Don't count test files
- [ ] Some rule should prevent (or warn on?) dynamic use of exported functions
