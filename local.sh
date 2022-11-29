cd ./node_modules/appium-webdriveragent && \
unzip -o WebDriverAgentRunner-Runner.app.zip -d WebDriverAgentRunner-Runner.app && \
xcrun simctl install "iPhone 14" WebDriverAgentRunner-Runner.app && \
xcrun simctl launch "iPhone 14" com.facebook.WebDriverAgentRunner.xctrunner
