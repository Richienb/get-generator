# get-generator [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/get-generator/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/get-generator)

Get the value of a generator function.

[![NPM Badge](https://nodei.co/npm/get-generator.png)](https://npmjs.com/package/get-generator)

## Install

```sh
npm install get-generator
```

## Usage

```js
const getGenerator = require("get-generator");

function* generator() {
	yield 1;
	yield 2;
	yield 3;
}

getGenerator(generator());
//=> [1, 2, 3]

getGenerator(generator(), 2);
//=> [1, 2]
```

## API

### getGenerator(generator)
### getGenerator.async(generator)

#### generator

Type: `generator` or `async generator`

The generator to get the value of. Asynchronous generators are only supported by `getGenerator.async` which returns a promise.
