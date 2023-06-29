import { ErrorMessage } from '../../helpers/enum/errorMessage.ts'
import { InfoData } from '../../helpers/enumData/infoData.ts'
import { RegisterPage } from '../pageObjects/register-page.ts'

export class RegistrationPageSteps {
  registerPage = new RegisterPage()

  async registerAccount(): Promise<void> {
    await this.sendValues()
    await this.btnRegisterAccount()
  }

  async registerAccountWithDuplicatedEmail(): Promise<void> {
    await this.sendDuplicateEmailValue()
    await this.btnRegisterAccount()
  }

  async sendDuplicateEmailValue(): Promise<void> {
    await this.sendFirstNameValue(InfoData.FIRST_NAME)
    await this.sendLastNameValue(InfoData.LAST_NAME)
    await this.sendEmailValue(InfoData.REGISTERED_EMAIL)
    await this.sendPasswordValue(InfoData.SUCCESS_PASS)
  }

  async registerAccountWithWrongPassword(): Promise<void> {
    await this.sendWrongPassValue()
    await this.btnRegisterAccount()
  }

  async sendWrongPassValue(): Promise<void> {
    await this.sendFirstNameValue(InfoData.FIRST_NAME)
    await this.sendLastNameValue(InfoData.LAST_NAME)
    await this.sendEmailValue(InfoData.SUCCESS_EMAIL)
    await this.sendPasswordValue(InfoData.INCORRECT_PASS)
  }

  async sendValues(): Promise<void> {
    await this.sendFirstNameValue(InfoData.FIRST_NAME)
    await this.sendLastNameValue(InfoData.LAST_NAME)
    await this.sendEmailValue(InfoData.SUCCESS_EMAIL)
    await this.sendPasswordValue(InfoData.SUCCESS_PASS)
  }

  async inputOnlyOneDigitCharacterData(): Promise<void> {
    await this.sendOneDigitValue()
    await this.btnRegisterAccount()
  }

  async sendOneDigitValue(): Promise<void> {
    await this.sendFirstNameValue(InfoData.ONE_DIGIT_DATA)
    await this.sendLastNameValue(InfoData.ONE_DIGIT_DATA)
    await this.sendEmailValue(InfoData.ONE_DIGIT_DATA)
  }

  async registerAccountWithoutAnyRequiredFields(): Promise<void> {
    await this.sendEmtpyValue()
    await this.btnRegisterAccount()
  }

  async sendEmtpyValue(): Promise<void> {
    await this.sendFirstNameValue(InfoData.EMPTY_DATA)
    await this.sendLastNameValue(InfoData.EMPTY_DATA)
    await this.sendEmailValue(InfoData.EMPTY_DATA)
  }

  async sendPasswordValue(pass: string): Promise<void> {
    await this.registerPage.setPassword(pass)
  }

  async sendEmailValue(email: string): Promise<void> {
    await this.registerPage.setEmail(email)
  }

  async sendFirstNameValue(name: string): Promise<void> {
    await this.registerPage.setFirstName(name)
  }

  async sendLastNameValue(lastName: string): Promise<void> {
    await this.registerPage.setLastName(lastName)
  }

  async btnRegisterAccount(): Promise<void> {
    await this.registerPage.registerAccount()
  }

  async getOneDigitErrorNotification(): Promise<string> {
    return await this.registerPage.getError(ErrorMessage.ONE_DIGIT)
  }

  async getRequiredErrorNotification(): Promise<string> {
    return await this.registerPage.getError(
      ErrorMessage.REQUIRED_DATA_NOT_INPUT,
    )
  }

  async getPopUpNotificationError(): Promise<string> {
    return await this.registerPage.getPopUpError()
  }
}
