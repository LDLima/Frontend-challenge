import { IDashboardSteps } from '../../interfaces/steps/iDashboardSteps.ts'
import { DashboardPage } from '../pageObjects/dashboard-user-page.ts'

export class DashboardPageSteps implements IDashboardSteps {
  dashboardPage = new DashboardPage()

  async getWelcomeMessage(): Promise<string> {
    return await this.dashboardPage.getWelcomeMessage()
  }
}
