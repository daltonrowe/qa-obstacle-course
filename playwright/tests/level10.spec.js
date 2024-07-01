// @ts-check
import { test, expect } from "@playwright/test";

test('has visible divs with the correct attributes', async ({ page }) => {
  await page.goto('level10');
  const snoopy = page.getByTestId('snoopy');
  const myfav = page.locator('div[myfavorite]');

  await expect(snoopy).toBeVisible()
  await expect(myfav).toBeVisible()
  await expect(myfav).toHaveAttribute('myfavorite', 'woodstock')
});