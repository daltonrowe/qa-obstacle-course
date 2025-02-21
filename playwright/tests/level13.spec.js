// @ts-check
import { expect, test } from "@playwright/test";

test("has correct 200 response", async ({ request }) => {
  const response = await request.get("/api/level13");

  expect(await response.status()).toBe(200);
  expect(await response.statusText()).toBe("OK");
  expect(await response.text()).toBe("Hello, world!");
});
