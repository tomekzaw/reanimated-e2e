cd ./node_modules/appium-webdriveragent && \
unzip -o WebDriverAgentRunner-Runner.app.zip -d WebDriverAgentRunner-Runner.app && \
xcrun simctl install "iPhone 13" WebDriverAgentRunner-Runner.app && \
xcrun simctl launch "iPhone 13" com.facebook.WebDriverAgentRunner.xctrunner
