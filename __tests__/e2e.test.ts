import * as WebdriverIO from 'webdriverio';

describe.each(['Android', 'iOS'])('%s', platform => {
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

  afterEach(async () => {
    // await client.reset();

    const button = await client.$('~menu');
    await button.click();
    await client.pause(200);
  });

  afterAll(async () => {
    await client.deleteSession();
  });

  async function openTest(name: string) {
    const button = await client.$('~' + name);
    await button.click();
    await client.pause(200);
  }

  test('hello world', async () => {
    await openTest('HelloWorld');

    const text = await client.$('~text');
    const string = await text.getText();
    expect(string).toBe('Hello world!');
  });

  test('animate width', async () => {
    await openTest('AnimateWidth');

    const box = await client.$('~box');
    const before = await box.getSize();

    const button = await client.$('~button');
    await button.click();
    await client.pause(200);

    const after = await box.getSize();
    expect(after.width).not.toBe(before.width);
  });

  test('scroll to', async () => {
    await openTest('ScrollTo');

    const box = await client.$('~box-orange'); // for some reason it doesn't work with ~box-red
    const before = await box.getLocation();

    const button = await client.$('~Button');
    await button.click();
    await client.pause(500);

    const after = await box.getLocation();
    expect(after.y).not.toBe(before.y);
  });
});