import { About } from './index';
import { API, WebComponent } from '../index';

class Page {

	constructor() {
		this.UI = Page.UI;
		this.About = About;
	}

	/**
	 *  If a baseUrl is specified in the config, it will be prepended to the url parameter using node's url.resolve() method
	 * @param {String} path - Path to navigate to
	 */
	open(path = '', view_mode = 'desktop') {
		browser.url(path);

		const FULL_URL = browser.getUrl();
		const PAGE_STATUS = API.getPageStatus(FULL_URL);

		if(PAGE_STATUS != 200) {
			throw new Error(`${FULL_URL} returned ${PAGE_STATUS} code`);
		}

		switch(view_mode) {
			case 'desktop':
				browser.maximizeWindow();
				break;
			case 'mobile':
				browser.setWindowSize(width, height);
			default:
				break;
		}
	}

}

Page.UI = class {

	static get element() { return new WebComponent('//XPath') }

}

export default new Page