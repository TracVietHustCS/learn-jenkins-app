// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Lê Ngô Trác Việt - Portfolio/);
});

test('has name in the body', async ({ page }) => {
  await page.goto('/');

  const isVisible = await page.locator('h1:has-text("Lê Ngô Trác Việt")').isVisible();
  expect(isVisible).toBeTruthy();
});

test('has expected role', async ({ page }) => {
  await page.goto('/');

  const isVisible = await page.locator('h2:has-text("Software / DevOps Engineer")').isVisible();
  expect(isVisible).toBeTruthy();
});
