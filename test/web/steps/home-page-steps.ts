import { HomePage } from '../pageObjects/home-page.ts'

export class HomePageSteps {
  homePage = new HomePage()

  async openLoginSidebar(): Promise<void> {
    await this.homePage.openLoginSidebar()
  }

  async openRegisterAccountPage(): Promise<void> {
    await this.homePage.enterInRegisterAccountPage()
  }

  async setAllowCookies(): Promise<void> {
    await this.homePage.setAllowCookies()
  }
}
