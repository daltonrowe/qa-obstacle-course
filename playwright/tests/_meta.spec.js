// @ts-check
import { test, expect } from "@playwright/test";
import * as fs from "fs"

const index = fs.readFileSync('./public/index.html', { encoding: 'utf8' })
const regex = /href="level([0-9]+)"/g;
const hrefs = index.match(regex) ?? []

hrefs.forEach((_href, index) => {
  // prevent repo structure runs on live site
  if (!(process.env.CI || process.env.LOCAL)) return;

  const level = index + 1

  test(`has proper structure for level ${level}`, async ({ page }) => {
    page.goto(`level${level}`)
    await expect(page).toHaveTitle(`Level ${level}`)

    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveCount(1)

    const next = page.locator(`a[href="level${level + 1}"]`);
    await expect(next).toHaveCount(1)

    const icon = page.locator('link[rel="shortcut icon"]')
    await expect(icon).toHaveCount(1)
    await expect(icon).toHaveAttribute('href', 'favicon.svg')

    const goals = page.locator(".box.goals");
    await expect(goals).toBeVisible();
  });
})