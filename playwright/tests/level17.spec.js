// @ts-check
import { expect, test } from "@playwright/test";

test("has 200 for a GET request", async ({ request }) => {
  const response = await request.get("/api/level17");

  expect(await response.status()).toBe(200);
});

test("has a plain text response", async ({ request }) => {
  const response = await request.get("/api/level17", {
    headers: { "Accept": "text/plain" }
  });

  const text = await response.text()

  expect(text).toBe("Here's some plain text!");
});

test("has a json response", async ({ request }) => {
  const response = await request.get("/api/level17", {
    headers: { "Accept": "application/json" }
  });

  const json = await response.json()

  expect(json).toEqual({ "Hereees": 'json!' });
});