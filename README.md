# private-object
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Create an immutable enumerable object. Uses ES6 Symbols, getters / setters and
`Object.freeze`.

## Installation
```bash
$ npm install private-object
```

## Usage
```js
const priv = require('private-object')
var boop = priv({foo: 'bar'})

console.log(boop)
// => {}

console.log(boop.foo)
// => 'bar'

console.log(Object.keys(boop))
// => []

boop.bar = 3
console.log(boop, boop.bar)
// => {}, undefined

boop.foo = 'Tobi'
console.log(boop.foo)
// => 'Tobi'
```

## Why?
This is a small experiment to see how far private properties can be pushed and
locked down in ES6.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/private-object.svg?style=flat-square
[npm-url]: https://npmjs.org/package/private-object
[travis-image]: https://img.shields.io/travis/yoshuawuyts/private-object.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/private-object
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/private-object.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/private-object?branch=master
[downloads-image]: http://img.shields.io/npm/dm/private-object.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/private-object
