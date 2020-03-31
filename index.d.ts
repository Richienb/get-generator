declare const getGenerator: {
	/**
	 * Get the value of a generator function.
	 * @param generator The generator to get the value of.
	 * @example
	 * ```
	 * const getGenerator = require("get-generator");
     *
     * function* generator() {
	 *  yield 1;
     *  yield 2;
     *  yield 3;
     * }
     *
     * getGenerator(generator());
     * //=> [1, 2, 3]
	 * ```
	*/
	<ValueType>(generator: Generator<ValueType>, amount?: number): ValueType[]

	/**
	 * Get the value of an asynchronous generator function.
	 * @param generator The asynchronous generator to get the value of.
	 * @example
	 * ```
     * const getGenerator = require("get-generator");
     *
     * async function* generator() {
     *  yield 1;
     *  yield 2;
     *  yield 3;
     * }
     *
     * (async () => {
     *  await getGenerator.async(generator());
     *  //=> [1, 2, 3]
     * })();
	 * ```
	*/
	async<ValueType>(generator: Generator<ValueType> | AsyncGenerator<ValueType>, amount?: number): Promise<ValueType[]>
}

export = getGenerator
