import waitUtility from "../../src/utility/wait";

class ClickUtility {
  async clickElement(page, element) {
    try {
      await page.waitForSelector(element);
      await page.click(element);
    } catch (errorMessage) {
      throw new Error(`Unable to click on locator ${element} ${errorMessage}`);
    }
  }

  async clickElementByXpath(page, element) {
    try {
      await page.waitForXPath(element, { visible: true });
      const elements = await page.$x(element, { visible: true });
      await elements[0].click();
    } catch (e) {
      throw new Error(`Unable to click element with xpath ${element} , ${e}`);
    }
  }
}
export default new ClickUtility();
