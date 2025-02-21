// @ts-check
import { expect, test } from "@playwright/test";

test("has correct text after select options set", async ({ page }) => {
  await page.goto("level8");
  const selects = await page.locator("select");
  const selectOne = selects.nth(0);
  const selectTwo = selects.nth(1);
  const selectThree = selects.nth(2);
  const pre = await page.locator("pre");

  await selectOne.selectOption("hamburger");
  await expect(pre).toHaveText("Yummy");

  await selectTwo.selectOption("cheese");
  await expect(pre).toHaveText("Even better");

  await selectThree.selectOption(["lettuce", "tomato", "onion"]);
  await expect(pre).toHaveText("Just how I like it!");
});
