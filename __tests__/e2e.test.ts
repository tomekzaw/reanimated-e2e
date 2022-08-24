import * as WebdriverIO from 'webdriverio';

if (process.env.PLATFORM !== 'android' && process.env.PLATFORM !== 'ios') {
  fail('`PLATFORM` must be either "android" or "ios".');
}

describe('Appium with Jest automation testing', () => {
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
      capabilities: process.env.PLATFORM === 'android' ? android : ios,
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
