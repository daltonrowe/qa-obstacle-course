// @ts-check
import { test, expect } from "@playwright/test";

test('has button with correct text', async ({ page }) => {
  await page.goto('level2');
  const button = page.getByRole('button');
  await expect(button).toHaveText("Click Me!");
});

test('has link after clicking button', async ({ page }) => {
  await page.goto('level2');
  const button = page.getByRole('button');
  await button.click();

  const link = page.getByRole('link');
  await expect(link).toHaveAttribute("href", "/level3");
});
