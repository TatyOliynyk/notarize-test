class ConfirmationPage {

    get firstNameField() { return $('[data-automation-id="first-name-field"]') }
    get lastNameField() { return $('[data-automation-id="last-name-field"]') }
  
  }
  module.exports = new ConfirmationPage();