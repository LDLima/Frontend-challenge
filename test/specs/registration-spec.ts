import { RegistrationPage } from '../web/pageObjects/registration-page.ts'

describe('Creating account in C&A website Spain', () => {
  const registerPage = new RegistrationPage()

  before(async () => {})
  afterEach(async () => {
    // goHomePage
  })
  after(async () => {
    // Log off
  })

  it('Required fields missing', () => {})
  it('Required fields with incorrect data', () => {})
  it('Password does not matching criteria', () => {})
  it('Email already registered before', () => {})
  it('Password can be visible', () => {})
  it('Register MR user', () => {})
  it('Register MRS user', () => {})
  it('Register Other user', () => {})
  it('Register user with subscribe email and 10% discount account ', () => {})
})
