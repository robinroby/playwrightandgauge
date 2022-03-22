/* globals gauge*/

"use strict";

const assert = require("assert");
const playwright = require("/nodejs/node_modules/playwright");
const {LoginPage} = require ("Login");

let browser, context, page;
const pw_webpage = "https://playwright.dev";
const k6_webpage = "https://test.k6.io";

// --------------------------
// Gauge step implementations
// --------------------------

//playwright example
step("Check Webpage <pw_webpage>.", async (pw_webpage) => {  
  page = await context.newPage();
  await page.goto(pw_webpage);
});

step("Say hello to <pw_webpage>", async (pw_webpage) => {page.on('dialog', async (dialog) => {
    console.log(dialog.message("Hello to " + pw_webpage));
    await dialog.dismiss();
  });
  let content = await page.content();
  assert.ok(await content.includes("Playwright"));
});

//k6 example
step("Navigate to Webpage <k6_webpage>", async (k6_webpage) => {
  page = await context.newPage();
  await page.goto(k6_webpage);
	page.on('dialog', async (dialog) => {
    console.log(dialog.message("Hello to " + k6_webpage));
    await dialog.dismiss();
  });
  let content = await page.content();
  assert.ok(await content.includes("k6"));
});

//Xray playwright example
step("Login with valid credentials", async () => {
  page = await context.newPage();
  let loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("demo","mode");
  let name = await loginPage.getInnerText();
  console.log(name);
  //Playwright test only
  //await expect(name).toHaveText(['succeeded', 'logout']);
});


step("Login with invalid credentials", async () => {
  page = await context.newPage();
	let loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("demo","mode1");
  let name = await loginPage.getInnerText();
  console.log(name);
  //Playwright test only 
  //await expect(name).toHaveText(['failed', 'Invalid']);
});


//TodoMV

// ---------------
// Execution Hooks
// ---------------
beforeSuite(async () => {
  browser = await playwright.chromium.launch();  
});

afterSuite(async () => {
  await browser.close();
});

beforeScenario(async () => {
  context = await browser.newContext();

    // Code for before scenario
});

afterScenario(async () => {
  await context.close();
});



