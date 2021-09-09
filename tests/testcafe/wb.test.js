import { LOGIN_USERS } from '../configs/e2eConstants';

import { Selector, Browser,ClientFunction } from 'testcafe';


fixture`Test Input`
  .page(`https://www.wildberries.ru/`)
  .beforeEach(async t => {
    await t.resizeWindow(1400, 900);
  });

test('should be able to test loading of login page', async t => {


  const developerNameInput = Selector('body > div.wrapper > header > div > div.header__bottom > div.header__search-catalog.search-catalog.j-search-catalog > div.search-catalog__block > input', { timeout: 5000 });
  await t
    //.expect(developerNameInput.value).eql('-Я ищу...', 'input is empty')
    .typeText(developerNameInput, 'зонт FABRETTI')
    .expect(developerNameInput.value).contains('зонт FABRETTI', 'input contains text "sumki"')
    .pressKey("enter");

  const getLocation = ClientFunction(() => document.location.href, {timeout:5000});
  //await t.expect(Browser.getCurrentLocation()).contains('FABRETTI', {timeout: 5000});
const divSelector = Selector('#catalog > div:nth-child(1) > div.catalog-page > div.new-size.catalog-page__main', {timeout:5000});
  await t.expect(getLocation()).contains('FABRETTI')
  await t.wait(10000).expect(divSelector.exists).ok({timeout:5000});

});

// test('should be able to test loading of login page', async t => {
//   await t.expect(LoginPage.isScreenDisplayed()).ok();
// });

// test('should be able to login with a standard user', async t => {
//   await LoginPage.signIn(LOGIN_USERS.STANDARD);
//   await t.expect(SwagListPage.screen.exists).ok();
// });

// test('should not be able to login with a locked user', async t => {
//   // It doesn't matter which error we check, all errors should be checked in a UT
//   // With this UT we just check that A failure is triggered
//   await t.expect(LoginPage.isErrorMessageDisplayed()).notOk();
//   await LoginPage.signIn(LOGIN_USERS.LOCKED);
//   await t.expect(LoginPage.getErrorMessage()).eql('Epic sadface: Sorry, this user has been locked out.');
// });
