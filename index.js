"use strict"

const is = require("@sindresorhus/is")

module.exports = generator => {
	is.assert.generator(generator)

	return [...generator]
}

module.exports.async = async generator => {
	is.assert.any([is.generator, is.asyncGenerator], generator)

	const result = []
	for await (const value of generator) {
		result.push(value)
	}

	return result
}
