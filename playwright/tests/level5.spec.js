// @ts-check
const { test, expect } = require('@playwright/test');

test('has hidden element with correct id', async ({ page }) => {
  await page.goto('level5');
  const hidden = await page.locator('#not-me')
  await expect(hidden).toBeHidden();
});

test('has button to trigger reveal', async ({ page }) => {
  await page.goto('level5');

  const hidden = await page.locator('#not-me')
  const button = await page.getByRole("button")

  await button.click();
  await expect(hidden).toBeVisible()
});