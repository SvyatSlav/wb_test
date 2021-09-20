import { Selector, Browser, ClientFunction } from 'testcafe';

fixture`MyIP`
  .page(`https://www.whatismyip.com/user-agent/`);

test('get myip page', async t => {
  await t.wait(5000);
});