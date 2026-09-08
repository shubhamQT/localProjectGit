import type { Locator, Page } from "@playwright/test";
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
import { webTable, type WebTable } from "../support/web-table";

export class DashboardPage {
  private static readonly L = {
    autonixLogo: { strategy: 'altText' as const, value: 'Autonix logo', role: 'img', actionKind: 'generic' as const },
    navOrgAdmin: { strategy: 'testId' as const, value: 'nav-org-admin-link', role: 'link', actionKind: 'link' as const },
    myProfile: { strategy: 'role' as const, value: 'S Shubham', role: 'link', actionKind: 'link' as const },
    navSignout: { strategy: 'testId' as const, value: 'nav-signout-btn', role: 'button', actionKind: 'button' as const },
    projects: { strategy: 'role' as const, value: 'Projects', role: 'heading', level: 2, actionKind: 'text' as const },
    border: { strategy: 'placeholder' as const, value: 'Search projects…', role: 'textbox', actionKind: 'textbox' as const },
    newProject: { strategy: 'role' as const, value: 'New Project', role: 'heading', level: 2, actionKind: 'text' as const },
    createProjectForm: { strategy: 'testId' as const, value: 'create-project-form', actionKind: 'text' as const },
    createProjectPlatformWebRadio: { strategy: 'testId' as const, value: 'create-project-platform-web-radio', role: 'radio', actionKind: 'radio' as const },
    createProjectName: { strategy: 'testId' as const, value: 'create-project-name-input', role: 'textbox', actionKind: 'textbox' as const },
    createProjectSubmit: { strategy: 'testId' as const, value: 'create-project-submit-btn', role: 'button', actionKind: 'button' as const },
    gettingStarted: { strategy: 'role' as const, value: 'Getting Started', role: 'heading', level: 2, actionKind: 'text' as const },
  } as const;

  readonly textSm1: WebTable; // columns: ["Project", "Status", "Req", "POM", "Plans", "Cases", ""]

  constructor(private readonly page: Page) {
    this.textSm1 = webTable(this.page, 'table');
  }

