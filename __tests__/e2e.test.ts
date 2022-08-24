import * as WebdriverIO from 'webdriverio';

describe.each(['Android', 'iOS'])('%s', (platform) => {
  let client: WebdriverIO.Browser<'async'>;

  beforeAll(async () => {
    const android = {
      platformName: 'Android',
      app: './android/app/build/outputs/apk/debug/app-debug.apk',
    };

    const ios = {
      platformName: 'iOS',
      deviceName: 'iPhone 13',
      platformVersion: '15.0',
      bundleId: 'org.reactjs.native.example.MyApp',
      automationName: 'XCUITest',
    };

    const opts = {
      path: '/wd/hub',
      port: 4723,
      capabilities: platform === 'Android' ? android : ios,
    };

    client = await WebdriverIO.remote(opts);
    expect(client).toBeDefined();
  });

  afterAll(async () => {
    await client.deleteSession();
  });

  test('incrementing counter works', async () => {
    const text = await client.$('~text');
    const textBefore = await text.getText();
    expect(textBefore).toBe('Count: 0');

    const button = await client.$('~button');
    await button.click();

    await client.pause(100);

    const textAfter = await text.getText();
    expect(textAfter).toBe('Count: 1');
  });
});
