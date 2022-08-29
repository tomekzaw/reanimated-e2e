describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('increments couter after tap', async () => {
    await expect(element(by.id('text'))).toHaveText('Count: 0');
    await element(by.id('button')).tap();
    await expect(element(by.id('text'))).toHaveText('Count: 1');
  });
});
