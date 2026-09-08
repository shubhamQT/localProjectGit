import { test as base, expect } from "@playwright/test";
import { AutonixPage } from "../pageobjects/AutonixPage";
import { DashboardPage } from "../pageobjects/DashboardPage";
import { LoginPage } from "../pageobjects/LoginPage";
import { OrgAdminPage } from "../pageobjects/OrgAdminPage";
import { ProjectOverviewPage } from "../pageobjects/ProjectOverviewPage";

type AppFixtures = {
  autonixPage: AutonixPage;
  dashboardPage: DashboardPage;
  loginPage: LoginPage;
  orgAdminPage: OrgAdminPage;
  projectOverviewPage: ProjectOverviewPage;
};

export const test = base.extend<AppFixtures>({
  autonixPage: async ({ page }, use) => {
    await use(new AutonixPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  orgAdminPage: async ({ page }, use) => {
    await use(new OrgAdminPage(page));
  },
  projectOverviewPage: async ({ page }, use) => {
    await use(new ProjectOverviewPage(page));
  },
});

export { expect };
