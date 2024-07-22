// @ts-check
import { test, expect } from "@playwright/test";

test('has correct default response', async ({ request }) => {
  const response = await request.get("/api/level14");

  expect(await response.status()).toBe(200)
  expect(await response.text()).toBe("What are you hungry for?")
});

test('has correct response with food param', async ({ request }) => {
  const response = await request.get(`/api/level14`, {
    params: {
      food: 'pizza'
    }
  }
  );

  expect(await response.text()).toBe("What size?")
});

test('has correct response with food and size params', async ({ request }) => {
  const response = await request.get(`/api/level14`, {
    params: {
      food: 'pizza',
      size: 'medium'
    }
  }
  );

  expect(await response.text()).toBe("Coming right up!")
});
