// @ts-check
const { test, expect } = require('@playwright/test');

test('has input with correct text', async ({ page }) => {
  await page.goto('level4');
  const input = await page.locator('input[type=text]')
  await expect(input).toHaveValue("pizza");
});

test('has select with correct value', async ({ page }) => {
  await page.goto('level4');
  const select = await page.locator('select')
  await expect(select).toHaveValue("george");
});

test('has input with correct number', async ({ page }) => {
  await page.goto('level4');
  const input = await page.locator('input[type=number]')
  await expect(input).toBeDisabled()
});
