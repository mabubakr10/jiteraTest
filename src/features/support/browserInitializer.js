import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";
var { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(120000);
class BrowserInitialize {
  async initialize(timeout) {
    puppeteer.use(stealthPlugin());
    this.browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 0,
      executablePath: process.env.PUPPETEER_EXEC_PATH,
      args: [
        "--start-fullscreen",
        "--ignore-certificate-errors",
        "--no-sandbox",
        "--enable-blink-features=HTMLImports",
        "--disable-setuid-sandbox",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        "--disable-background-timer-throttling",
        "--disable-renderer-backgrounding",
        "--override-plugin-power-saver-for-testing=never",
        "--disable-extensions-http-throttling",
        "--disable-backgrounding-occluded-windows",
        '--shm-size=3gb'
      ],
      defaultViewport: null,
    });

    const pages = await this.browser.pages();
    this.page = pages[0];
    this.page.setDefaultNavigationTimeout();
    this.page.setDefaultTimeout();
    return { page: this.page, browser: this.browser };
  }

  async initializeIncognito() {
    this.browser2 = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 0,
      timeout: setDefaultTimeout(120000),
      executablePath: process.env.PUPPETEER_EXEC_PATH,
      args: [
        "--start-fullscreen",
        "--ignore-certificate-errors",
        "--no-sandbox",
        "--enable-blink-features=HTMLImports",
        "--disable-setuid-sandbox",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        "--disable-background-timer-throttling",
        "--disable-renderer-backgrounding",
        "--override-plugin-power-saver-for-testing=never",
        "--disable-extensions-http-throttling",
        "--disable-backgrounding-occluded-windows",
        "--shm-size=3gb",
        "--incognito",
      ],
      defaultViewport: null,
    });
    const pages = await this.browser2.pages();
    this.page2 = pages[0];
    this.page2.setDefaultNavigationTimeout(0);
    this.page2.setDefaultTimeout(0);
    return { page2: this.page2, browser2: this.browser2 };
  }
}
export default BrowserInitialize;
