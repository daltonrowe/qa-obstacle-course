// @ts-check
import { test, expect } from "@playwright/test";

test('has parent that removes the child', async ({ page }) => {
  await page.goto('level6');
  const child = await page.locator("#child")
  const parent = await page.locator('section', { has: child })

  await parent.click();
  await expect(child).not.toBeAttached();
});
