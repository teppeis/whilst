whilst
====

[![Greenkeeper badge](https://badges.greenkeeper.io/teppeis/whilst.svg)](https://greenkeeper.io/)

While loop for async function with Promise 

[![NPM version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![build status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
![MIT License][license]

## Install

```console
$ npm install whilst
```

## Usage

```js
let result = [];
let i = 0;

whilst(() => i < 3, () => {
  result.push(i);
  return Promise.resolve(i++);
}).then(finalResult => {
  assert.deepEqual(result, [0, 1, 2]);
  assert.equal(finalResult, 2);
});
```

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/whilst.svg
[npm-url]: https://npmjs.org/package/whilst
[node-version]: https://img.shields.io/badge/Node.js%20support-v4,v6+-brightgreen.svg
[travis-image]: https://travis-ci.org/teppeis/whilst.svg?branch=master
[travis-url]: https://travis-ci.org/teppeis/whilst
[deps-image]: https://david-dm.org/teppeis/whilst.svg
[deps-url]: https://david-dm.org/teppeis/whilst
[license]: https://img.shields.io/npm/l/whilst.svg
