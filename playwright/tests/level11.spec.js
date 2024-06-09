// @ts-check
const { test, expect } = require('@playwright/test');

test('has elements with editable state', async ({ page }) => {
  await page.goto('level11');
  const editMes = page.locator('.edit-me');
  const total = await editMes.count();

  for (let i = 0; i < total; i++) {
    const editMe = editMes.nth(i)
    await expect(editMe).toBeEditable();
  }
});