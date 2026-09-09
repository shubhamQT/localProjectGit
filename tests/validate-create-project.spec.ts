import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Validate Project create button', { tag: ["@P1","@case-6b35edcc-3d66-4908-88f6-498f26036b3f","@req-e4d0c66a-9a46-4124-be80-d6e53beefe90"] }, async ({ page, autonixPage, loginPage, dashboardPage }) => {
  const vars: Record<string, string> = {};
  for (const [__k, __v] of Object.entries(env)) vars[`env.${__k}`] = String(__v);
  await test.step('Navigate to URL — baseurl', async () => {
    await page.goto('/');
  });
  await test.step('Assert visible — sign in', async () => {
    await autonixPage.expectSignInVisible();
  });
  await test.step('Click — sign in', async () => {
    await autonixPage.clickSignIn();
  });
  await test.step('Assert visible — email', async () => {
    await loginPage.expectLoginEmailVisible();
  });
  await test.step('Fill — email', async () => {
    await loginPage.fillLoginEmail(vars["env.username"]);
  });
  await test.step('Fill — password', async () => {
    await loginPage.fillLoginPassword(vars["env.password"]);
  });
  await test.step('Click — sign in', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Assert visible — autonix logo', async () => {
    await dashboardPage.expectAutonixLogoVisible();
  });
  await test.step('Assert visible — create project button', async () => {
    await dashboardPage.expectCreateProjectFormVisible();
  });
});
