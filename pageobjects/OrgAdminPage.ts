import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class OrgAdminPage {
  private static readonly L = {
    organizationAdministration: { strategy: 'role' as const, value: 'Organization Administration', role: 'heading', level: 1, actionKind: 'text' as const },
    dashboard: { strategy: 'role' as const, value: 'Dashboard', role: 'link', actionKind: 'link' as const },
    users2: { strategy: 'role' as const, value: 'Users (2)', role: 'button', actionKind: 'button' as const },
    projects3: { strategy: 'role' as const, value: 'Projects (3)', role: 'button', actionKind: 'button' as const },
    createProject: { strategy: 'role' as const, value: 'Create Project', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextOrganizationAdministration(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OrgAdminPage.L.organizationAdministration));
  }

  async expectOrganizationAdministrationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, OrgAdminPage.L.organizationAdministration), timeoutMs, soft);
  }

  async clickDashboard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OrgAdminPage.L.dashboard));
  }

  async expectDashboardVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, OrgAdminPage.L.dashboard), timeoutMs, soft);
  }

  async clickUsers2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OrgAdminPage.L.users2));
  }

  async doubleClickUsers2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OrgAdminPage.L.users2));
  }

  async expectUsers2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, OrgAdminPage.L.users2), timeoutMs, soft);
  }

  async clickProjects3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OrgAdminPage.L.projects3));
  }

  async doubleClickProjects3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OrgAdminPage.L.projects3));
  }

  async expectProjects3Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, OrgAdminPage.L.projects3), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'Org Admin', timeoutMs);
  }

  async clickCreateProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OrgAdminPage.L.createProject));
  }

  async doubleClickCreateProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OrgAdminPage.L.createProject));
  }

  async expectCreateProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, OrgAdminPage.L.createProject), timeoutMs, soft);
  }


  async clickOrganizationAdministration(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OrgAdminPage.L.organizationAdministration));
  }

  async doubleClickOrganizationAdministration(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OrgAdminPage.L.organizationAdministration));
  }

  async longPressOrganizationAdministration(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OrgAdminPage.L.organizationAdministration));
  }

  async expectOrganizationAdministrationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OrgAdminPage.L.organizationAdministration), timeoutMs);
  }

  async expectOrganizationAdministrationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OrgAdminPage.L.organizationAdministration), expected, timeoutMs);
  }

  async expectOrganizationAdministrationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OrgAdminPage.L.organizationAdministration), substring, timeoutMs);
  }

  async expectOrganizationAdministrationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OrgAdminPage.L.organizationAdministration), value, timeoutMs);
  }

  async expectOrganizationAdministrationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OrgAdminPage.L.organizationAdministration), timeoutMs);
  }

  async expectOrganizationAdministrationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OrgAdminPage.L.organizationAdministration), timeoutMs);
  }

  async expectOrganizationAdministrationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OrgAdminPage.L.organizationAdministration), timeoutMs);
  }

  async expectOrganizationAdministrationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OrgAdminPage.L.organizationAdministration), timeoutMs);
  }

  async expectOrganizationAdministrationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OrgAdminPage.L.organizationAdministration), timeoutMs);
  }

  async expectOrganizationAdministrationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OrgAdminPage.L.organizationAdministration), count, timeoutMs);
  }

  async scrollOrganizationAdministrationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OrgAdminPage.L.organizationAdministration));
  }

  async doubleClickDashboard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OrgAdminPage.L.dashboard));
  }

  async longPressDashboard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OrgAdminPage.L.dashboard));
  }

  async expectDashboardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OrgAdminPage.L.dashboard), timeoutMs);
  }

  async expectDashboardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OrgAdminPage.L.dashboard), expected, timeoutMs);
  }

  async expectDashboardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OrgAdminPage.L.dashboard), substring, timeoutMs);
  }

  async expectDashboardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OrgAdminPage.L.dashboard), value, timeoutMs);
  }

  async expectDashboardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OrgAdminPage.L.dashboard), timeoutMs);
  }

  async expectDashboardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OrgAdminPage.L.dashboard), timeoutMs);
  }

  async expectDashboardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OrgAdminPage.L.dashboard), timeoutMs);
  }

  async expectDashboardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OrgAdminPage.L.dashboard), timeoutMs);
  }

  async expectDashboardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OrgAdminPage.L.dashboard), timeoutMs);
  }

  async expectDashboardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OrgAdminPage.L.dashboard), count, timeoutMs);
  }

  async scrollDashboardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OrgAdminPage.L.dashboard));
  }

  async longPressUsers2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OrgAdminPage.L.users2));
  }

  async expectUsers2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OrgAdminPage.L.users2), timeoutMs);
  }

  async expectUsers2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OrgAdminPage.L.users2), expected, timeoutMs);
  }

  async expectUsers2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OrgAdminPage.L.users2), substring, timeoutMs);
  }

  async expectUsers2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OrgAdminPage.L.users2), value, timeoutMs);
  }

  async expectUsers2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OrgAdminPage.L.users2), timeoutMs);
  }

  async expectUsers2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OrgAdminPage.L.users2), timeoutMs);
  }

  async expectUsers2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OrgAdminPage.L.users2), timeoutMs);
  }

  async expectUsers2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OrgAdminPage.L.users2), timeoutMs);
  }

  async expectUsers2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OrgAdminPage.L.users2), timeoutMs);
  }

  async expectUsers2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OrgAdminPage.L.users2), count, timeoutMs);
  }

  async scrollUsers2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OrgAdminPage.L.users2));
  }

  async longPressProjects3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OrgAdminPage.L.projects3));
  }

  async expectProjects3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OrgAdminPage.L.projects3), timeoutMs);
  }

  async expectProjects3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OrgAdminPage.L.projects3), expected, timeoutMs);
  }

  async expectProjects3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OrgAdminPage.L.projects3), substring, timeoutMs);
  }

  async expectProjects3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OrgAdminPage.L.projects3), value, timeoutMs);
  }

  async expectProjects3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OrgAdminPage.L.projects3), timeoutMs);
  }

  async expectProjects3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OrgAdminPage.L.projects3), timeoutMs);
  }

  async expectProjects3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OrgAdminPage.L.projects3), timeoutMs);
  }

  async expectProjects3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OrgAdminPage.L.projects3), timeoutMs);
  }

  async expectProjects3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OrgAdminPage.L.projects3), timeoutMs);
  }

  async expectProjects3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OrgAdminPage.L.projects3), count, timeoutMs);
  }

  async scrollProjects3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OrgAdminPage.L.projects3));
  }

  async longPressCreateProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OrgAdminPage.L.createProject));
  }

  async expectCreateProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OrgAdminPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OrgAdminPage.L.createProject), expected, timeoutMs);
  }

  async expectCreateProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OrgAdminPage.L.createProject), substring, timeoutMs);
  }

  async expectCreateProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OrgAdminPage.L.createProject), value, timeoutMs);
  }

  async expectCreateProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OrgAdminPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OrgAdminPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OrgAdminPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OrgAdminPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OrgAdminPage.L.createProject), timeoutMs);
  }

  async expectCreateProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OrgAdminPage.L.createProject), count, timeoutMs);
  }

  async scrollCreateProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OrgAdminPage.L.createProject));
  }

}
