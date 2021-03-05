class Assert {

	/**
	 * Verify that the values are equal to each other
	 * @param {*} actual - Actual value to compare against
	 * @param {*} expected - Value to compare to original
	 * @param {String=} error - Error to throw if check returns false
	 */
	isEqual(actual, expected, error = `The actual and expected values did not match: ${actual} | ${expected}`) {
		if(actual != expected) {
			throw new Error(error);
		}	
	}

	/**
	 * Verify that the expression evaluates to true
	 * @param {*} expression - Expression to evaluate that returns bool
	 * @param {String} error - Error to throw if check returns false
	 */
	isTrue(expression, error = `The expression returned false`) {
		if(!expression) {
			throw new Error(error);
		}
	}

}

export default new Assert