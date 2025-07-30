# Webinator Automation Framework

## Installation
The below installation steps assume that you have `brew` installed for Mac or `chocolatey` on Windows and that you have the repository cloned locally. All commands will be ran inside your OS terminal (powershell on Winodws).


1. **OpenJDK/JRE** 
* Linux  
`sudo apt-get install openjdk-11-jre-headless`  
* Windows  
`choco install ojdkbuild11`  
* Mac  
`brew tap AdoptOpenJDK/openjdk`  
`brew cask install adoptopenjdk11`
---

2. **NVM**  
* Linux  
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`  
* Windows  
`choco install nvm`  
* Mac  
`brew update && brew install nvm`  
`mkdir ~/.nvm`  
Add the following lines to your ~/.bash_profile file:  
`export NVM_DIR=~/.nvm`  
`source $(brew --prefix nvm)/nvm.sh`  
---

3. **NodeJS**  
* Set your terminal's current working directory to the root of the repo and run:  
`nvm install`  
---

4. **Yarn**
* Follow the install instructions for your OS here: 
https://classic.yarnpkg.com/en/docs/install/
--- 

5. **Dependencies**   
`yarn install`  
<br/>
<br/>

## Page Objects
The page object model follows a navigation based hierarchy. The idea being that any call to a page object's element or function starts at the home page and class properties are mapped naturally. Having worked with newer automation engineers I can tell you it makes it much easier for them to jump in and start automating test cases.

Here's an example of how this looks in practice:
```javascript
class Page {

	constructor() {
		this.About = AboutPage;
		this.UI = Page.UI;
	}

	open() {
		// open the page
	}

}

Page.UI = class {

	static get moreInfoButton() { return new WebComponent('//XPath') }

}
```
<br/>
<br/>

## Test Cases
Due to the way that the page objects are built, accessors are organized in the same manner that you would access the page on the site. This makes it easier to translate written test case steps into automated steps for new engineers. It also provides an added level of readability to the test scripts, making code reviews easier as well.


```javascript
import { Test } from '../index';
import Page from '../page_objects/page';

Test.Suite('About Page', () => {

	Test.TestCase('Verify about page info accordian', () => {
		
		// Calling page object function
		Page.About.waitForPageToLoad();

		// Calling page object UI element
		Page.About.UI.moreInfoButton.click();

	});

});
```
<br/>
<br/>

## Licensing

MIT
