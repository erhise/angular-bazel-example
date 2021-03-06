import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get('/');
    return browser.waitForAngular();
  }

  async waitForElement(el, timeout = 10000) {
    await browser.wait(() => el.isPresent(), timeout);
    await browser.wait(() => el.isDisplayed(), timeout);
    return el;
  }

  async getParagraphText() {
    return (await this.waitForElement(element(by.css('div')))).getText();
  }

  async typeInInput(s: string) {
    return (await this.waitForElement(element(by.css('input')))).sendKeys(s);
  }
}
