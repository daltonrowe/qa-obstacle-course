// @ts-check
import { test, expect } from "@playwright/test";

test('has correct response for a POST request', async ({ request }) => {
  const response = await request.post("/api/level15");

  expect(await response.text()).toBe(`I`)
});

test('has correct response for a PUT request', async ({ request }) => {
  const response = await request.put("/api/level15");

  expect(await response.text()).toBe('love')
});

test('has correct response for a PATCH request', async ({ request }) => {
  const response = await request.patch("/api/level15");

  expect(await response.text()).toBe('to')
});

test('has correct response for a DELETE request', async ({ request }) => {
  const response = await request.delete("/api/level15");

  expect(await response.text()).toBe("dance!")
});