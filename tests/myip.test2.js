import { Selector, Browser, ClientFunction } from 'testcafe';

fixture`MyIP UA`
  .page(`https://yandex.ru/internet`);

test('get myip page', async t => {
  await t.wait(5000);
});