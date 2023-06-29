export abstract class BasePage {
  protected abstract pageLoadLocator: string

  async waitTillLoaded<T extends BasePage>(
    timeout: number | undefined = undefined,
  ): Promise<T> {
    await $(this.pageLoadLocator).waitForDisplayed({ timeout })
    return this as unknown as T
  }

  async waitTillPageLoad<T extends BasePage>(
    valForReverseProp: boolean,
  ): Promise<T> {
    await (
      await $(this.pageLoadLocator)
    ).waitForDisplayed({ reverse: valForReverseProp })
    return this as unknown as T
  }
}
