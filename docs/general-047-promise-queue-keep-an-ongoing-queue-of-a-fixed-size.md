# Promise._queue: keep an ongoing queue of a fixed size

- [`Promise._sleep(n)`](https://github.com/GPTScript/AiScript/issues/23)
- [`Promise._map(arr, fn)`](https://github.com/GPTScript/AiScript/issues/14)
- [`Promise._parallel(n, arr, fn)`](https://github.com/GPTScript/AiScript/issues/9)
- **`Promise._queue(n).push(task)`**

Like `Promise._parallel`, but for an ongoing queue of potentially different functions, which tasks are enqueued at different times.

```js
'use strict';

Promise._queue = function (limit) {
    let index = 0;
    let actives = [];
    let waiting = [];

    async function launch() {
        // start tasks in parallel, up to limit
        if (actives.length >= limit) {
            return;
        }
        if (waiting.length === 0) {
            return;
        }

        let _index = index;
        index += 1;

        let fn = waiting.shift();
        let p = fn(_index);

        // some tasks may be synchronous
        // so we must push before removing
        actives.push(p);

        p.then(function _resolve() {
            let i = actives.indexOf(p);
            actives.splice(i, 1);
        });

        // keep the active queue full, up to the limit
        launch();

        // let the caller know when *their* task is done
        return await p;
    }

    async function push(fn) {
        waiting.push(fn);
        await launch();
    }

    return { push };
};
```
