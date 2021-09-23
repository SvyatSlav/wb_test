import { Selector, Browser, ClientFunction } from 'testcafe';

fixture`MyIP UA`
  .page(`https://www.whatismyip.com/user-agent/`);

test('get myip page', async t => {
  await t.wait(5000);
});


fixture`MyIP IP`
  .page(`https://www.myip.com/`);

test('get myip page', async t => {
  await t.wait(5000);
});