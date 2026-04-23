---
name: DOM text safety — no innerHTML
description: Use textContent, innerText, or insertAdjacentText for user/API content — never innerHTML or manual HTML string building
type: browser
issue: 75
---

# DOM text safety — never innerHTML for user-controlled content

MUST: use `innerText`, `textContent`, or `insertAdjacentText` for any text that comes from user input or API responses. Never build HTML strings manually.

Before:
```js
// ❌ manual escaping is easy to forget and brittle
el.innerHTML = `<p>${escapeHTML(apiData.message)}</p>`;
```

After:
```js
// ✅ safe — no XSS risk, no manual escaping
el.textContent = "";
let p = document.createElement("p");
p.innerText = apiData.message;
el.appendChild(p);
```

Use `insertAdjacentText` to append text nodes without clearing siblings:

```js
el.insertAdjacentText("beforeend", label);
```
