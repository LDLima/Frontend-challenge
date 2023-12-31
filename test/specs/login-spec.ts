import { IHomeSteps } from '../interfaces/steps/iHomeSteps.ts'

describe('Login account in C&A website Spain', () => {
  let homePage: IHomeSteps

  before(async () => {})
  afterEach(async () => {})
  after(async () => {
    // Log off
  })

  it('Enter Here', async () => {
    await browser.url('https://www.c-and-a.com/es/es/shop') // Fix URL - in the base file. Why not getting from there?
    console.log('Open Browser in the link')
    console.log('Stop here')
  })

  it('Required fields missing', () => {})
  it('Incorrect email', () => {})
  it('Incorrect password', () => {})
  it('Email not registered', () => {})
  it('Password is visible', () => {})
  it('Reset password', () => {})
  it('Login MR user', () => {})
  it('Login MRS user', () => {})
  it('Login Other user', () => {})
})
