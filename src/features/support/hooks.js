import { After, Before, Status } from '@cucumber/cucumber';

Before(async function () {
  await this.openBrowser();
});

const options = {
  path: 'reports/failedScreenshot.png',
  fullPage: true,
  omitBackground: false
}

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const url = await this.page.url();
    const title = await this.page.title();
    await this.page.on('console', (msg) => console.log('CONSOLE LOGS:' + msg.text()));
    await this.page.waitForTimeout(5000);
    const screenShot = await this.page.screenshot(options);
    this.attach(screenShot, 'image/png')
    this.attach(url)
    this.attach(title)
  }
  await this.closeBrowser();
});
