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

export class AutonixPage {
  private static readonly L = {
    signIn: { strategy: 'role' as const, value: 'Sign in', role: 'link', actionKind: 'link' as const },
    getStarted: { strategy: 'role' as const, value: 'Get started', role: 'link', actionKind: 'link' as const },
    fromProductIntentTo: { strategy: 'role' as const, value: 'From product intent to runnable tests', role: 'heading', level: 1, actionKind: 'text' as const },
    getStartedFree: { strategy: 'role' as const, value: 'Get started free', role: 'link', actionKind: 'link' as const },
    onePipelineFromIntent: { strategy: 'role' as const, value: 'One pipeline from intent to tests', role: 'heading', level: 2, actionKind: 'text' as const },
    captureRequirements: { strategy: 'role' as const, value: 'Capture requirements', role: 'heading', level: 3, actionKind: 'text' as const },
    generateTestPlan: { strategy: 'role' as const, value: 'Generate test plan', role: 'heading', level: 3, actionKind: 'text' as const },
    buildPageObjects: { strategy: 'role' as const, value: 'Build page objects', role: 'heading', level: 3, actionKind: 'text' as const },
    runTests: { strategy: 'role' as const, value: 'Run tests', role: 'heading', level: 3, actionKind: 'text' as const },
    builtForWebAnd: { strategy: 'role' as const, value: 'Built for web and mobile QA', role: 'heading', level: 2, actionKind: 'text' as const },
    webMobileProjects: { strategy: 'role' as const, value: 'Web & mobile projects', role: 'heading', level: 3, actionKind: 'text' as const },
    browserDeviceRecorder: { strategy: 'role' as const, value: 'Browser & device recorder', role: 'heading', level: 3, actionKind: 'text' as const },
    frameworksOnDisk: { strategy: 'role' as const, value: 'Frameworks on disk', role: 'heading', level: 3, actionKind: 'text' as const },
    readyToAutomate: { strategy: 'role' as const, value: 'Ready to automate?', role: 'heading', level: 2, actionKind: 'text' as const },
    readTheGuide: { strategy: 'role' as const, value: 'Read the guide', role: 'link', actionKind: 'link' as const },
    register: { strategy: 'role' as const, value: 'Register', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  /** "Sign in" matches 2 elements with the exact same locator (e.g. a repeated list/feed item) — pass index (0-based, default 0) to pick a specific occurrence. No distinguishing context was found between occurrences — check the page manually to know which is which. */
  async clickSignIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, { ...AutonixPage.L.signIn }));
  }

  async expectSignInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, { ...AutonixPage.L.signIn }), timeoutMs, soft);
  }

  async clickGetStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.getStarted));
  }

  async expectGetStartedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.getStarted), timeoutMs, soft);
  }

  async getInnerTextFromProductIntentTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.fromProductIntentTo));
  }

  async expectFromProductIntentToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.fromProductIntentTo), timeoutMs, soft);
  }

  async clickGetStartedFree(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.getStartedFree));
  }

  async expectGetStartedFreeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.getStartedFree), timeoutMs, soft);
  }

  async getInnerTextOnePipelineFromIntent(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.onePipelineFromIntent));
  }

  async expectOnePipelineFromIntentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), timeoutMs, soft);
  }

  async getInnerTextCaptureRequirements(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.captureRequirements));
  }

  async expectCaptureRequirementsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.captureRequirements), timeoutMs, soft);
  }

  async getInnerTextGenerateTestPlan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.generateTestPlan));
  }

  async expectGenerateTestPlanVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.generateTestPlan), timeoutMs, soft);
  }

  async getInnerTextBuildPageObjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.buildPageObjects));
  }

  async expectBuildPageObjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.buildPageObjects), timeoutMs, soft);
  }

  async getInnerTextRunTests(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.runTests));
  }

  async expectRunTestsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.runTests), timeoutMs, soft);
  }

  async getInnerTextBuiltForWebAnd(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.builtForWebAnd));
  }

  async expectBuiltForWebAndVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.builtForWebAnd), timeoutMs, soft);
  }

  async getInnerTextWebMobileProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.webMobileProjects));
  }

  async expectWebMobileProjectsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.webMobileProjects), timeoutMs, soft);
  }

  async getInnerTextBrowserDeviceRecorder(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.browserDeviceRecorder));
  }

  async expectBrowserDeviceRecorderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), timeoutMs, soft);
  }

  async getInnerTextFrameworksOnDisk(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.frameworksOnDisk));
  }

  async expectFrameworksOnDiskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.frameworksOnDisk), timeoutMs, soft);
  }

  async getInnerTextReadyToAutomate(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AutonixPage.L.readyToAutomate));
  }

  async expectReadyToAutomateVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.readyToAutomate), timeoutMs, soft);
  }

  async clickReadTheGuide(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.readTheGuide));
  }

  async expectReadTheGuideVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.readTheGuide), timeoutMs, soft);
  }

  async clickRegister(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.register));
  }

  async expectRegisterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AutonixPage.L.register), timeoutMs, soft);
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


  async doubleClickSignIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.signIn));
  }

  async longPressSignIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.signIn));
  }

  async expectSignInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.signIn), timeoutMs);
  }

  async expectSignInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.signIn), expected, timeoutMs);
  }

  async expectSignInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.signIn), substring, timeoutMs);
  }

  async expectSignInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.signIn), value, timeoutMs);
  }

  async expectSignInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.signIn), timeoutMs);
  }

  async expectSignInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.signIn), timeoutMs);
  }

  async expectSignInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.signIn), timeoutMs);
  }

  async expectSignInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.signIn), timeoutMs);
  }

  async expectSignInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.signIn), timeoutMs);
  }

  async expectSignInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.signIn), count, timeoutMs);
  }

  async scrollSignInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.signIn));
  }

  async doubleClickGetStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.getStarted));
  }

  async longPressGetStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.getStarted));
  }

  async expectGetStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.getStarted), expected, timeoutMs);
  }

  async expectGetStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.getStarted), substring, timeoutMs);
  }

  async expectGetStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.getStarted), value, timeoutMs);
  }

  async expectGetStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.getStarted), timeoutMs);
  }

  async expectGetStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.getStarted), count, timeoutMs);
  }

  async scrollGetStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.getStarted));
  }

  async clickFromProductIntentTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.fromProductIntentTo));
  }

  async doubleClickFromProductIntentTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.fromProductIntentTo));
  }

  async longPressFromProductIntentTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.fromProductIntentTo));
  }

  async expectFromProductIntentToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.fromProductIntentTo), timeoutMs);
  }

  async expectFromProductIntentToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.fromProductIntentTo), expected, timeoutMs);
  }

  async expectFromProductIntentToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.fromProductIntentTo), substring, timeoutMs);
  }

  async expectFromProductIntentToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.fromProductIntentTo), value, timeoutMs);
  }

  async expectFromProductIntentToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.fromProductIntentTo), timeoutMs);
  }

  async expectFromProductIntentToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.fromProductIntentTo), timeoutMs);
  }

  async expectFromProductIntentToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.fromProductIntentTo), timeoutMs);
  }

  async expectFromProductIntentToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.fromProductIntentTo), timeoutMs);
  }

  async expectFromProductIntentToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.fromProductIntentTo), timeoutMs);
  }

  async expectFromProductIntentToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.fromProductIntentTo), count, timeoutMs);
  }

  async scrollFromProductIntentToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.fromProductIntentTo));
  }

  async doubleClickGetStartedFree(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.getStartedFree));
  }

  async longPressGetStartedFree(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.getStartedFree));
  }

  async expectGetStartedFreeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.getStartedFree), timeoutMs);
  }

  async expectGetStartedFreeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.getStartedFree), expected, timeoutMs);
  }

  async expectGetStartedFreeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.getStartedFree), substring, timeoutMs);
  }

  async expectGetStartedFreeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.getStartedFree), value, timeoutMs);
  }

  async expectGetStartedFreeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.getStartedFree), timeoutMs);
  }

  async expectGetStartedFreeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.getStartedFree), timeoutMs);
  }

  async expectGetStartedFreeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.getStartedFree), timeoutMs);
  }

  async expectGetStartedFreeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.getStartedFree), timeoutMs);
  }

  async expectGetStartedFreeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.getStartedFree), timeoutMs);
  }

  async expectGetStartedFreeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.getStartedFree), count, timeoutMs);
  }

  async scrollGetStartedFreeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.getStartedFree));
  }

  async clickOnePipelineFromIntent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.onePipelineFromIntent));
  }

  async doubleClickOnePipelineFromIntent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.onePipelineFromIntent));
  }

  async longPressOnePipelineFromIntent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.onePipelineFromIntent));
  }

  async expectOnePipelineFromIntentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), timeoutMs);
  }

  async expectOnePipelineFromIntentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), expected, timeoutMs);
  }

  async expectOnePipelineFromIntentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), substring, timeoutMs);
  }

  async expectOnePipelineFromIntentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), value, timeoutMs);
  }

  async expectOnePipelineFromIntentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), timeoutMs);
  }

  async expectOnePipelineFromIntentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), timeoutMs);
  }

  async expectOnePipelineFromIntentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), timeoutMs);
  }

  async expectOnePipelineFromIntentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), timeoutMs);
  }

  async expectOnePipelineFromIntentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), timeoutMs);
  }

  async expectOnePipelineFromIntentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.onePipelineFromIntent), count, timeoutMs);
  }

  async scrollOnePipelineFromIntentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.onePipelineFromIntent));
  }

  async clickCaptureRequirements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.captureRequirements));
  }

  async doubleClickCaptureRequirements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.captureRequirements));
  }

  async longPressCaptureRequirements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.captureRequirements));
  }

  async expectCaptureRequirementsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.captureRequirements), timeoutMs);
  }

  async expectCaptureRequirementsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.captureRequirements), expected, timeoutMs);
  }

  async expectCaptureRequirementsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.captureRequirements), substring, timeoutMs);
  }

  async expectCaptureRequirementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.captureRequirements), value, timeoutMs);
  }

  async expectCaptureRequirementsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.captureRequirements), timeoutMs);
  }

  async expectCaptureRequirementsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.captureRequirements), timeoutMs);
  }

  async expectCaptureRequirementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.captureRequirements), timeoutMs);
  }

  async expectCaptureRequirementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.captureRequirements), timeoutMs);
  }

  async expectCaptureRequirementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.captureRequirements), timeoutMs);
  }

  async expectCaptureRequirementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.captureRequirements), count, timeoutMs);
  }

  async scrollCaptureRequirementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.captureRequirements));
  }

  async clickGenerateTestPlan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.generateTestPlan));
  }

  async doubleClickGenerateTestPlan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.generateTestPlan));
  }

  async longPressGenerateTestPlan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.generateTestPlan));
  }

  async expectGenerateTestPlanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.generateTestPlan), timeoutMs);
  }

  async expectGenerateTestPlanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.generateTestPlan), expected, timeoutMs);
  }

  async expectGenerateTestPlanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.generateTestPlan), substring, timeoutMs);
  }

  async expectGenerateTestPlanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.generateTestPlan), value, timeoutMs);
  }

  async expectGenerateTestPlanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.generateTestPlan), timeoutMs);
  }

  async expectGenerateTestPlanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.generateTestPlan), timeoutMs);
  }

  async expectGenerateTestPlanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.generateTestPlan), timeoutMs);
  }

  async expectGenerateTestPlanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.generateTestPlan), timeoutMs);
  }

  async expectGenerateTestPlanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.generateTestPlan), timeoutMs);
  }

  async expectGenerateTestPlanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.generateTestPlan), count, timeoutMs);
  }

  async scrollGenerateTestPlanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.generateTestPlan));
  }

  async clickBuildPageObjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.buildPageObjects));
  }

  async doubleClickBuildPageObjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.buildPageObjects));
  }

  async longPressBuildPageObjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.buildPageObjects));
  }

  async expectBuildPageObjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.buildPageObjects), timeoutMs);
  }

  async expectBuildPageObjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.buildPageObjects), expected, timeoutMs);
  }

  async expectBuildPageObjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.buildPageObjects), substring, timeoutMs);
  }

  async expectBuildPageObjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.buildPageObjects), value, timeoutMs);
  }

  async expectBuildPageObjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.buildPageObjects), timeoutMs);
  }

  async expectBuildPageObjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.buildPageObjects), timeoutMs);
  }

  async expectBuildPageObjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.buildPageObjects), timeoutMs);
  }

  async expectBuildPageObjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.buildPageObjects), timeoutMs);
  }

  async expectBuildPageObjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.buildPageObjects), timeoutMs);
  }

  async expectBuildPageObjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.buildPageObjects), count, timeoutMs);
  }

  async scrollBuildPageObjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.buildPageObjects));
  }

  async clickRunTests(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.runTests));
  }

  async doubleClickRunTests(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.runTests));
  }

  async longPressRunTests(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.runTests));
  }

  async expectRunTestsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.runTests), timeoutMs);
  }

  async expectRunTestsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.runTests), expected, timeoutMs);
  }

  async expectRunTestsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.runTests), substring, timeoutMs);
  }

  async expectRunTestsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.runTests), value, timeoutMs);
  }

  async expectRunTestsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.runTests), timeoutMs);
  }

  async expectRunTestsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.runTests), timeoutMs);
  }

  async expectRunTestsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.runTests), timeoutMs);
  }

  async expectRunTestsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.runTests), timeoutMs);
  }

  async expectRunTestsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.runTests), timeoutMs);
  }

  async expectRunTestsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.runTests), count, timeoutMs);
  }

  async scrollRunTestsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.runTests));
  }

  async clickBuiltForWebAnd(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.builtForWebAnd));
  }

  async doubleClickBuiltForWebAnd(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.builtForWebAnd));
  }

  async longPressBuiltForWebAnd(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.builtForWebAnd));
  }

  async expectBuiltForWebAndHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.builtForWebAnd), timeoutMs);
  }

  async expectBuiltForWebAndText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.builtForWebAnd), expected, timeoutMs);
  }

  async expectBuiltForWebAndContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.builtForWebAnd), substring, timeoutMs);
  }

  async expectBuiltForWebAndValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.builtForWebAnd), value, timeoutMs);
  }

  async expectBuiltForWebAndEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.builtForWebAnd), timeoutMs);
  }

  async expectBuiltForWebAndDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.builtForWebAnd), timeoutMs);
  }

  async expectBuiltForWebAndChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.builtForWebAnd), timeoutMs);
  }

  async expectBuiltForWebAndUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.builtForWebAnd), timeoutMs);
  }

  async expectBuiltForWebAndFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.builtForWebAnd), timeoutMs);
  }

  async expectBuiltForWebAndCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.builtForWebAnd), count, timeoutMs);
  }

  async scrollBuiltForWebAndIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.builtForWebAnd));
  }

  async clickWebMobileProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.webMobileProjects));
  }

  async doubleClickWebMobileProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.webMobileProjects));
  }

  async longPressWebMobileProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.webMobileProjects));
  }

  async expectWebMobileProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.webMobileProjects), timeoutMs);
  }

  async expectWebMobileProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.webMobileProjects), expected, timeoutMs);
  }

  async expectWebMobileProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.webMobileProjects), substring, timeoutMs);
  }

  async expectWebMobileProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.webMobileProjects), value, timeoutMs);
  }

  async expectWebMobileProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.webMobileProjects), timeoutMs);
  }

  async expectWebMobileProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.webMobileProjects), timeoutMs);
  }

  async expectWebMobileProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.webMobileProjects), timeoutMs);
  }

  async expectWebMobileProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.webMobileProjects), timeoutMs);
  }

  async expectWebMobileProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.webMobileProjects), timeoutMs);
  }

  async expectWebMobileProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.webMobileProjects), count, timeoutMs);
  }

  async scrollWebMobileProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.webMobileProjects));
  }

  async clickBrowserDeviceRecorder(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.browserDeviceRecorder));
  }

  async doubleClickBrowserDeviceRecorder(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.browserDeviceRecorder));
  }

  async longPressBrowserDeviceRecorder(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.browserDeviceRecorder));
  }

  async expectBrowserDeviceRecorderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), timeoutMs);
  }

  async expectBrowserDeviceRecorderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), expected, timeoutMs);
  }

  async expectBrowserDeviceRecorderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), substring, timeoutMs);
  }

  async expectBrowserDeviceRecorderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), value, timeoutMs);
  }

  async expectBrowserDeviceRecorderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), timeoutMs);
  }

  async expectBrowserDeviceRecorderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), timeoutMs);
  }

  async expectBrowserDeviceRecorderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), timeoutMs);
  }

  async expectBrowserDeviceRecorderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), timeoutMs);
  }

  async expectBrowserDeviceRecorderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), timeoutMs);
  }

  async expectBrowserDeviceRecorderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.browserDeviceRecorder), count, timeoutMs);
  }

  async scrollBrowserDeviceRecorderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.browserDeviceRecorder));
  }

  async clickFrameworksOnDisk(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.frameworksOnDisk));
  }

  async doubleClickFrameworksOnDisk(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.frameworksOnDisk));
  }

  async longPressFrameworksOnDisk(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.frameworksOnDisk));
  }

  async expectFrameworksOnDiskHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.frameworksOnDisk), timeoutMs);
  }

  async expectFrameworksOnDiskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.frameworksOnDisk), expected, timeoutMs);
  }

  async expectFrameworksOnDiskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.frameworksOnDisk), substring, timeoutMs);
  }

  async expectFrameworksOnDiskValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.frameworksOnDisk), value, timeoutMs);
  }

  async expectFrameworksOnDiskEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.frameworksOnDisk), timeoutMs);
  }

  async expectFrameworksOnDiskDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.frameworksOnDisk), timeoutMs);
  }

  async expectFrameworksOnDiskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.frameworksOnDisk), timeoutMs);
  }

  async expectFrameworksOnDiskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.frameworksOnDisk), timeoutMs);
  }

  async expectFrameworksOnDiskFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.frameworksOnDisk), timeoutMs);
  }

  async expectFrameworksOnDiskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.frameworksOnDisk), count, timeoutMs);
  }

  async scrollFrameworksOnDiskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.frameworksOnDisk));
  }

  async clickReadyToAutomate(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AutonixPage.L.readyToAutomate));
  }

  async doubleClickReadyToAutomate(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.readyToAutomate));
  }

  async longPressReadyToAutomate(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.readyToAutomate));
  }

  async expectReadyToAutomateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.readyToAutomate), timeoutMs);
  }

  async expectReadyToAutomateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.readyToAutomate), expected, timeoutMs);
  }

  async expectReadyToAutomateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.readyToAutomate), substring, timeoutMs);
  }

  async expectReadyToAutomateValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.readyToAutomate), value, timeoutMs);
  }

  async expectReadyToAutomateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.readyToAutomate), timeoutMs);
  }

  async expectReadyToAutomateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.readyToAutomate), timeoutMs);
  }

  async expectReadyToAutomateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.readyToAutomate), timeoutMs);
  }

  async expectReadyToAutomateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.readyToAutomate), timeoutMs);
  }

  async expectReadyToAutomateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.readyToAutomate), timeoutMs);
  }

  async expectReadyToAutomateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.readyToAutomate), count, timeoutMs);
  }

  async scrollReadyToAutomateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.readyToAutomate));
  }

  async doubleClickReadTheGuide(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.readTheGuide));
  }

  async longPressReadTheGuide(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.readTheGuide));
  }

  async expectReadTheGuideHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.readTheGuide), timeoutMs);
  }

  async expectReadTheGuideText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.readTheGuide), expected, timeoutMs);
  }

  async expectReadTheGuideContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.readTheGuide), substring, timeoutMs);
  }

  async expectReadTheGuideValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.readTheGuide), value, timeoutMs);
  }

  async expectReadTheGuideEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.readTheGuide), timeoutMs);
  }

  async expectReadTheGuideDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.readTheGuide), timeoutMs);
  }

  async expectReadTheGuideChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.readTheGuide), timeoutMs);
  }

  async expectReadTheGuideUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.readTheGuide), timeoutMs);
  }

  async expectReadTheGuideFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.readTheGuide), timeoutMs);
  }

  async expectReadTheGuideCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.readTheGuide), count, timeoutMs);
  }

  async scrollReadTheGuideIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.readTheGuide));
  }

  async doubleClickRegister(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AutonixPage.L.register));
  }

  async longPressRegister(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AutonixPage.L.register));
  }

  async expectRegisterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AutonixPage.L.register), timeoutMs);
  }

  async expectRegisterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AutonixPage.L.register), expected, timeoutMs);
  }

  async expectRegisterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AutonixPage.L.register), substring, timeoutMs);
  }

  async expectRegisterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AutonixPage.L.register), value, timeoutMs);
  }

  async expectRegisterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AutonixPage.L.register), timeoutMs);
  }

  async expectRegisterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AutonixPage.L.register), timeoutMs);
  }

  async expectRegisterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AutonixPage.L.register), timeoutMs);
  }

  async expectRegisterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AutonixPage.L.register), timeoutMs);
  }

  async expectRegisterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AutonixPage.L.register), timeoutMs);
  }

  async expectRegisterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AutonixPage.L.register), count, timeoutMs);
  }

  async scrollRegisterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AutonixPage.L.register));
  }

}
