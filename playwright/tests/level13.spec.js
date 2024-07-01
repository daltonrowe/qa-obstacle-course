// @ts-check
import { test, expect } from "@playwright/test";

test('has correct text response', async ({ request }) => {
  const response = await request.get(`/api/level13`);

  expect(await response.text()).toBe('Hello, world!')
  expect(await response.status()).toBe(200)
  expect(await response.statusText()).toBe('OK')
});
