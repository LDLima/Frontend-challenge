export abstract class Page {
  protected abstract pageLoadLocator: string

  async waitTillLoaded<T extends Page>(
    timeout: number | undefined = undefined,
  ): Promise<T> {
    await $(this.pageLoadLocator).waitForDisplayed({ timeout })
    return this as unknown as T
  }

  async waitTillPageLoad<T extends Page>(
    valForReverseProp: boolean,
  ): Promise<T> {
    await (
      await $(this.pageLoadLocator)
    ).waitForDisplayed({ reverse: valForReverseProp })
    return this as unknown as T
  }
}
