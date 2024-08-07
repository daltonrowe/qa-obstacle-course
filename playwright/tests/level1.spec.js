// @ts-check
import { test, expect } from "@playwright/test";

test('has title', async ({ page }) => {
  await page.goto('level1');
  await expect(page).toHaveTitle("Level 1");
});

test('has h2 with correct text', async ({ page }) => {
  await page.goto('level1');
  const heading = page.locator('h2')
  await expect(heading).toHaveText('Hey There!')
});

test('has link to /level2', async ({ page }) => {
  await page.goto('level1');
  const heading = page.getByRole('link')
  await expect(heading).toHaveAttribute('href', 'level2')
});
