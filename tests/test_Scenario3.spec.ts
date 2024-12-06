import { test, expect } from '@playwright/test';

test('Playwright 101: Input Form Submit', async ({ page }) => {

  await page.goto('https://www.lambdatest.com/selenium-playground');

  await  page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');

  await page.click('text=Input Form Submit');

  await page.waitForTimeout(500);
  const submitButton = page.locator('button[type="submit"]').nth(1);
  await submitButton.click();

  const nameFieldError = page.locator('input[name="name"]:invalid');
  await expect(nameFieldError).toHaveCount(1);

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('#inputEmail4', 'johndoe@example.com');
  await page.fill('input[name="password"]', 'SecurePassword123');
  await page.fill('input[name="company"]', 'LambdaTest');
  await page.fill('input[name="website"]', 'https://www.example.com');
  await page.fill('input[name="city"]', 'San Francisco');
  await page.fill('input[name="address_line1"]', '123 LambdaTest Street');
  await page.fill('input[name="address_line2"]', '125 LambdaTest Street');
  await page.selectOption('select[name="country"]', { label: 'United States' });
  await page.fill('#inputState', 'California');
  await page.fill('input[name="zip"]', '94105');

  await submitButton.click();

  const successMessage = page.locator('.success-msg');
  await expect(successMessage).toHaveText(
      'Thanks for contacting us, we will get back to you shortly.'
  );
});