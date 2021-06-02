class UtilPage {

  open(url) {
    browser.url(url);
  }

  getPageTitle(pageTitle) {
    browser.waitUntil(function () {
      return (browser.getTitle() === pageTitle)
    }, 10000, "correct title is not displayed")
    return browser.getTitle();
  }

  waitAndInputText(element, text) {
    element.waitForDisplayed();
    element.setValue(text);
  }

  waitAndClick(element) {
    element.waitForDisplayed();
    element.click();
  }

  getText(element) {
    element.waitForDisplayed();
    return element.getText();
  }

  getValue(element) {
    element.waitForDisplayed();
    return element.getValue();
  }
  verifyErrorMsg(element, text) {
    element.waitForDisplayed();
    expect(element.getText()).toEqual(text)
  }

  getUrl() {
    browser.pause(3000)
    return browser.getUrl();
  };
}
module.exports = new UtilPage();