  async clickAutonixLogo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.autonixLogo));
  }

  async expectAutonixLogoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.autonixLogo), timeoutMs, soft);
  }

  async clickNavOrgAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.navOrgAdmin));
  }

  async expectNavOrgAdminVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.navOrgAdmin), timeoutMs, soft);
  }

  async clickMyProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async expectMyProfileVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs, soft);
  }

  async clickNavSignout(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.navSignout));
  }

  async doubleClickNavSignout(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.navSignout));
  }

  async expectNavSignoutVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.navSignout), timeoutMs, soft);
  }

  async getInnerTextProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.projects));
  }

  async expectProjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.projects), timeoutMs, soft);
  }

  async fillBorder(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, DashboardPage.L.border), value);
  }

  async clearBorder(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, DashboardPage.L.border));
  }

  async getBorderValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.border));
  }

  async expectBorderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.border), timeoutMs, soft);
  }

  async getInnerTextNewProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async expectNewProjectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.newProject), timeoutMs, soft);
  }

  async getInnerTextCreateProjectForm(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.createProjectForm));
  }

  async expectCreateProjectFormVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.createProjectForm), timeoutMs, soft);
  }

  async checkCreateProjectPlatformWebRadio(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio));
  }

  async isCreateProjectPlatformWebRadioChecked(): Promise<boolean> {
    return webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio).isChecked();
  }

  async expectCreateProjectPlatformWebRadioVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), timeoutMs, soft);
  }

  async expectCreateProjectPlatformWebRadioChecked(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), timeoutMs, soft);
  }

  async fillCreateProjectName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName), value);
  }

  async clearCreateProjectName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName));
  }

  async getCreateProjectNameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName));
  }

  async expectCreateProjectNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs, soft);
  }

  async clickCreateProjectSubmit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.createProjectSubmit));
  }

  async doubleClickCreateProjectSubmit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.createProjectSubmit));
  }

  async expectCreateProjectSubmitVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.createProjectSubmit), timeoutMs, soft);
  }

  async getInnerTextGettingStarted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.gettingStarted));
  }

  async expectGettingStartedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.gettingStarted), timeoutMs, soft);
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
    await expectPageTitle(this.page, 'Autonix', timeoutMs);
  }

  // ── table ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getTextSm1TableText(row: number, col: number | string): Promise<string> {
    return this.textSm1.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getTextSm1TableColumn(col: number | string): Promise<string[]> {
    return this.textSm1.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getTextSm1TableRowData(row: number): Promise<Record<string, string>> {
    return this.textSm1.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findTextSm1TableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.textSm1.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findTextSm1TableRowByText(text: string): Promise<number> {
    return this.textSm1.findRowByText(text);
  }

  /** Total number of body rows. */
  async getTextSm1TableRowCount(): Promise<number> {
    return this.textSm1.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickTextSm1TableLink(row: number, col: number | string): Promise<void> {
    return this.textSm1.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getTextSm1TableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.textSm1.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkTextSm1TableRow(row: number): Promise<void> {
    const cb = this.textSm1.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckTextSm1TableRow(row: number): Promise<void> {
    const cb = this.textSm1.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isTextSm1TableRowChecked(row: number): Promise<boolean> {
    return this.textSm1.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getTextSm1TableSwitchState(row: number): Promise<boolean> {
    return this.textSm1.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleTextSm1TableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.textSm1.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickTextSm1TableButton(row: number, label?: string): Promise<void> {
    return this.textSm1.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickTextSm1TableMenuOption(label: string): Promise<void> {
    return this.textSm1.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortTextSm1TableBy(col: string): Promise<void> {
    return this.textSm1.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getTextSm1TableInRow(row: number, selector: string): Locator {
    return this.textSm1.getInRow(row, selector);
  }


  async doubleClickAutonixLogo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.autonixLogo));
  }

  async longPressAutonixLogo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.autonixLogo));
  }

  async expectAutonixLogoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.autonixLogo), timeoutMs);
  }

  async expectAutonixLogoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.autonixLogo), expected, timeoutMs);
  }

  async expectAutonixLogoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.autonixLogo), substring, timeoutMs);
  }

  async expectAutonixLogoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.autonixLogo), value, timeoutMs);
  }

  async expectAutonixLogoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.autonixLogo), timeoutMs);
  }

  async expectAutonixLogoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.autonixLogo), timeoutMs);
  }

  async expectAutonixLogoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.autonixLogo), timeoutMs);
  }

  async expectAutonixLogoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.autonixLogo), timeoutMs);
  }

  async expectAutonixLogoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.autonixLogo), timeoutMs);
  }

  async expectAutonixLogoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.autonixLogo), count, timeoutMs);
  }

  async scrollAutonixLogoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.autonixLogo));
  }

  async doubleClickNavOrgAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.navOrgAdmin));
  }

  async longPressNavOrgAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.navOrgAdmin));
  }

  async expectNavOrgAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.navOrgAdmin), timeoutMs);
  }

  async expectNavOrgAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.navOrgAdmin), expected, timeoutMs);
  }

  async expectNavOrgAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.navOrgAdmin), substring, timeoutMs);
  }

  async expectNavOrgAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.navOrgAdmin), value, timeoutMs);
  }

  async expectNavOrgAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.navOrgAdmin), timeoutMs);
  }

  async expectNavOrgAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.navOrgAdmin), timeoutMs);
  }

  async expectNavOrgAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.navOrgAdmin), timeoutMs);
  }

  async expectNavOrgAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.navOrgAdmin), timeoutMs);
  }

  async expectNavOrgAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.navOrgAdmin), timeoutMs);
  }

  async expectNavOrgAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.navOrgAdmin), count, timeoutMs);
  }

  async scrollNavOrgAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.navOrgAdmin));
  }

  async doubleClickMyProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async longPressMyProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async expectMyProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.myProfile), expected, timeoutMs);
  }

  async expectMyProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.myProfile), substring, timeoutMs);
  }

  async expectMyProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.myProfile), value, timeoutMs);
  }

  async expectMyProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.myProfile), timeoutMs);
  }

  async expectMyProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.myProfile), count, timeoutMs);
  }

  async scrollMyProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.myProfile));
  }

  async longPressNavSignout(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.navSignout));
  }

  async expectNavSignoutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.navSignout), timeoutMs);
  }

  async expectNavSignoutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.navSignout), expected, timeoutMs);
  }

  async expectNavSignoutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.navSignout), substring, timeoutMs);
  }

  async expectNavSignoutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.navSignout), value, timeoutMs);
  }

  async expectNavSignoutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.navSignout), timeoutMs);
  }

  async expectNavSignoutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.navSignout), timeoutMs);
  }

  async expectNavSignoutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.navSignout), timeoutMs);
  }

  async expectNavSignoutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.navSignout), timeoutMs);
  }

  async expectNavSignoutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.navSignout), timeoutMs);
  }

  async expectNavSignoutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.navSignout), count, timeoutMs);
  }

  async scrollNavSignoutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.navSignout));
  }

  async clickProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.projects));
  }

  async doubleClickProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.projects));
  }

  async longPressProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.projects));
  }

  async expectProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.projects), timeoutMs);
  }

  async expectProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.projects), expected, timeoutMs);
  }

  async expectProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.projects), substring, timeoutMs);
  }

  async expectProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.projects), value, timeoutMs);
  }

  async expectProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.projects), timeoutMs);
  }

  async expectProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.projects), timeoutMs);
  }

  async expectProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.projects), timeoutMs);
  }

  async expectProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.projects), timeoutMs);
  }

  async expectProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.projects), timeoutMs);
  }

  async expectProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.projects), count, timeoutMs);
  }

  async scrollProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.projects));
  }

  async typeTextBorder(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, DashboardPage.L.border), value);
  }

  async expectBorderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.border), timeoutMs);
  }

  async expectBorderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.border), expected, timeoutMs);
  }

  async expectBorderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.border), substring, timeoutMs);
  }

  async expectBorderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.border), value, timeoutMs);
  }

  async expectBorderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.border), timeoutMs);
  }

  async expectBorderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.border), timeoutMs);
  }

  async expectBorderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.border), timeoutMs);
  }

  async expectBorderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.border), timeoutMs);
  }

  async expectBorderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.border), timeoutMs);
  }

  async expectBorderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.border), count, timeoutMs);
  }

  async scrollBorderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.border));
  }

  async clickNewProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async doubleClickNewProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async longPressNewProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async expectNewProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.newProject), expected, timeoutMs);
  }

  async expectNewProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.newProject), substring, timeoutMs);
  }

  async expectNewProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.newProject), value, timeoutMs);
  }

  async expectNewProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.newProject), timeoutMs);
  }

  async expectNewProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.newProject), count, timeoutMs);
  }

  async scrollNewProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.newProject));
  }

  async clickCreateProjectForm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.createProjectForm));
  }

  async doubleClickCreateProjectForm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.createProjectForm));
  }

  async longPressCreateProjectForm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.createProjectForm));
  }

  async expectCreateProjectFormHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.createProjectForm), timeoutMs);
  }

  async expectCreateProjectFormText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.createProjectForm), expected, timeoutMs);
  }

  async expectCreateProjectFormContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.createProjectForm), substring, timeoutMs);
  }

  async expectCreateProjectFormValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.createProjectForm), value, timeoutMs);
  }

  async expectCreateProjectFormEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.createProjectForm), timeoutMs);
  }

  async expectCreateProjectFormDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.createProjectForm), timeoutMs);
  }

  async expectCreateProjectFormChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.createProjectForm), timeoutMs);
  }

  async expectCreateProjectFormUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.createProjectForm), timeoutMs);
  }

  async expectCreateProjectFormFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.createProjectForm), timeoutMs);
  }

  async expectCreateProjectFormCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.createProjectForm), count, timeoutMs);
  }

  async scrollCreateProjectFormIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.createProjectForm));
  }

  async clickCreateProjectPlatformWebRadio(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio));
  }

  async doubleClickCreateProjectPlatformWebRadio(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio));
  }

  async longPressCreateProjectPlatformWebRadio(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio));
  }

  async expectCreateProjectPlatformWebRadioHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), expected, timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), substring, timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), value, timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), timeoutMs);
  }

  async expectCreateProjectPlatformWebRadioCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio), count, timeoutMs);
  }

  async scrollCreateProjectPlatformWebRadioIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.createProjectPlatformWebRadio));
  }

  async typeTextCreateProjectName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName), value);
  }

  async expectCreateProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.createProjectName), expected, timeoutMs);
  }

  async expectCreateProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.createProjectName), substring, timeoutMs);
  }

  async expectCreateProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.createProjectName), value, timeoutMs);
  }

  async expectCreateProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.createProjectName), timeoutMs);
  }

  async expectCreateProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.createProjectName), count, timeoutMs);
  }

  async scrollCreateProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.createProjectName));
  }

  async longPressCreateProjectSubmit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.createProjectSubmit));
  }

  async expectCreateProjectSubmitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.createProjectSubmit), timeoutMs);
  }

  async expectCreateProjectSubmitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.createProjectSubmit), expected, timeoutMs);
  }

  async expectCreateProjectSubmitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.createProjectSubmit), substring, timeoutMs);
  }

  async expectCreateProjectSubmitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.createProjectSubmit), value, timeoutMs);
  }

  async expectCreateProjectSubmitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.createProjectSubmit), timeoutMs);
  }

  async expectCreateProjectSubmitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.createProjectSubmit), timeoutMs);
  }

  async expectCreateProjectSubmitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.createProjectSubmit), timeoutMs);
  }

  async expectCreateProjectSubmitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.createProjectSubmit), timeoutMs);
  }

  async expectCreateProjectSubmitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.createProjectSubmit), timeoutMs);
  }

  async expectCreateProjectSubmitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.createProjectSubmit), count, timeoutMs);
  }

  async scrollCreateProjectSubmitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.createProjectSubmit));
  }

  async clickGettingStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.gettingStarted));
  }

  async doubleClickGettingStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.gettingStarted));
  }

  async longPressGettingStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.gettingStarted));
  }

  async expectGettingStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.gettingStarted), timeoutMs);
  }

  async expectGettingStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.gettingStarted), expected, timeoutMs);
  }

  async expectGettingStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.gettingStarted), substring, timeoutMs);
  }

  async expectGettingStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.gettingStarted), value, timeoutMs);
  }

  async expectGettingStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.gettingStarted), timeoutMs);
  }

  async expectGettingStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.gettingStarted), timeoutMs);
  }

  async expectGettingStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.gettingStarted), timeoutMs);
  }

  async expectGettingStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.gettingStarted), timeoutMs);
  }

  async expectGettingStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.gettingStarted), timeoutMs);
  }

  async expectGettingStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.gettingStarted), count, timeoutMs);
  }

  async scrollGettingStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.gettingStarted));
  }

}
