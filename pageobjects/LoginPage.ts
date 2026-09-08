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

export class LoginPage {
  private static readonly L = {
    signIn: { strategy: 'role' as const, value: 'Sign in', role: 'heading', level: 1, actionKind: 'text' as const },
    backToHome: { strategy: 'role' as const, value: 'Back to home', role: 'link', actionKind: 'link' as const },
    account: { strategy: 'role' as const, value: 'Account', role: 'heading', level: 2, actionKind: 'text' as const },
    loginEmail: { strategy: 'testId' as const, value: 'login-email-input', role: 'textbox', actionKind: 'textbox' as const },
    loginForgotPassword: { strategy: 'testId' as const, value: 'login-forgot-password-link', role: 'link', actionKind: 'link' as const },
    loginPassword: { strategy: 'testId' as const, value: 'login-password-input', role: 'textbox', actionKind: 'textbox' as const },
    loginSubmit: { strategy: 'testId' as const, value: 'login-submit-btn', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextSignIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async expectSignInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.signIn), timeoutMs, soft);
  }

  async clickBackToHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async expectBackToHomeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.backToHome), timeoutMs, soft);
  }

  async getInnerTextAccount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async expectAccountVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.account), timeoutMs, soft);
  }

  async fillLoginEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.loginEmail), value);
  }

  async clearLoginEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.loginEmail));
  }

  async getLoginEmailValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.loginEmail));
  }

  async expectLoginEmailVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs, soft);
  }

  async clickLoginForgotPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginForgotPassword));
  }

  async expectLoginForgotPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginForgotPassword), timeoutMs, soft);
  }

  async fillLoginPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.loginPassword), value);
  }

  async clearLoginPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async getLoginPasswordValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async expectLoginPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs, soft);
  }

  async clickLoginSubmit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginSubmit));
  }

  async doubleClickLoginSubmit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginSubmit));
  }

  async expectLoginSubmitVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginSubmit), timeoutMs, soft);
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


  async clickSignIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async doubleClickSignIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async longPressSignIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async expectSignInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.signIn), expected, timeoutMs);
  }

  async expectSignInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.signIn), substring, timeoutMs);
  }

  async expectSignInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.signIn), value, timeoutMs);
  }

  async expectSignInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.signIn), count, timeoutMs);
  }

  async scrollSignInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async doubleClickBackToHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async longPressBackToHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async expectBackToHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.backToHome), expected, timeoutMs);
  }

  async expectBackToHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.backToHome), substring, timeoutMs);
  }

  async expectBackToHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.backToHome), value, timeoutMs);
  }

  async expectBackToHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.backToHome), timeoutMs);
  }

  async expectBackToHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.backToHome), count, timeoutMs);
  }

  async scrollBackToHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.backToHome));
  }

  async clickAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async doubleClickAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async longPressAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async expectAccountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.account), expected, timeoutMs);
  }

  async expectAccountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.account), substring, timeoutMs);
  }

  async expectAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.account), value, timeoutMs);
  }

  async expectAccountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.account), timeoutMs);
  }

  async expectAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.account), count, timeoutMs);
  }

  async scrollAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.account));
  }

  async typeTextLoginEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.loginEmail), value);
  }

  async expectLoginEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginEmail), expected, timeoutMs);
  }

  async expectLoginEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginEmail), substring, timeoutMs);
  }

  async expectLoginEmailValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginEmail), value, timeoutMs);
  }

  async expectLoginEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginEmail), timeoutMs);
  }

  async expectLoginEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginEmail), count, timeoutMs);
  }

  async scrollLoginEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginEmail));
  }

  async doubleClickLoginForgotPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginForgotPassword));
  }

  async longPressLoginForgotPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginForgotPassword));
  }

  async expectLoginForgotPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginForgotPassword), timeoutMs);
  }

  async expectLoginForgotPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginForgotPassword), expected, timeoutMs);
  }

  async expectLoginForgotPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginForgotPassword), substring, timeoutMs);
  }

  async expectLoginForgotPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginForgotPassword), value, timeoutMs);
  }

  async expectLoginForgotPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginForgotPassword), timeoutMs);
  }

  async expectLoginForgotPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginForgotPassword), timeoutMs);
  }

  async expectLoginForgotPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginForgotPassword), timeoutMs);
  }

  async expectLoginForgotPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginForgotPassword), timeoutMs);
  }

  async expectLoginForgotPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginForgotPassword), timeoutMs);
  }

  async expectLoginForgotPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginForgotPassword), count, timeoutMs);
  }

  async scrollLoginForgotPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginForgotPassword));
  }

  async typeTextLoginPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.loginPassword), value);
  }

  async expectLoginPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginPassword), expected, timeoutMs);
  }

  async expectLoginPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginPassword), substring, timeoutMs);
  }

  async expectLoginPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginPassword), value, timeoutMs);
  }

  async expectLoginPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginPassword), count, timeoutMs);
  }

  async scrollLoginPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async longPressLoginSubmit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginSubmit));
  }

  async expectLoginSubmitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginSubmit), timeoutMs);
  }

  async expectLoginSubmitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginSubmit), expected, timeoutMs);
  }

  async expectLoginSubmitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginSubmit), substring, timeoutMs);
  }

  async expectLoginSubmitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginSubmit), value, timeoutMs);
  }

  async expectLoginSubmitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginSubmit), timeoutMs);
  }

  async expectLoginSubmitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginSubmit), timeoutMs);
  }

  async expectLoginSubmitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginSubmit), timeoutMs);
  }

  async expectLoginSubmitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginSubmit), timeoutMs);
  }

  async expectLoginSubmitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginSubmit), timeoutMs);
  }

  async expectLoginSubmitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginSubmit), count, timeoutMs);
  }

  async scrollLoginSubmitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginSubmit));
  }

}
