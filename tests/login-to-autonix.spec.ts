import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Login as Project Owner', { tag: ["@P0","@case-662347a8-27a4-4508-bca2-8a1f0eedacd7","@req-9c04f31a-cd93-4ae7-877d-87171e935912"] }, async ({ page, autonixPage, loginPage, dashboardPage }) => {
  await test.step('Navigate to URL — url', async () => {
    await page.goto(env.baseURL);
  });
  await test.step('Assert visible — login', async () => {
    await autonixPage.expectSignInVisible();
  });
  await test.step('Click — sign in', async () => {
    await autonixPage.clickSignIn();
  });
  await test.step('Assert visible — email', async () => {
    await loginPage.expectLoginEmailVisible();
  });
  await test.step('Click — email', async () => {
    await loginPage.fillLoginEmail(env.username);
  });
  await test.step('Fill — password', async () => {
    await loginPage.fillLoginPassword(env.password);
  });
  await test.step('Click — signin button', async () => {
    await loginPage.clickLoginSubmit();
  });
  await test.step('Assert visible — dashboard', async () => {
    await dashboardPage.expectAutonixLogoVisible();
  });
});
