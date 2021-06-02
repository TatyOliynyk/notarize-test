const utilPage = require('./util.page');

class LoginPage {

  get emailField() { return $('[data-automation-id="email-field"]') }
  get passwordField() { return $('[data-automation-id="password-field"]') }
  get continueBtn() { return $('[data-automation-id="button"]') }
  get validationMsg() { return $('[data-automation-id="validation-message"]') }
  get errorMsg() { return $("p._2tb3vp5uEt7R6ZimSOFqlx") }

  loadLoginPage() {
    utilPage.open('https://app.notarize.com/login')
  }

  login(email, password) {
    utilPage.waitAndInputText(this.emailField, email)
    utilPage.waitAndClick(this.continueBtn)
    utilPage.waitAndInputText(this.passwordField, password)
    utilPage.waitAndClick(this.continueBtn)
  }

  loginNoEmail() {
    utilPage.waitAndInputText(this.emailField, '')
    utilPage.waitAndClick(this.continueBtn)
  }
}
module.exports = new LoginPage();