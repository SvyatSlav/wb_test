import { Selector, Browser, ClientFunction } from 'testcafe';


fixture`Test Input`
  .page(`https://www.wildberries.ru/`)
;

test('should be able to test loading of login page', async t => {


  const developerNameInput = Selector('body > div.wrapper > header > div > div.header__bottom > div.header__search-catalog.search-catalog.j-search-catalog > div.search-catalog__block > input', { timeout: 5000 });
  await t
    //.expect(developerNameInput.value).eql('-Я ищу...', 'input is empty')
    .typeText(developerNameInput, 'зонт FABRETTI')
    .expect(developerNameInput.value).contains('зонт FABRETTI', 'input contains text "sumki"')
    .pressKey("enter");

  const getLocation = ClientFunction(() => document.location.href, {timeout:5000});
const divSelector = Selector('#catalog > div:nth-child(1) > div.catalog-page > div.new-size.catalog-page__main', {timeout:5000});
  await t.expect(getLocation()).contains('FABRETTI')
  await t.wait(10000).expect(divSelector.exists).ok({timeout:5000});

  //выбор карточки рандом
  const listItem = Selector('.product-card');
  const res = Selector('.searching-results');
  const bottomItemIndex = await listItem.count-1;
  const bottomItem = listItem.nth(bottomItemIndex);
  await t.click(res);
  await t.wait(500).setTestSpeed(0.01).scrollBy(bottomItem, { speed: 0.01 });
  const i = Math.floor(Math.random() * bottomItemIndex)
  await t.setTestSpeed(0.01).click(listItem.nth(i), { speed: 0.01 });
  await t.wait(5000);
});