import * as fs from "node:fs";
// @ts-check
import { expect, test } from "@playwright/test";

const index = fs.readFileSync("./public/index.html", { encoding: "utf8" });
const regex = /href="level([0-9]+)"/g;
const hrefs = index.match(regex) ?? [];

hrefs.forEach((_href, index) => {
  // prevent repo structure runs on live site
  if (!(process.env.CI || process.env.LOCAL)) return;

  const level = index + 1;

  test(`has proper structure for level ${level}`, async ({ page }) => {
    page.goto(`level${level}`);
    await expect(page).toHaveTitle(`Level ${level}`);

    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveCount(1);

    const next = page.locator(`a[href="level${level + 1}"]`);
    await expect(next).toHaveCount(1);

    const icon = page.locator('link[rel="shortcut icon"]');
    await expect(icon).toHaveCount(1);
    await expect(icon).toHaveAttribute("href", "favicon.svg");

    const goals = page.locator("#goal");
    await expect(goals).toBeVisible();

    const task = page.locator("#task");
    await expect(task).toBeVisible();

    const lis = goals.locator("li");

    for (const li of await lis.all()) {
      // skip when goals contains code blocks
      const hasPre = (await li.locator("pre").count()) !== 0;

      const liText = (await li.textContent()) || "";
      const cleanLiText = liText.replace("\n", "").trim().slice(-1);

      if (!hasPre) {
        await expect(cleanLiText.slice(-1)).toBe(".");
      }
    }
  });
});

test("has spec file for each level", async () => {
  const allSpecs = fs.readdirSync("./playwright/tests");
  const levelSpecs = allSpecs.filter((file) => file.startsWith("level"));
  await expect(levelSpecs.length).toEqual(hrefs.length);
});
