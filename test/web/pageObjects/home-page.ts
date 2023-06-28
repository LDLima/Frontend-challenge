import { InfoData } from '../../helpers/enumData/infoData'
import { IHomePage } from '../../interfaces/iHomePage'

export class HomePage implements IHomePage {
  private get btnHeaderAccount() {
    return $('[data-qa="HeaderAccountButton"]')
  }

  private get txtEmailLogin() {
    return $('[data-testid="myaccount_login_email"]')
  }

  private get txtPassLogin() {
    return $('[data-testid="myaccount_login_password"]')
  }

  private get btnForgetPassword() {
    return $('.sc-fnGiBr.dQbVBj')
  }

  private get btnLogin() {
    return $('[data-qa="LoadingButton"]')
  }

  private get btnRegisterAccount() {
    return $('.sc-hLBbgP.bOWkvw.sc-fnGiBr.gamjbs')
  }

  private get btnCancelLogin() {
    return $('//button[@class="sc-gwpYQS lkUqJN"]')
  }

  private get errorNotification() {
    return $('[data-qa="InlineNotification"]')
  }

  private get txtResetEmail() {
    return $('[data-testid="myaccount_reset_email"]')
  }

  private get passwordVisibility() {
    return $('[data-qa="IconEye"]')
  }

  private get passwordNotVisibile() {
    return $('data-qa="IconEyeInactive"')
  }

  async enterEmail(): Promise<void> {
    await this.btnHeaderAccount.click()
    await this.txtEmailLogin.setValue(InfoData.SUCCESS_EMAIL)
  }

  async login(): Promise<void> {
    await this.btnLogin.click()
  }
}
