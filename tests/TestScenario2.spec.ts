import { test, expect } from '@playwright/test';

test('Move slider to 95', async ({ page }) => {

  await page.goto('https://www.lambdatest.com/selenium-playground');

  await page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');

  await page.click('text=Drag & Drop Sliders');

  const slider = page.locator('input.sp__range').nth(2);
  const output = page.locator('#rangeSuccess');

  await page.waitForTimeout(500);
  const boundingBox = await slider.boundingBox();
  if (!boundingBox) {
    throw new Error('Slider bounding box not found');
  }

  const startX = boundingBox.x + boundingBox.width / 2;
  const startY = boundingBox.y + boundingBox.height / 2;

  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(startX + 212, startY);
  await page.mouse.up();

  await expect(output).toHaveText('95');
});
