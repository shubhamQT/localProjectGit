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

export class ProjectOverviewPage {
  private static readonly L = {
    prodTest: { strategy: 'role' as const, value: 'prodTest', role: 'heading', level: 1, actionKind: 'text' as const },
    allProjects: { strategy: 'role' as const, value: 'All Projects', role: 'link', actionKind: 'link' as const },
    projectRename: { strategy: 'testId' as const, value: 'project-rename-btn', role: 'button', actionKind: 'button' as const },
    projectDelete: { strategy: 'testId' as const, value: 'project-delete-btn', role: 'button', actionKind: 'button' as const },
    collapseSidebar: { strategy: 'role' as const, value: 'Collapse sidebar', role: 'button', actionKind: 'button' as const },
    syncWithMain: { strategy: 'role' as const, value: 'Sync with main', role: 'button', actionKind: 'button' as const },
    settings: { strategy: 'role' as const, value: 'Settings', role: 'button', actionKind: 'button' as const },
    push: { strategy: 'role' as const, value: 'Push', role: 'button', actionKind: 'button' as const },
    gitTerminal: { strategy: 'role' as const, value: '$ git terminal', role: 'button', actionKind: 'button' as const },
    overviewSetupMetric: { strategy: 'testId' as const, value: 'overview-setup-metric-btn', role: 'button', actionKind: 'button' as const },
    overviewRequirementsMetric: { strategy: 'testId' as const, value: 'overview-requirements-metric-btn', role: 'button', actionKind: 'button' as const },
    overviewGeneratePomMetric: { strategy: 'testId' as const, value: 'overview-generate-pom-metric-btn', role: 'button', actionKind: 'button' as const },
    overviewTestSuitesMetric: { strategy: 'testId' as const, value: 'overview-test-suites-metric-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutSetup: { strategy: 'testId' as const, value: 'overview-shortcut-setup-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutRequirements: { strategy: 'testId' as const, value: 'overview-shortcut-requirements-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutRecorder: { strategy: 'testId' as const, value: 'overview-shortcut-recorder-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutGeneratePom: { strategy: 'testId' as const, value: 'overview-shortcut-generate-pom-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutApis: { strategy: 'testId' as const, value: 'overview-shortcut-apis-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutDatabase: { strategy: 'testId' as const, value: 'overview-shortcut-database-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutTestPlans: { strategy: 'testId' as const, value: 'overview-shortcut-test-plans-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutTestExecution: { strategy: 'testId' as const, value: 'overview-shortcut-test-execution-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutTestSuites: { strategy: 'testId' as const, value: 'overview-shortcut-test-suites-btn', role: 'button', actionKind: 'button' as const },
    overviewShortcutTestReports: { strategy: 'testId' as const, value: 'overview-shortcut-test-reports-btn', role: 'button', actionKind: 'button' as const },
    helpLink: { strategy: 'testId' as const, value: 'help-link-btn', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextProdTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectOverviewPage.L.prodTest));
  }

  async expectProdTestVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.prodTest), timeoutMs, soft);
  }

  async clickAllProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.allProjects));
  }

  async expectAllProjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.allProjects), timeoutMs, soft);
  }

  async clickProjectRename(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectRename));
  }

  async doubleClickProjectRename(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectRename));
  }

  async expectProjectRenameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.projectRename), timeoutMs, soft);
  }

  async clickProjectDelete(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectDelete));
  }

  async doubleClickProjectDelete(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectDelete));
  }

  async expectProjectDeleteVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.projectDelete), timeoutMs, soft);
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), timeoutMs, soft);
  }

  async clickSyncWithMain(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.syncWithMain));
  }

  async doubleClickSyncWithMain(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.syncWithMain));
  }

  async expectSyncWithMainVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), timeoutMs, soft);
  }

  async clickSettings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.settings));
  }

  async doubleClickSettings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.settings));
  }

  async expectSettingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.settings), timeoutMs, soft);
  }

  async clickPush(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.push));
  }

  async doubleClickPush(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.push));
  }

  async expectPushVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.push), timeoutMs, soft);
  }

  async clickGitTerminal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.gitTerminal));
  }

  async doubleClickGitTerminal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.gitTerminal));
  }

  async expectGitTerminalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), timeoutMs, soft);
  }

  async clickOverviewSetupMetric(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric));
  }

  async doubleClickOverviewSetupMetric(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric));
  }

  async expectOverviewSetupMetricVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), timeoutMs, soft);
  }

  async clickOverviewRequirementsMetric(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric));
  }

  async doubleClickOverviewRequirementsMetric(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric));
  }

  async expectOverviewRequirementsMetricVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), timeoutMs, soft);
  }

  async clickOverviewGeneratePomMetric(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric));
  }

  async doubleClickOverviewGeneratePomMetric(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric));
  }

  async expectOverviewGeneratePomMetricVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), timeoutMs, soft);
  }

  async clickOverviewTestSuitesMetric(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric));
  }

  async doubleClickOverviewTestSuitesMetric(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric));
  }

  async expectOverviewTestSuitesMetricVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), timeoutMs, soft);
  }

  async clickOverviewShortcutSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup));
  }

  async doubleClickOverviewShortcutSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup));
  }

  async expectOverviewShortcutSetupVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), timeoutMs, soft);
  }

  async clickOverviewShortcutRequirements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements));
  }

  async doubleClickOverviewShortcutRequirements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements));
  }

  async expectOverviewShortcutRequirementsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), timeoutMs, soft);
  }

  async clickOverviewShortcutRecorder(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder));
  }

  async doubleClickOverviewShortcutRecorder(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder));
  }

  async expectOverviewShortcutRecorderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), timeoutMs, soft);
  }

  async clickOverviewShortcutGeneratePom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom));
  }

  async doubleClickOverviewShortcutGeneratePom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom));
  }

  async expectOverviewShortcutGeneratePomVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), timeoutMs, soft);
  }

  async clickOverviewShortcutApis(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis));
  }

  async doubleClickOverviewShortcutApis(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis));
  }

  async expectOverviewShortcutApisVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), timeoutMs, soft);
  }

  async clickOverviewShortcutDatabase(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase));
  }

  async doubleClickOverviewShortcutDatabase(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase));
  }

  async expectOverviewShortcutDatabaseVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), timeoutMs, soft);
  }

  async clickOverviewShortcutTestPlans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans));
  }

  async doubleClickOverviewShortcutTestPlans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans));
  }

  async expectOverviewShortcutTestPlansVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), timeoutMs, soft);
  }

  async clickOverviewShortcutTestExecution(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution));
  }

  async doubleClickOverviewShortcutTestExecution(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution));
  }

  async expectOverviewShortcutTestExecutionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), timeoutMs, soft);
  }

  async clickOverviewShortcutTestSuites(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites));
  }

  async doubleClickOverviewShortcutTestSuites(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites));
  }

  async expectOverviewShortcutTestSuitesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), timeoutMs, soft);
  }

  async clickOverviewShortcutTestReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports));
  }

  async doubleClickOverviewShortcutTestReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports));
  }

  async expectOverviewShortcutTestReportsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), timeoutMs, soft);
  }

  async clickHelpLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.helpLink));
  }

  async expectHelpLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectOverviewPage.L.helpLink), timeoutMs, soft);
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


  async clickProdTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.prodTest));
  }

  async doubleClickProdTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.prodTest));
  }

  async longPressProdTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.prodTest));
  }

  async expectProdTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.prodTest), timeoutMs);
  }

  async expectProdTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.prodTest), expected, timeoutMs);
  }

  async expectProdTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.prodTest), substring, timeoutMs);
  }

  async expectProdTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.prodTest), value, timeoutMs);
  }

  async expectProdTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.prodTest), timeoutMs);
  }

  async expectProdTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.prodTest), timeoutMs);
  }

  async expectProdTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.prodTest), timeoutMs);
  }

  async expectProdTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.prodTest), timeoutMs);
  }

  async expectProdTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.prodTest), timeoutMs);
  }

  async expectProdTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.prodTest), count, timeoutMs);
  }

  async scrollProdTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.prodTest));
  }

  async doubleClickAllProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.allProjects));
  }

  async longPressAllProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.allProjects));
  }

  async expectAllProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.allProjects), expected, timeoutMs);
  }

  async expectAllProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.allProjects), substring, timeoutMs);
  }

  async expectAllProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.allProjects), value, timeoutMs);
  }

  async expectAllProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.allProjects), timeoutMs);
  }

  async expectAllProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.allProjects), count, timeoutMs);
  }

  async scrollAllProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.allProjects));
  }

  async longPressProjectRename(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectRename));
  }

  async expectProjectRenameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.projectRename), timeoutMs);
  }

  async expectProjectRenameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.projectRename), expected, timeoutMs);
  }

  async expectProjectRenameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.projectRename), substring, timeoutMs);
  }

  async expectProjectRenameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.projectRename), value, timeoutMs);
  }

  async expectProjectRenameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.projectRename), timeoutMs);
  }

  async expectProjectRenameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.projectRename), timeoutMs);
  }

  async expectProjectRenameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.projectRename), timeoutMs);
  }

  async expectProjectRenameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.projectRename), timeoutMs);
  }

  async expectProjectRenameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.projectRename), timeoutMs);
  }

  async expectProjectRenameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.projectRename), count, timeoutMs);
  }

  async scrollProjectRenameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectRename));
  }

  async longPressProjectDelete(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectDelete));
  }

  async expectProjectDeleteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.projectDelete), timeoutMs);
  }

  async expectProjectDeleteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.projectDelete), expected, timeoutMs);
  }

  async expectProjectDeleteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.projectDelete), substring, timeoutMs);
  }

  async expectProjectDeleteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.projectDelete), value, timeoutMs);
  }

  async expectProjectDeleteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.projectDelete), timeoutMs);
  }

  async expectProjectDeleteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.projectDelete), timeoutMs);
  }

  async expectProjectDeleteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.projectDelete), timeoutMs);
  }

  async expectProjectDeleteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.projectDelete), timeoutMs);
  }

  async expectProjectDeleteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.projectDelete), timeoutMs);
  }

  async expectProjectDeleteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.projectDelete), count, timeoutMs);
  }

  async scrollProjectDeleteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.projectDelete));
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar));
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), substring, timeoutMs);
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar), count, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.collapseSidebar));
  }

  async longPressSyncWithMain(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.syncWithMain));
  }

  async expectSyncWithMainHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), timeoutMs);
  }

  async expectSyncWithMainText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), expected, timeoutMs);
  }

  async expectSyncWithMainContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), substring, timeoutMs);
  }

  async expectSyncWithMainValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), value, timeoutMs);
  }

  async expectSyncWithMainEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), timeoutMs);
  }

  async expectSyncWithMainDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), timeoutMs);
  }

  async expectSyncWithMainChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), timeoutMs);
  }

  async expectSyncWithMainUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), timeoutMs);
  }

  async expectSyncWithMainFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), timeoutMs);
  }

  async expectSyncWithMainCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.syncWithMain), count, timeoutMs);
  }

  async scrollSyncWithMainIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.syncWithMain));
  }

  async longPressSettings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.settings));
  }

  async expectSettingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.settings), timeoutMs);
  }

  async expectSettingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.settings), expected, timeoutMs);
  }

  async expectSettingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.settings), substring, timeoutMs);
  }

  async expectSettingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.settings), value, timeoutMs);
  }

  async expectSettingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.settings), timeoutMs);
  }

  async expectSettingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.settings), timeoutMs);
  }

  async expectSettingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.settings), timeoutMs);
  }

  async expectSettingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.settings), timeoutMs);
  }

  async expectSettingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.settings), timeoutMs);
  }

  async expectSettingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.settings), count, timeoutMs);
  }

  async scrollSettingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.settings));
  }

  async longPressPush(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.push));
  }

  async expectPushHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.push), timeoutMs);
  }

  async expectPushText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.push), expected, timeoutMs);
  }

  async expectPushContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.push), substring, timeoutMs);
  }

  async expectPushValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.push), value, timeoutMs);
  }

  async expectPushEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.push), timeoutMs);
  }

  async expectPushDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.push), timeoutMs);
  }

  async expectPushChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.push), timeoutMs);
  }

  async expectPushUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.push), timeoutMs);
  }

  async expectPushFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.push), timeoutMs);
  }

  async expectPushCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.push), count, timeoutMs);
  }

  async scrollPushIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.push));
  }

  async longPressGitTerminal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.gitTerminal));
  }

  async expectGitTerminalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), timeoutMs);
  }

  async expectGitTerminalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), expected, timeoutMs);
  }

  async expectGitTerminalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), substring, timeoutMs);
  }

  async expectGitTerminalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), value, timeoutMs);
  }

  async expectGitTerminalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), timeoutMs);
  }

  async expectGitTerminalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), timeoutMs);
  }

  async expectGitTerminalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), timeoutMs);
  }

  async expectGitTerminalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), timeoutMs);
  }

  async expectGitTerminalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), timeoutMs);
  }

  async expectGitTerminalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.gitTerminal), count, timeoutMs);
  }

  async scrollGitTerminalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.gitTerminal));
  }

  async longPressOverviewSetupMetric(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric));
  }

  async expectOverviewSetupMetricHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), timeoutMs);
  }

  async expectOverviewSetupMetricText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), expected, timeoutMs);
  }

  async expectOverviewSetupMetricContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), substring, timeoutMs);
  }

  async expectOverviewSetupMetricValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), value, timeoutMs);
  }

  async expectOverviewSetupMetricEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), timeoutMs);
  }

  async expectOverviewSetupMetricDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), timeoutMs);
  }

  async expectOverviewSetupMetricChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), timeoutMs);
  }

  async expectOverviewSetupMetricUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), timeoutMs);
  }

  async expectOverviewSetupMetricFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), timeoutMs);
  }

  async expectOverviewSetupMetricCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric), count, timeoutMs);
  }

  async scrollOverviewSetupMetricIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewSetupMetric));
  }

  async longPressOverviewRequirementsMetric(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric));
  }

  async expectOverviewRequirementsMetricHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), timeoutMs);
  }

  async expectOverviewRequirementsMetricText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), expected, timeoutMs);
  }

  async expectOverviewRequirementsMetricContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), substring, timeoutMs);
  }

  async expectOverviewRequirementsMetricValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), value, timeoutMs);
  }

  async expectOverviewRequirementsMetricEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), timeoutMs);
  }

  async expectOverviewRequirementsMetricDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), timeoutMs);
  }

  async expectOverviewRequirementsMetricChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), timeoutMs);
  }

  async expectOverviewRequirementsMetricUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), timeoutMs);
  }

  async expectOverviewRequirementsMetricFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), timeoutMs);
  }

  async expectOverviewRequirementsMetricCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric), count, timeoutMs);
  }

  async scrollOverviewRequirementsMetricIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewRequirementsMetric));
  }

  async longPressOverviewGeneratePomMetric(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric));
  }

  async expectOverviewGeneratePomMetricHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), timeoutMs);
  }

  async expectOverviewGeneratePomMetricText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), expected, timeoutMs);
  }

  async expectOverviewGeneratePomMetricContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), substring, timeoutMs);
  }

  async expectOverviewGeneratePomMetricValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), value, timeoutMs);
  }

  async expectOverviewGeneratePomMetricEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), timeoutMs);
  }

  async expectOverviewGeneratePomMetricDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), timeoutMs);
  }

  async expectOverviewGeneratePomMetricChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), timeoutMs);
  }

  async expectOverviewGeneratePomMetricUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), timeoutMs);
  }

  async expectOverviewGeneratePomMetricFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), timeoutMs);
  }

  async expectOverviewGeneratePomMetricCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric), count, timeoutMs);
  }

  async scrollOverviewGeneratePomMetricIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewGeneratePomMetric));
  }

  async longPressOverviewTestSuitesMetric(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric));
  }

  async expectOverviewTestSuitesMetricHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), timeoutMs);
  }

  async expectOverviewTestSuitesMetricText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), expected, timeoutMs);
  }

  async expectOverviewTestSuitesMetricContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), substring, timeoutMs);
  }

  async expectOverviewTestSuitesMetricValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), value, timeoutMs);
  }

  async expectOverviewTestSuitesMetricEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), timeoutMs);
  }

  async expectOverviewTestSuitesMetricDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), timeoutMs);
  }

  async expectOverviewTestSuitesMetricChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), timeoutMs);
  }

  async expectOverviewTestSuitesMetricUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), timeoutMs);
  }

  async expectOverviewTestSuitesMetricFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), timeoutMs);
  }

  async expectOverviewTestSuitesMetricCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric), count, timeoutMs);
  }

  async scrollOverviewTestSuitesMetricIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewTestSuitesMetric));
  }

  async longPressOverviewShortcutSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup));
  }

  async expectOverviewShortcutSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), timeoutMs);
  }

  async expectOverviewShortcutSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), expected, timeoutMs);
  }

  async expectOverviewShortcutSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), substring, timeoutMs);
  }

  async expectOverviewShortcutSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), value, timeoutMs);
  }

  async expectOverviewShortcutSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), timeoutMs);
  }

  async expectOverviewShortcutSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), timeoutMs);
  }

  async expectOverviewShortcutSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), timeoutMs);
  }

  async expectOverviewShortcutSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), timeoutMs);
  }

  async expectOverviewShortcutSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), timeoutMs);
  }

  async expectOverviewShortcutSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup), count, timeoutMs);
  }

  async scrollOverviewShortcutSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutSetup));
  }

  async longPressOverviewShortcutRequirements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements));
  }

  async expectOverviewShortcutRequirementsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), timeoutMs);
  }

  async expectOverviewShortcutRequirementsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), expected, timeoutMs);
  }

  async expectOverviewShortcutRequirementsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), substring, timeoutMs);
  }

  async expectOverviewShortcutRequirementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), value, timeoutMs);
  }

  async expectOverviewShortcutRequirementsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), timeoutMs);
  }

  async expectOverviewShortcutRequirementsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), timeoutMs);
  }

  async expectOverviewShortcutRequirementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), timeoutMs);
  }

  async expectOverviewShortcutRequirementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), timeoutMs);
  }

  async expectOverviewShortcutRequirementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), timeoutMs);
  }

  async expectOverviewShortcutRequirementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements), count, timeoutMs);
  }

  async scrollOverviewShortcutRequirementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRequirements));
  }

  async longPressOverviewShortcutRecorder(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder));
  }

  async expectOverviewShortcutRecorderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), timeoutMs);
  }

  async expectOverviewShortcutRecorderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), expected, timeoutMs);
  }

  async expectOverviewShortcutRecorderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), substring, timeoutMs);
  }

  async expectOverviewShortcutRecorderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), value, timeoutMs);
  }

  async expectOverviewShortcutRecorderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), timeoutMs);
  }

  async expectOverviewShortcutRecorderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), timeoutMs);
  }

  async expectOverviewShortcutRecorderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), timeoutMs);
  }

  async expectOverviewShortcutRecorderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), timeoutMs);
  }

  async expectOverviewShortcutRecorderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), timeoutMs);
  }

  async expectOverviewShortcutRecorderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder), count, timeoutMs);
  }

  async scrollOverviewShortcutRecorderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutRecorder));
  }

  async longPressOverviewShortcutGeneratePom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom));
  }

  async expectOverviewShortcutGeneratePomHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), timeoutMs);
  }

  async expectOverviewShortcutGeneratePomText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), expected, timeoutMs);
  }

  async expectOverviewShortcutGeneratePomContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), substring, timeoutMs);
  }

  async expectOverviewShortcutGeneratePomValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), value, timeoutMs);
  }

  async expectOverviewShortcutGeneratePomEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), timeoutMs);
  }

  async expectOverviewShortcutGeneratePomDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), timeoutMs);
  }

  async expectOverviewShortcutGeneratePomChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), timeoutMs);
  }

  async expectOverviewShortcutGeneratePomUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), timeoutMs);
  }

  async expectOverviewShortcutGeneratePomFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), timeoutMs);
  }

  async expectOverviewShortcutGeneratePomCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom), count, timeoutMs);
  }

  async scrollOverviewShortcutGeneratePomIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutGeneratePom));
  }

  async longPressOverviewShortcutApis(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis));
  }

  async expectOverviewShortcutApisHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), timeoutMs);
  }

  async expectOverviewShortcutApisText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), expected, timeoutMs);
  }

  async expectOverviewShortcutApisContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), substring, timeoutMs);
  }

  async expectOverviewShortcutApisValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), value, timeoutMs);
  }

  async expectOverviewShortcutApisEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), timeoutMs);
  }

  async expectOverviewShortcutApisDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), timeoutMs);
  }

  async expectOverviewShortcutApisChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), timeoutMs);
  }

  async expectOverviewShortcutApisUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), timeoutMs);
  }

  async expectOverviewShortcutApisFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), timeoutMs);
  }

  async expectOverviewShortcutApisCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis), count, timeoutMs);
  }

  async scrollOverviewShortcutApisIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutApis));
  }

  async longPressOverviewShortcutDatabase(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase));
  }

  async expectOverviewShortcutDatabaseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), timeoutMs);
  }

  async expectOverviewShortcutDatabaseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), expected, timeoutMs);
  }

  async expectOverviewShortcutDatabaseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), substring, timeoutMs);
  }

  async expectOverviewShortcutDatabaseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), value, timeoutMs);
  }

  async expectOverviewShortcutDatabaseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), timeoutMs);
  }

  async expectOverviewShortcutDatabaseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), timeoutMs);
  }

  async expectOverviewShortcutDatabaseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), timeoutMs);
  }

  async expectOverviewShortcutDatabaseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), timeoutMs);
  }

  async expectOverviewShortcutDatabaseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), timeoutMs);
  }

  async expectOverviewShortcutDatabaseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase), count, timeoutMs);
  }

  async scrollOverviewShortcutDatabaseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutDatabase));
  }

  async longPressOverviewShortcutTestPlans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans));
  }

  async expectOverviewShortcutTestPlansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), timeoutMs);
  }

  async expectOverviewShortcutTestPlansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), expected, timeoutMs);
  }

  async expectOverviewShortcutTestPlansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), substring, timeoutMs);
  }

  async expectOverviewShortcutTestPlansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), value, timeoutMs);
  }

  async expectOverviewShortcutTestPlansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), timeoutMs);
  }

  async expectOverviewShortcutTestPlansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), timeoutMs);
  }

  async expectOverviewShortcutTestPlansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), timeoutMs);
  }

  async expectOverviewShortcutTestPlansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), timeoutMs);
  }

  async expectOverviewShortcutTestPlansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), timeoutMs);
  }

  async expectOverviewShortcutTestPlansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans), count, timeoutMs);
  }

  async scrollOverviewShortcutTestPlansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestPlans));
  }

  async longPressOverviewShortcutTestExecution(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution));
  }

  async expectOverviewShortcutTestExecutionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), timeoutMs);
  }

  async expectOverviewShortcutTestExecutionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), expected, timeoutMs);
  }

  async expectOverviewShortcutTestExecutionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), substring, timeoutMs);
  }

  async expectOverviewShortcutTestExecutionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), value, timeoutMs);
  }

  async expectOverviewShortcutTestExecutionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), timeoutMs);
  }

  async expectOverviewShortcutTestExecutionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), timeoutMs);
  }

  async expectOverviewShortcutTestExecutionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), timeoutMs);
  }

  async expectOverviewShortcutTestExecutionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), timeoutMs);
  }

  async expectOverviewShortcutTestExecutionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), timeoutMs);
  }

  async expectOverviewShortcutTestExecutionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution), count, timeoutMs);
  }

  async scrollOverviewShortcutTestExecutionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestExecution));
  }

  async longPressOverviewShortcutTestSuites(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites));
  }

  async expectOverviewShortcutTestSuitesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), timeoutMs);
  }

  async expectOverviewShortcutTestSuitesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), expected, timeoutMs);
  }

  async expectOverviewShortcutTestSuitesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), substring, timeoutMs);
  }

  async expectOverviewShortcutTestSuitesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), value, timeoutMs);
  }

  async expectOverviewShortcutTestSuitesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), timeoutMs);
  }

  async expectOverviewShortcutTestSuitesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), timeoutMs);
  }

  async expectOverviewShortcutTestSuitesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), timeoutMs);
  }

  async expectOverviewShortcutTestSuitesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), timeoutMs);
  }

  async expectOverviewShortcutTestSuitesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), timeoutMs);
  }

  async expectOverviewShortcutTestSuitesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites), count, timeoutMs);
  }

  async scrollOverviewShortcutTestSuitesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestSuites));
  }

  async longPressOverviewShortcutTestReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports));
  }

  async expectOverviewShortcutTestReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), timeoutMs);
  }

  async expectOverviewShortcutTestReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), expected, timeoutMs);
  }

  async expectOverviewShortcutTestReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), substring, timeoutMs);
  }

  async expectOverviewShortcutTestReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), value, timeoutMs);
  }

  async expectOverviewShortcutTestReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), timeoutMs);
  }

  async expectOverviewShortcutTestReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), timeoutMs);
  }

  async expectOverviewShortcutTestReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), timeoutMs);
  }

  async expectOverviewShortcutTestReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), timeoutMs);
  }

  async expectOverviewShortcutTestReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), timeoutMs);
  }

  async expectOverviewShortcutTestReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports), count, timeoutMs);
  }

  async scrollOverviewShortcutTestReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.overviewShortcutTestReports));
  }

  async doubleClickHelpLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectOverviewPage.L.helpLink));
  }

  async longPressHelpLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectOverviewPage.L.helpLink));
  }

  async expectHelpLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectOverviewPage.L.helpLink), timeoutMs);
  }

  async expectHelpLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectOverviewPage.L.helpLink), expected, timeoutMs);
  }

  async expectHelpLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectOverviewPage.L.helpLink), substring, timeoutMs);
  }

  async expectHelpLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectOverviewPage.L.helpLink), value, timeoutMs);
  }

  async expectHelpLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectOverviewPage.L.helpLink), timeoutMs);
  }

  async expectHelpLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectOverviewPage.L.helpLink), timeoutMs);
  }

  async expectHelpLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectOverviewPage.L.helpLink), timeoutMs);
  }

  async expectHelpLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectOverviewPage.L.helpLink), timeoutMs);
  }

  async expectHelpLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectOverviewPage.L.helpLink), timeoutMs);
  }

  async expectHelpLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectOverviewPage.L.helpLink), count, timeoutMs);
  }

  async scrollHelpLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectOverviewPage.L.helpLink));
  }

}
