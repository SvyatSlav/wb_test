import { Selector, Browser, ClientFunction } from 'testcafe';

fixture`MyIP UA`
  .page(`https://www.whatismyip.com/user-agent/`);

test('get myip page', async t => {
  await t.wait(5000);
});


fixture`MyIP IP`
  .page(`https://www.whatismyip.com/my-ip-information/`);

test('get myip page', async t => {
  await t.wait(5000);
});