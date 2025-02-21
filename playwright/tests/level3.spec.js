// @ts-check
import { expect, test } from "@playwright/test";

test("has correct number of section elements", async ({ page }) => {
  await page.goto("level3");
  const sections = page.locator("section");

  await expect(sections).toHaveCount(3);
  await expect(sections).not.toHaveCount(4);
  await expect(sections).not.toHaveCount(2);
});
