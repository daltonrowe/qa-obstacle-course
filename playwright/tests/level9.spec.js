// @ts-check
const { test, expect } = require('@playwright/test');

test('has correct text after select options set', async ({ page }) => {
  await page.goto('level9');
  const inputs = await page.locator("input");
  const inputOne = inputs.nth(0)
  const inputTwo = inputs.nth(1)

  inputOne.clear();
  await expect(inputOne).toBeEmpty();
  await expect(inputTwo).not.toBeEditable()
});