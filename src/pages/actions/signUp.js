import clickUtility from "../../utility/clickUtility";
import wait from "../../utility/wait";
import readUtility from "../../utility/readFile"
import locators from "../../locators/guruLocators.json"
import inputUtility from "../../utility/input"
import faker from "../../utility/faker";
import customerData from "../../data/newCustomerData.json"
import { expect } from 'chai'

let userEmail, userPassword, emailNewCustomer

class SignUp {
    async visitUrl(page) {
        await page.goto(this.loginData.url, {
            waitUntil: "domcontentloaded",
            timeout: 100000,
        });
    }

    async readFile(filename, key) {
        const loginData = await readUtility.readFileWithKey(filename, key);
        this.loginData = loginData;
    }

    async visitHere(page) {
        await wait.elementExist(page, locators.visitHere)
        await clickUtility.clickElement(page, locators.visitHere)
    }

    async signUpEmail(page) {
        await wait.elementExist(page, locators.emailId)
        await inputUtility.enterText(page, locators.emailId, faker.randomEmail)
    }

    async clickSubmit(page) {
        await wait.elementExist(page, locators.submitBtn)
        await clickUtility.clickElement(page, locators.submitBtn)
    }

    async getEmailPassword(page) {
        await wait.elementExistXpath(page, locators.getEmail)
        userEmail = (await inputUtility.getElementTextUsingXpath(page, locators.getEmail)).trim()
        userPassword = (await inputUtility.getElementTextUsingXpath(page, locators.getPassword)).trim()
    }

    async newLogin(page) {
        await wait.elementExist(page, locators.enterEmail)
        await inputUtility.enterText(page, locators.enterEmail, userEmail)
        await inputUtility.enterText(page, locators.enterPassword, userPassword)
        await clickUtility.clickElement(page, locators.submitBtn)
        await wait.elementExist(page, locators.logoutBtn)
    }

    async verifyLoginSuccess() {
        await expect(locators.logoutBtn).to.exist;
    }

    async addNewCustomer(page) {
        await clickUtility.clickElement(page, locators.addNewCustomer)
    }

    async addNewCustomerDetails(page) {
        await wait.elementExistXpath(page, locators.addCustomerName)
        await inputUtility.enterTextXpath(page, locators.addCustomerName, customerData.newCustomer.customerName)
        await inputUtility.enterText(page, locators.addDOB, customerData.newCustomer.DOB)
        await inputUtility.enterText(page, locators.addAddress, customerData.newCustomer.address)
        await inputUtility.enterText(page, locators.addCity, customerData.newCustomer.city)
        await inputUtility.enterText(page, locators.addState, customerData.newCustomer.state)
        await inputUtility.enterText(page, locators.addPin, customerData.newCustomer.pin)
        await inputUtility.enterText(page, locators.addMobile, customerData.newCustomer.mobile)

        emailNewCustomer = faker.randomEmail
        await inputUtility.enterText(page, locators.addEmail, emailNewCustomer)
        await inputUtility.enterText(page, locators.addPassword, customerData.newCustomer.password)
        await clickUtility.clickElement(page, locators.submitForm)
    }

    async verifyCustomerDetails(page) {
        await wait.elementExistXpath(page, locators.getCustomerName)
        expect(await inputUtility.getElementTextUsingXpath(page, locators.getCustomerName)).to.contain(customerData.newCustomer.customerName);
        expect(await inputUtility.getElementTextUsingXpath(page, locators.getAddress)).to.contain(customerData.newCustomer.address);
        expect(await inputUtility.getElementTextUsingXpath(page, locators.getCity)).to.contain(customerData.newCustomer.city);
        expect(await inputUtility.getElementTextUsingXpath(page, locators.getState)).to.contain(customerData.newCustomer.state);
        expect(await inputUtility.getElementTextUsingXpath(page, locators.getPin)).to.contain(customerData.newCustomer.pin);
        expect(await inputUtility.getElementTextUsingXpath(page, locators.getMobile)).to.contain(customerData.newCustomer.mobile);
        expect(await inputUtility.getElementTextUsingXpath(page, locators.verifyEmail)).to.contain(emailNewCustomer);
    }
}

export default new SignUp()
