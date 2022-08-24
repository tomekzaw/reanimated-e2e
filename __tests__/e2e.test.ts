import * as WebdriverIO from 'webdriverio';

describe('Appium with Jest automation testing', () => {
  let client: WebdriverIO.Browser<'async'>;

  beforeAll(async () => {
    const opts = {
      path: '/wd/hub',
      port: 4723,
      capabilities: {
        platformName: 'Android',
        app: './android/app/build/outputs/apk/debug/app-debug.apk',
      },
    };

    client = await WebdriverIO.remote(opts);
    expect(client).toBeDefined();
  });

  afterAll(async () => {
    await client.deleteSession();
  });

  test('incrementing counter works', async () => {
    const field = await client.$('android.widget.TextView');
    const textBefore = await field.getText();
    expect(textBefore).toBe('Count: 0');

    const button = await client.$('android.widget.Button');
    await button.click();

    await client.pause(100);

    const textAfter = await field.getText();
    expect(textAfter).toBe('Count: 1');
  });
});
