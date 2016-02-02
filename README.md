whilst [![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url]
====

> While loop for async function with Promise 

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
[travis-image]: https://travis-ci.org/teppeis/whilst.svg?branch=master
[travis-url]: https://travis-ci.org/teppeis/whilst
[deps-image]: https://david-dm.org/teppeis/whilst.svg
[deps-url]: https://david-dm.org/teppeis/whilst
