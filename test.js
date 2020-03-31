const test = require("ava")
const getGenerator = require(".")

function * generator() {
	yield 1
	yield 2
	yield 3
}

async function * asyncGenerator() {
	yield 1
	yield 2
	yield 3
}

test("main", async t => {
	t.deepEqual(getGenerator(generator()), [1, 2, 3])

	t.deepEqual(await getGenerator.async(asyncGenerator()), [1, 2, 3])
})
