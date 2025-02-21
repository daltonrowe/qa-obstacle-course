// @ts-check
import { expect, test } from "@playwright/test";

test("has input that responds to focus and blur", async ({ page }) => {
  await page.goto("level7");
  const input = await page.locator("input");
  const pre = await page.locator("pre");

  await input.focus();
  await expect(pre).toHaveText("Focusing");

  await input.blur();
  await expect(pre).toHaveText("Blurred");
});

test("has input that triggers text when value is correct", async ({ page }) => {
  await page.goto("level7");
  const input = await page.locator("input");
  const pre = await page.locator("pre");

  await input.fill("4321");
  await expect(pre).toHaveText("Woo hoo!");
});
