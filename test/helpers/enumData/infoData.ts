/**
 * Since there is no API, the data is being set here.
 * The plan was to create a json file, but the deliver time was shorted, then it will be set manually.
 */

export enum InfoData {
  /**
   * For your tests to work, define in the variables below, the desired info for the sucCess case.
   * For the other scenarios, is not required.
   */
  SUCCESS_EMAIL = 'TestOP+7@gmail.com', // IT'S REQUIRED TO CHANGE! WITH THE CURRENT EMAIL, WILL ONLY EXECUTE AND BE CORRECT IN THE FIRST RUN
  SUCCESS_PASS = 'Test12345*',
  INCORRECT_EMAIL = 'opTestInmail.com',
  INCORRECT_PASS = 'test12345',

  FIRST_NAME = 'Test',
  LAST_NAME = 'CYA',

  REGISTERED_EMAIL = 'test@test.com',

  EMPTY_DATA = '',
  ONE_DIGIT_DATA = 'a',
}
