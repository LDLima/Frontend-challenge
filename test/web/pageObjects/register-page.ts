import { BasePage } from './base-page.ts'

export class RegisterPage extends BasePage {
  protected pageLoadLocator = '[data-qa="RadioButtonMRS"]'

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
    return $('[data-qa="IconEyeInactive"]')
  }

  private get errorNotification() {
    return $$('.sc-bcXHqe.ePCDxv')
  }

  private get popUpErrorNotification() {
    return $('.sc-gKPRtg.cDHNOj')
  }

  // Methods
  async registerAccount(): Promise<void> {
    await this.waitTillLoaded()
    await this.btnCreateAccount.click()
  }

  async setFirstName(name: string): Promise<void> {
    await this.waitTillLoaded()
    await this.txtFirstName.setValue(name)
  }

  async setLastName(name: string): Promise<void> {
    await this.waitTillLoaded()
    await this.txtLastName.setValue(name)
  }

  async setEmail(email: string): Promise<void> {
    await this.txtEmailAddress.setValue(email)
  }

  async setPassword(pass: string): Promise<void> {
    await this.txtPassword.setValue(pass)
  }

  async getError(error: string): Promise<string> {
    const possibleErrors = await this.errorNotification.length
    for (let index = 0; index <= possibleErrors; index++) {
      if ((await this.errorNotification[index].getText()) === error) {
        return this.errorNotification[index].getText()
      }
    }
    return 'noError'
  }

  async getPopUpError(): Promise<string> {
    return await this.popUpErrorNotification.getText()
  }
}
