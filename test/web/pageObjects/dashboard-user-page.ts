import { BasePage } from './base-page.ts'

export class DashboardPage extends BasePage {
  protected pageLoadLocator: '[data-qa="Copy"]'

  private get txtDashboardWelcome() {
    return $('.sc-bcXHqe.gcZOwi.sc-uhnfH.bNiyoq')
  }

  // Methods
  async getWelcomeMessage(): Promise<string> {
    return await this.txtDashboardWelcome.getText()
  }
}
