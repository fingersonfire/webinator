class Test {

	/**
	 * Function to run after the tests in the suite have finished running
	 * @param {function} callback
	 */
	After(callback) {
		return after(() => callback());
	}

	/**
	 * Function to run after each test in the suite
	 * @param {function} callback
	 */
	AfterEach(callback) {
		return afterEach(() => callback());
	}

	/**
	 * Function to run at the start of the suite before tests run
	 * @param {function} callback 
	 */
	Before(callback) {
		return before(() => callback());
	}

	/**
	 * Function to run before each test in the suite
	 * @param {function} callback 
	 */
	BeforeEach(callback) {
		return beforeEach(() => callback());
	}

	/**
	 * Function conaining all test functions for the suite
	 * @param {String} name - Name of the test suite
	 * @param {function} callback 
	 */
	Suite(name, callback) { 
		return describe(name, () => callback()); 
	}

	/**
	 * Function containing the test steps for a particular test
	 * @param {String} name - Name of the test case
	 * @param {function} callback
	 */
	TestCase(name, callback) {
		return it(name, () => callback());
	}

}

export default new Test