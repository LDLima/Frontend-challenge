export class RegistrationPage {
  private get radioBtnMRTreatment() {
    return $('[data-qa="RadioButtonMRS"]')
  }

  private get radiobtnMRSTreatment() {
    return $('[data-qa="RadioButtonMR"]')
  }

  private get radiobtnOtherTreatment() {
    return $('[data-qa="RadioButtonOTHER"]')
  }

  private get txtFirstName() {
    return $('[data-testid="firstName"]')
  }

  private get txtLastName() {
    return $('[data-testid="lastName"]')
  }

  private get txtEmailAddress() {
    return $('[data-testid="emailAddress"]')
  }

  private get txtPassword() {
    return $('[data-testid="password"]')
  }

  private get checkboxBtnPromotion() {
    return $('[data-qa="Checkbox"]')
  }

  private get btnCreateAccount() {
    return $('[data-qa="LoadingButton"]')
  }

  private get btnNotificationError() {
    return $('[data-qa="Notification"]')
  }

  private get passwordVisibility() {
    return $('[data-qa="IconEye"]')
  }

  private get passwordNotVisibile() {
    return $('data-qa="IconEyeInactive"')
  }
}
