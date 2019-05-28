# kill-firefox-tabs  [![Build Status](https://travis-ci.org/y-yudai/kill-firefox-tabs.svg?branch=master)](https://travis-ci.org/y-yudai/kill-firefox-tabs)

> Kill all Firefox tabs to improve performance

*Works on macOS*

When you run `kill-firefox-tabs` the Firefox tab processes are killed.

## CLI

```
$ npm install --global kill-firefox-tabs
```

```
$ kill-firefox-tabs --help

  Usage
    $ kill-firefox-tabs
```


## API

```
$ npm install kill-firefox-tabs
```

```js
const killFirefox = require('kill-firefox-tabs');

(async () => {
	await killFirefox();
	console.log('Killed tabs');
})();
```


## License

MIT © Yudai Yamamoto
