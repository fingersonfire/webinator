import { WebComponent } from '../../index';

class About {

	constructor() {
		this.UI = About.UI;
	}

}

About.UI = class {

	static get missionStatementSection() { 
		return new WebComponent('//*[@id="module-anchor-statement-mission-statement"]') 
	}

}

export default new About