// @ts-check
import { test, expect } from "@playwright/test";

test('has button with correct text', async ({ page }) => {
  await page.goto('level2');
  const button = page.getByRole('button');
  await expect(button).toHaveText("Click Me!");
});

test('has pre with correct text', async ({ page }) => {
  await page.goto('level2');

  const initialText = "I'm waiting..."
  const pre = page.locator("pre");
  await expect(pre).toHaveText(initialText)

  const button = page.getByRole('button');
  await button.click();

  await button.click();

  await expect(pre).not.toHaveText(initialText)
});
