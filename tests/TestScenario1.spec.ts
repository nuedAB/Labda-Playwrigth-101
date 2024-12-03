import { test, expect } from '@playwright/test';

test('Playwright 101: Simple Form Demo', async ({ page }) => {


  await page.goto('https://www.lambdatest.com/selenium-playground');
  await  page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');

  await page.click('text=Simple Form Demo');

  await expect(page).toHaveURL(/.*simple-form-demo/);
  await page.waitForTimeout(1500);

  const message = 'Welcome to LambdaTest';

  await page.fill('#user-message', message);

  await page.click('#showInput');

  const displayedMessage = await page.locator('#message').textContent();
  expect(displayedMessage?.trim()).toBe(message);
});
