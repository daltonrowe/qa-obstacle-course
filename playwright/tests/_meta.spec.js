// @ts-check
import { test, expect } from "@playwright/test";

test('has title', async ({ page }) => {
  await page.goto('level1');
  await expect(page).toHaveTitle("Level One");
});
