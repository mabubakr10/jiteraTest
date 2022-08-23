import { When, Given, Then } from "@cucumber/cucumber";
import login from "../../pages/actions/signUp";

Given(/^script loads data from "([^"]*)" with "([^"]*)"$/, async function (filename, key) {
    await login.readFile(filename, key);
});

When("the user visits the guru url", { timeout: 50000 }, async function () {
    await login.visitUrl(this.page);
});

When("the user clicks the visit here link", { timeout: 50000 }, async function () {
    await login.visitHere(this.page);
});

When("the user adds random email to sign up", { timeout: 50000 }, async function () {
    await login.signUpEmail(this.page);
});

When("the user clicks submit button to sign up", { timeout: 50000 }, async function () {
    await login.clickSubmit(this.page);
});

When("the user stores the newly generated email and password", { timeout: 50000 }, async function () {
    await login.getEmailPassword(this.page);
});

When("the user logs in using newly generated email and password", { timeout: 50000 }, async function () {
    await login.newLogin(this.page);
});

Then("the user verifies the successful log in", { timeout: 50000 }, async function () {
    await login.verifyLoginSuccess(this.page);
});

When("the user clicks on add new customer", { timeout: 50000 }, async function () {
    await login.addNewCustomer(this.page);
});

When("the user adds details for the new customer and submits", { timeout: 50000 }, async function () {
    await login.addNewCustomerDetails(this.page);
});

Then("the user verifies details for the new customer", async function () {
    await login.verifyCustomerDetails(this.page);
});

