describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it.each([1, 2, 3, 4, 5])('increments couter after tap %d times', async (count) => {
    await expect(element(by.id('text'))).toHaveText('Count: 0');
    for (let i = 0; i < count; i++) {
      await element(by.id('button')).tap();
    }
    await expect(element(by.id('text'))).toHaveText(`Count: ${count}`);
  });
});
