import { Test, WebComponent } from '../index';
import Page from '../page_objects/page';

Test.Suite('Debug Suite', () => {

	Test.Before(() => {

		Page.open();

	});

	Test.TestCase('Test Case 1', () => {

		const aboutLink = new WebComponent('//a[.="About"]');

		aboutLink.waitForExist();
		aboutLink.click();

		Page.About.UI.missionStatementSection.waitForDisplayed();
		Page.About.UI.missionStatementSection.drawHighlight();

	});

});