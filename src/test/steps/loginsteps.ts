import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('I am on the login page', async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
});

When('I enter {string} and {string} credentials', async function (username: string, password: string) {
    await page.fill('#user-name', username);
    await page.fill('#password', password);
});

When('I click on the login button', async function () {
    //await page.locator('[data-test="login-button"]').click();
      await page.click('#login-button');
});

Then('I should be logged in successfully', async function () {
    await expect(page.locator('.title')).toHaveText('Products');
    await browser.close();
});