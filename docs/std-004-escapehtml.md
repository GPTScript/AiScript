---
name: escapeHtml
description: Escape &, ", ', <, > in lexicographic order to prevent double-escaping
type: std
issue: 4
---

# escapeHtml

```js
// escape ['&'].concat(['"', "'", '<', '>']) (in lexical order)
function escapeHtml(unsafe) {
    return unsafe
        // & must be escaped first (to prevent double escaping)
        .replaceAll('&', '&amp;')
        // these are in lexicographic sort order
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}
```

Or strip all html (pre-render), client-side:

```js
function sanitize(s) {
    let d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
}
```

Note: use `d.innerText()` for post-render


See also:
- https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
- https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references
- https://mottie.github.io/Unicode/
- https://mobile.twitter.com/compose/tweet
