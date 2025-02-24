// @ts-check
import { expect, test } from "@playwright/test";

test("has 200 for a GET request", async ({ request }) => {
  const response = await request.post("/api/level18");

  expect(await response.status()).toBe(200);
});

test("has a plain text response", async ({ request }) => {
  const response = await request.post("/api/level18", {
    headers: { "Content-Type": "text/plain" },
    data: "Just plain ol talkin",
  });

  const text = await response.text();

  expect(text).toBe("Understood.");
});

test("has a json response", async ({ request }) => {
  const response = await request.post("/api/level18", {
    headers: { "Content-Type": "application/json" },
    data: {
      how: "about this?",
    },
  });

  const json = await response.json();

  expect(json).toEqual({
    Yup: "got it",
  });
});
