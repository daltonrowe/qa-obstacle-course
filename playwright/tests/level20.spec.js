// @ts-check
import { expect, test } from "@playwright/test";

test("has 401 for a GET request", async ({ request }) => {
  const response = await request.get("/api/level20");

  expect(await response.status()).toBe(401);
});

test("has api key support", async ({ request }) => {
  const response = await request.get("/api/level20", {
    headers: {
      "X-Api-Key": "mysupercoolapikey",
    },
  });

  const text = await response.text();

  expect(text).toBe("Approved!");
});

test("has authorization support", async ({ request }) => {
  const response = await request.get("/api/level20", {
    headers: {
      "Authorization": "Basic Q3VyaW91c0dlb3JnZTp5ZWxsb3doYXQ=",
    },
  });

  const text = await response.text();

  expect(text).toBe("Welcome Mr. George.");
});