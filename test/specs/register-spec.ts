import { IRegisterSteps } from '../interfaces/steps/IRegisterSteps.ts'
import { IHomeSteps } from '../interfaces/steps/IHomeSteps.ts'
import { ErrorMessage } from '../helpers/enum/errorMessage.ts'
import { IDashboardSteps } from '../interfaces/steps/iDashboardSteps.ts'
import { SuccessMessage } from '../helpers/enum/successMessage.ts'
import { HomePageSteps } from '../web/steps/home-page-steps.ts'
import { RegistrationPageSteps } from '../web/steps/register-page-steps.ts'
import { DashboardPageSteps } from '../web/steps/dashboard-page-steps.ts'

describe('Creating account in C&A website Spain', () => {
  let homeSteps: IHomeSteps
  let registerSteps: IRegisterSteps
  let dashboardSteps: IDashboardSteps

  before(async () => {
    await browser.url('https://www.c-and-a.com/es/es/shop') // Fix URL - in the base file. Why not getting from there?
    homeSteps = new HomePageSteps()
    registerSteps = new RegistrationPageSteps()
    dashboardSteps = new DashboardPageSteps()

    await homeSteps.setAllowCookies()
  })

  beforeEach(async () => {
    await homeSteps.openLoginSidebar()
    await homeSteps.openRegisterAccountPage()
  })

  afterEach(async () => {
    await browser.url('https://www.c-and-a.com/es/es/shop') // Fix URL - in the base file. Why not getting from there?
  })

  it('Required fields missing', async () => {
    await registerSteps.registerAccountWithoutAnyRequiredFields()
    const error = await registerSteps.getRequiredErrorNotification()
    expect(error).toEqual(ErrorMessage.REQUIRED_DATA_NOT_INPUT)
  })

  it('Required fields with one digit', async () => {
    await registerSteps.inputOnlyOneDigitCharacterData()
    const error = await registerSteps.getOneDigitErrorNotification()
    expect(error).toEqual(ErrorMessage.ONE_DIGIT)
  })

  it('Verify register account when password does not matching criteria', async () => {
    await registerSteps.registerAccountWithWrongPassword()
    const error = await registerSteps.getPopUpNotificationError()
    expect(error).toEqual(ErrorMessage.INCORRECT_PASS)
  })

  it('Email already registered before', async () => {
    await registerSteps.registerAccountWithDuplicatedEmail()
    const error = await registerSteps.getPopUpNotificationError()
    expect(error).toEqual(ErrorMessage.EMAIL_ALREADY_REGISTERED)
  })

  it('Register user account with subscribe email and 10% discount account ', async () => {
    await registerSteps.registerAccount()
    const welcomeTxt = await dashboardSteps.getWelcomeMessage()
    expect(welcomeTxt).toContain(SuccessMessage.WELCOME_TEXT)
  })
})
