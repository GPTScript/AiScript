# Promise._parallel: run async functions in parallel

- [`Promise._sleep(n)`](https://github.com/GPTScript/AiScript/issues/23)
- [`Promise._map(arr, fn)`](https://github.com/GPTScript/AiScript/issues/14)
- **`Promise._parallel(n, arr, fn)`**
- [`Promise._queue(n).push(task)`](https://github.com/GPTScript/AiScript/issues/47)

Like [`Promise._map(arr, fn)`](https://github.com/GPTScript/AjScript/issues/14), but runs up to `n` tasks at the same time until all the tasks are done.

```js
Promise._parallel = async function (limit, arr, fn) {
    let index = 0;
    let actives = [];
    let results = [];

    limit = Math.min(limit, arr.length);

    function launch() {
        let _index = index;
        let p = fn(arr[_index], _index, arr);

        // some tasks may be synchronous
        // so we must push before removing
        actives.push(p);

        p.then(function _resolve(result) {
            let i = actives.indexOf(p);
            actives.splice(i, 1);
            results[_index] = result;
        });

        index += 1;
    }

    // start tasks in parallel, up to limit
    for (; actives.length < limit; ) {
        launch();
    }

    // keep the task queue full
    for (; index < arr.length; ) {
        // wait for one task to complete
        await Promise.race(actives);
        // add one task again
        launch();
    }

    // wait for all remaining tasks
    await Promise.all(actives);

    return results;
};
```

# Test

There should always be at least `n` (4 in this case) things running at a time, and at the end all of the results should be in order.

`parallel.test.js`:

```js
"use strict";

require("./ajscript.js");

async function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let results = await Promise._parallel(3, arr, function (x) {
        return new Promise(function (resolve) {
            console.log("starting", x);
            setTimeout(function () {
                console.log("done", x);
                resolve(x);
            }, Math.random() * 2000);
        });
    });
    console.info(results);
}

main()
    .then(function () {
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err.stack || err);
        process.exit(1);
    });
```
