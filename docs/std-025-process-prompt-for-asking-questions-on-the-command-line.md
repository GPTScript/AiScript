# process._prompt for asking questions on the command line

I'm not quite sure this is _the_ implementation, but probably something close to this.

I'd actually much prefer to have inline autocomplete, like [`fish`](https://webinstall.dev/fish), but I've done that before and it's no small feat - certainly outside of the "almost bare metal" approach of AjScript.

```js
/**
 * @param {String} query
 * @param {Object} options
 * @param {Array<String>} [options.choices]
 * @param {Boolean} [options.mask]
 */
process._prompt = async function (query, options) {
  let Readline = require("readline");

  let completer;
  if (options?.choices) {
    /**
     * @param {String} line
     */
    completer = function (line) {
      let completions = options.choices || [];
      let hits = completions.filter(function (c) {
        return c.startsWith(line);
      });
      if (!hits.length) {
        hits = completions;
      }
      return [hits, line];
    };
  }

  let rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer,
  });

  if (options?.mask) {
    rl.input.on("keypress", function (_char, _modifiers) {
      // _char = "e"
      // _modifiers = { sequence: 'e', name: 'e', ctrl: false, meta: false, shift: false }
      let len = rl.line.length;
      // place cursor at the beginning of the prompt
      Readline.moveCursor(rl.output, -len, 0);
      // clear right of the cursor / prompt
      Readline.clearLine(rl.output, 1);
      // mask with "*"
      rl.output.write("*".repeat(len));
    });
  }

  let answer = await new Promise(function (resolve) {
    return rl.question(query ?? "", resolve);
  });

  // TODO what if we need control over closing?
  // ex: Promise.race([getPrompt, getFsEvent, getSocketEvent]);
  rl.close();
  return answer;
};
```

Inspired by <https://github.com/google/zx/blob/51fb6d5d710fcd0bfcc7bc905066ac0fa042467c/index.mjs#L143>.
