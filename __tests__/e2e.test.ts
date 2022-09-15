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
      platformVersion: '15.5',
      bundleId: 'org.reactjs.native.example.MyApp',
      automationName: 'XCUITest',
    };

    const opts = {
      path: '/wd/hub',
      port: 4723,
      capabilities: process.env.PLATFORM === 'android' ? android : ios,
    };

    client = await WebdriverIO.remote(opts);
    if (!client) {
      fail('Failed to initialize client');
    }

    if (process.env.CI === 'true') {
      await client.pause(15000); // it helps the CI
    }
  });

  afterEach(async () => {
    // await client.reset();

    const button = await client.$('~menu');
    await button.click();
    await client.pause(1000);
  });

  afterAll(async () => {
    await client.deleteSession();
  });

  async function openTest(name: string) {
    const button = await client.$('~' + name);
    await button.click();
    await client.pause(1000);
  }

  test('hello world', async () => {
    await openTest('HelloWorld');

    const text = await client.$('~text');
    const string = await text.getText();
    expect(string).toBe('Hello world!');
  });

  test('interpolate background color', async () => {
    await openTest('InterpolateBackgroundColor');

    const box = await client.$('~box');
    const button = await client.$('~button');

    const before = await client.takeElementScreenshot(box.elementId);

    await button.click();
    await client.pause(2500);

    const after = await client.takeElementScreenshot(box.elementId);

    // TODO: fix Android on CI
    if (process.env.PLATFORM === 'ios') {
      // TODO: compare pixel colors
      expect(before).not.toBe(after);
    }
  });

  test('animate width', async () => {
    await openTest('AnimateWidth');

    const box1 = await client.$('~box1');
    const box2 = await client.$('~box2');
    const button = await client.$('~button');

    const before1 = await box1.getSize();
    const before2 = await box2.getSize();

    await button.click();
    await client.pause(1000);

    const after1 = await box1.getSize();
    const after2 = await box2.getSize();

    expect(after1.width).not.toBe(before1.width);
    expect(after2.width).not.toBe(before2.width);
  });

  test('scroll to', async () => {
    await openTest('ScrollTo');

    const box = await client.$('~box-orange'); // for some reason it doesn't work with ~box-red
    const button = await client.$('~Button');

    const before = await box.getLocation();

    await button.click();
    await client.pause(2000);

    const after = await box.getLocation();

    expect(after.y).not.toBe(before.y);
  });
});
