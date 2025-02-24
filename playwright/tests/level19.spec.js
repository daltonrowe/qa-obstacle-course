// @ts-check
import { expect, test } from "@playwright/test";

test("has 200 for a GET request", async ({ request }) => {
  const response = await request.get("/api/level19");

  expect(await response.status()).toBe(200);
});

test("has cookie flavor", async ({ request }) => {
  const response = await request.get("/api/level19", {
    headers: {
      cookie: "Flavor=ChocolateChip;",
    },
  });

  const text = await response.text();

  expect(text).toBe("Yum yum.");
});

test("has set cookie", async ({ request }) => {
  const response = await request.get("/api/level19", {
    headers: {
      cookie: "GiveMe=ACookie;",
    },
  });

  const headers = await response.headers();

  await expect(headers).toHaveProperty('set-cookie')
});