const loginPage = require("../pages/login.page")
const utilPage = require("../pages/util.page")
const dashboardPage = require("../pages/dashboard.page")
const confirmationPage = require("../pages/confirmation.page")
const assertLogin = require("../assert_data/login")
const assertDashboard = require("../assert_data/dashboard")
const payload = require("../payloads/login")


describe('Notarize Signer Login Page', () => {

  beforeEach(() => {
    loginPage.loadLoginPage();
  })

  it('should display correct Login page title', () => {
    utilPage.getPageTitle(assertLogin.title)
  });

  it('should display correct error for missing email', () => {
    loginPage.loginNoEmail();
    utilPage.verifyErrorMsg(loginPage.validationMsg, assertLogin.no_email_error);
  });

  it('should display correct error for missing password', () => {
    loginPage.login(payload.valid.email, '');
    utilPage.verifyErrorMsg(loginPage.validationMsg, assertLogin.no_password_error);
  });

  it('should display correct error for login attempt with invalid password', () => {
    loginPage.login(payload.valid.email, payload.invalid.password);
    utilPage.verifyErrorMsg(loginPage.errorMsg, assertLogin.invalid_credentials_error);
  });

  it('should login with valid credentials', () => {
    loginPage.login(payload.valid.email, payload.valid.password);

    let url = utilPage.getUrl();

    if (url === assertLogin.url_dashboard) {
      expect(utilPage.getText(dashboardPage.accountDataHeader)).toEqual(`${assertDashboard.first_name} ${assertDashboard.last_name}`);
    } else {
      expect(utilPage.getValue(confirmationPage.firstNameField)).toEqual(assertDashboard.first_name);
      expect(utilPage.getValue(confirmationPage.lastNameField)).toEqual(assertDashboard.last_name);
    }
  });
});