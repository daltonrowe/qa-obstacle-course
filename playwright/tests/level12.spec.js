// @ts-check
import { expect, test } from "@playwright/test";

test("has h1 with banner role", async ({ page }) => {
  await page.goto("level12");
  const header = page.locator("h2");
  await expect(header).toHaveRole("banner");
});

test("has button with correct accessible name", async ({ page }) => {
  await page.goto("level12");
  const button = page.getByRole("button");
  await expect(button).toHaveAccessibleName("Just testing");
});

test("has pre with correct accessible name", async ({ page }) => {
  await page.goto("level12");
  const pre = page.locator("pre");
  await expect(pre).toHaveAccessibleName("Taco Emoji");
});
