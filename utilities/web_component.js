export default class WebComponent {

	/**
	 * Returns a custom WebdriverIO web element
	 * @param {String} mapping - XPath for the desired element
	 */
	constructor(mapping) {
		this.element = $(mapping);
	}

	/**
	 * Fetch the child element on the page
	 * @param {String} selector - XPath for the child element
	 */
	$(selector){
		return new WebComponent(`${this.element.selector}${selector}`);
	}

	/**
	 * Fetch all child elements on the page with the matching selector
	 * @param {String} selector - XPath for child elements
	 */
	$$(selector){
		return this.$(selector).occurrences;
	}

	/**
	 * Add a value to an object found by given selector
	 * @param {String} value - Value to be added to the element
	 */
	addValue(value){
		this.element.addValue(value);
	}

	/**
	 * Clear a <textarea> or text <input> element’s value
	 */
	clearValue() {
		this.element.clearValue();
	}

	/**
	 * This issues a Webdriver click command for the selected element
	 */
	click() {
		this.element.click();
	}

	/**
	 * Double-click on the element
	 */
	doubleClick() {
		this.element.doubleClick();
	}

	/**
	 * Drag an item to a destination element
	 * @param {WebComponent} target - WebComponent to end drag and drop on
	 * @param {DragAndDropOptions} options - dragAndDrop command options
	 * @param {Number} duration - How long the drag should take place
	 */
	dragAndDrop(target, {options, duration}={}) {
		this.element.dragAndDrop(target.element, options, duration);
	}

	/**
	 * Draw a highlight border around the element
	 * @param {Number} ms - Time in milliseconds to highlight element
	 */
	drawHighlight(ms = 3000){
		
		const original_border = this.getCSSProperty('border');

		browser.execute(`arguments[0].style.border='5px solid red'`, this.element);
		browser.pause(ms);

		if(original_border != null) {
			browser.execute(`arguments[0].style.border='${original_border.value}'`, this.element);
		} else {
			browser.execute(`arguments[0].removeAttribute('style', 'border')`, this.element);
		}
	}

	/**
	 * Returns true if the element exists in the DOM
	 */
	get exists() {
		return this.isExisting();
	}

	/**
	 * Get an attribute from a DOM-element based on the attribute name
	 * @param {String} attribute_name - Element attribute to retrieve
	 */
	getAttribute(attribute_name){
		return this.element.getAttribute(attribute_name);
	}

	/**
	 * Get a css property for the element
	 * @param {String} css_property - CSS property name
	 */
	getCSSProperty(css_property){
		return this.element.getCSSProperty(css_property);
	}

	/**
	 * Get source code of specified DOM element
	 * @param {Boolean} include_selector_tag - If true it includes the selector element tag
	 */
	getHTML(include_selector_tag = true){
		return this.element.getHTML(include_selector_tag);
	}

	/**
	 * Determine an element’s location on the page, (0, 0) being the upper left
	 * @param {String} prop - Can be "x" or "y" to get a result value directly for easier assertions
	 */
	getLocation(prop){
		return this.element.getLocation(prop);
	}

	/**
	 * Get all element occurences that match provided selector 
	 */
	get occurrences() {
		const elements = [];

		for (let i = 1; i <= $$(this.element.selector).length; i++) {
			elements.push(new WebComponent(`(${this.element.selector})[${i}]`));
		}

		return elements;
	}

	/**
	 * Returns the value of the property for the element
	 * @param {String} property - Name of the element property to get
	 */
	getProperty(property){
		return this.element.getProperty(property);
	}

	/**
	 * Get the width and height for the element
	 */
	getSize() {
		return this.element.getSize();
	}

	/**
	 * Get tag name of the element
	 */
	getTagName() {
		return this.element.getTagName();
	}

	/**
	 * Get the text content from the element
	 */
	getText() {
		return this.element.getText();
	}

	/**
	 * Get the value of <textarea>, <select> or text <input> for the element
	 */
	getValue() {
		return this.element.getValue();
	}

	/**
	 * Return true if the element exists, is visible, is within viewport, its center is not overlapped with another element, and is not disabled
	 */
	isClickable() {
		this.element.isClickable();
	}

	/**
	 * Return true if the element is displayed
	 */
	isDisplayed() {
		return this.element.isDisplayed();
	}

	/**
	 * Return true if the element is partially visible and within the viewport
	 */
	isDisplayedInViewport() {
		return this.element.isDisplayedInViewport();
	}

	/**
	 * Return true if the element is enabled
	 */
	isEnabled() {
		return this.element.isEnabled();
	}
	
	/**
	 * Return true if the element matches the provided element
	 * @param {WebComponent} element - Element to compare with
	 */
	isEqual(element) {
		return this.element.isEqual(element.element);
	}

	/**
	 * Returns true if the element exists in the DOM
	 */
	isExisting() {
		return this.element.isExisting();
	}

	/**
	 * Return true if the element currently has focus
	 */
	isFocused() {
		return this.element.isFocused();
	}

	/**
	 * Returns true if the <option> or <input> element of type checkbox or radio is currently selected
	 */
	isSelected() {
		return this.element.isSelected();
	}

	/**
	 * Move the mouse by an offset of the specified element
	 * @param {Number} x_offset
	 * @param {Number} y_offset
	 */
	moveTo({x_offset=0, y_offset=0}={}){
		this.element.moveTo(x_offset, y_offset);
	}

	/**
	 * Save a screenshot of an element to a PNG file on your OS
	 * @param {String} filename - {ath to the generated image (.png suffix is required) relative to the execution directory
	 */
	saveScreenshot(filename){
		this.element.saveScreenshot(filename);
	}

	/**
	 * Scroll element into the viewport
	 * @param {Object, Boolean} options - Options for Element.scrollIntoView()
	 */
	scrollIntoView(options = true){
		this.element.scrollIntoView(options);
	}

	/**
	 * Select <option/> with a specific value
	 * @param {String} attribute - Attribute of <option/> element to get selected
	 * @param {String} value - Value of <option/> element to get selected
	 */
	selectByAttribute(attribute, value){
		this.element.selectByAttribute(attribute, value);
	}

	/**
	 * Select <option/> with a specific index
	 * @param {Number} index - Option index
	 */
	selectByIndex(index){
		this.element.selectByIndex(index);
	}

	/**
	 * Select <option/> with displayed text matching the argument
	 * @param {String} text - Text of <option/> element to get selected
	 */
	selectByVisibleText(text){
		this.element.selectByVisibleText(text);
	}

	/**
	 * Send a sequence of key strokes to an element (clears value before)
	 * @param value - Value to be added
	 */
	setValue(value){
		this.element.setValue(value);
	}

	/**
	 * Wait for function options
	 * @typedef {Object} WaitForOptions
	 * @property {Number=} ms - Time to wait in milliseconds
	 * @property {String=} error - Error message to throw if wait conditions are not met within time limit
	 * @property {Number=} interval - Time to wait between checks in milliseconds
	 */

	/**
	 * Generic wait for callback function to return true
	 * @param {Number} ms - Time to wait for callback to return true in milliseconds
	 * @param {function} callback - Function to execute and wait to return true
	 * @param {String} error_message - Error message to throw if callback does not return true within time limit
	 * @param {Number} interval - Time to wait between callback check in milliseconds
	 */
	#waitFor(ms, interval, callback, error_message) {
		const end_time = Date.now() + ms;

		while(Date.now() < end_time && callback() != true) {
			browser.pause(interval);
		}

		if(!callback()) {
			throw new Error(error_message);
		}
	}

	/**
	 * Wait for element to become clickable, otherwise throw an error
	 * @param {...WaitForOptions} param0 - {@link WaitForOptions}
	 */
	waitForClickable({ms = 15000, error = `${this.element.selector} was not clickable within timelimit of ${ms}`, interval = 100}={}) {
		this.#waitFor(ms, interval, () => {return this.isClickable()}, error);
	}

	/**
	 * Wait for element to be displayed, otherwise throw an error
	 * @param {...WaitForOptions} param0 - {@link WaitForOptions}
	 */
	waitForDisplayed({ms = 15000, error = `${this.element.selector} was not displayed within timelimit of ${ms}`, interval = 100}={}){
		this.#waitFor(ms, interval, () => {return this.isDisplayed()}, error);
	}

	/**
	 * Wait for element to not be displayed, otherwise throw an error
	 * @param {...WaitForOptions} param0 - {@link WaitForOptions}
	 */
	waitForNotDisplayed({ms = 15000, error = `${this.element.selector} was still displayed within the time limit of ${ms}`, interval = 100}={}){
		this.#waitFor(ms, interval, () => {return !this.isDisplayed()}, error);
	}

	/**
	 * Wait for element to become enabled, otherwise throw an error
	 * @param {...WaitForOptions} param0 - {@link WaitForOptions}
	 */
	waitForEnabled({ms = 15000, error = `${this.element.selector} was not enabled within the time limit of ${ms}`, interval = 100}={}){
		this.#waitFor(ms, interval, () => {return this.waitForEnabled()}, error);
	}

	/**
	 * Wait for element to become disabled, otherwise throw an error
	 * @param {...WaitForOptions} param0 - {@link WaitForOptions}
	 */
	waitForDisabled({ms = 15000, error = `${this.element.selector} was not disabled within the time limit of ${ms}`, interval = 100}={}){
		this.#waitFor(ms, interval, () => {return !this.isEnabled()}, error);
	}

	/**
	 * Wait for element to exist, otherwise throw an error
	 * @param {...WaitForOptions} param0 - {@link WaitForOptions}
	 */
	waitForExist({ms = 15000, error = `${this.element.selector} did not exist within the time limit of ${ms}`, interval = 100}={}){
		this.#waitFor(ms, interval, () => {return this.isExisting()}, error);
	}
	
	/**
	 * Wait for element to not exist, otherwise throw an error
	 * @param {...WaitForOptions} param0 - {@link WaitForOptions}
	 */
	waitForNotExist({ms = 15000, error = `${this.element.selector} still existed within the time limit of ${ms}`, interval = 100}={}){
		this.#waitFor(ms, interval, () => {return !this.isExisting()}, error);
	}

}