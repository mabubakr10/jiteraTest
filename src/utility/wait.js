class Wait {
  static async waitForElement(page, element) {
    await page.waitForSelector(element)
  }

  static async elementExist(page, element) {
    try {
      await page.waitForSelector(element, { visible: true })
    } catch (errorMessage) {
      throw new Error('Element is not visible on the website with locator' + element)
    }
  }

  static async elementExistXpath(page, element) {
    try {
      await page.waitForTimeout(2000)
      await page.waitForXPath(element, { visible: true })
    } catch (errorMessage) {
      throw new Error(`Element is visible on the website with xpath ${element}, error message ${errorMessage}`)
    }
  }

  static async waitForElementXpath(page, element, time) {
    try {
      await page.waitForXPath(element, { visible: true, timeout: time })
    } catch (errorMessage) {
      throw new Error(`Element is not visible on the website with xpath ${element}, error message ${errorMessage}`)
    }
  }
}

export default Wait
