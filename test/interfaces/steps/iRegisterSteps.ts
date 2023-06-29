export interface IRegisterSteps {
  registerAccount(): Promise<void>
  registerAccountWithDuplicatedEmail(): Promise<void>
  registerAccountWithoutAnyRequiredFields(): Promise<void>
  inputOnlyOneDigitCharacterData(): Promise<void>
  registerAccountWithWrongPassword(): Promise<void>
  getRequiredErrorNotification(): Promise<string>
  getOneDigitErrorNotification(): Promise<string>
  getPopUpNotificationError(): Promise<string>
}
