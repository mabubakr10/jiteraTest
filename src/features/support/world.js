import BrowserInitialize from './browserInitializer';
const { setWorldConstructor } = require('@cucumber/cucumber');
const browserInitialize = new BrowserInitialize();
class CustomWorld {
  async openBrowser () {
    // Initialize browser
    const { page, browser } = await browserInitialize.initialize()
    this.page = page
    this.browser = browser
  }

  async closeBrowser () {
    // close the browser
    await browserInitialize.browser.close();
  }

  async openCognitoWindow () {
    const { page2, browser2 } = await browserInitialize.initializeIncognito()
    this.page2 = page2
    this.browser2 = browser2
  }

  async closeCognitoWindow () {
    await browserInitialize.browser2.close();
  }
}
setWorldConstructor(CustomWorld);
