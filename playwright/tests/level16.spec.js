// @ts-check
import { expect, test } from "@playwright/test";

test("has 400 for a GET request", async ({ request }) => {
  const response = await request.get("/api/level16");

  expect(await response.status()).toBe(400);
});

test("has 200 for a POST request", async ({ request }) => {
  const response = await request.post("/api/level16");

  expect(await response.status()).toBe(200);
});

test("has correct response for body", async ({ request }) => {
  const response = await request.post("/api/level16", {
    data: {
      greeting: "Good morning",
    },
  });

  const jsonRes = await response.json();
  expect(jsonRes.greeting).toBe("Hiya~!");
});
