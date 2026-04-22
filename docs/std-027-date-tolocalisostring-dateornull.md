# Date._toLocalISOString(dateOrNull)

We have `toISOString()`, but often it's more useful to show the local (offset) time in the ISO string rather than the UTC time.

Creating a proper conversion is a little more code than I would like for a `std` addition, but it is useful enough to warrant it:

```js
Date._toLocalISOString = function (dateOrStr) {
    var d;
    if (dateOrStr) {
      d = new Date(dateOrStr);
    } else {
      d = new Date();
    }

    // 2022-03-09
    var date = [ d.getFullYear(), p2(d.getMonth() + 1), p2(d.getDate()) ].join('-')
    // 00:59:01
    var time = [ d.getHours(), d.getMinutes(), d.getSeconds() ].map(p2).join(':');
    var ms = d.getMilliseconds().toString().padStart(3, "0");

    // -0500
    var offset = formatOffset(-d.getTimezoneOffset());

    return `${date}T${time}.${ms}${offset}`;
};

function formatOffset(minutes) {
    if (!minutes) {
      return "Z";
    }

    var h = Math.floor(Math.abs(minutes) / 60);
    var m = Math.abs(minutes) % 60;
    var offset = "-";
    if (minutes > 0) {
      offset = "+";
    }

    // +0500, -0730
    return offset + p2(h) + p2(m);
}

function p2(x) {
    return String(x).padStart(2, "0");
}
```

See also: <https://github.com/therootcompany/tz.js>
