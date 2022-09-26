cd ./node_modules/appium-webdriveragent && \
unzip -o WebDriverAgentRunner-Runner.app.zip -d WebDriverAgentRunner-Runner.app && \
xcrun simctl install "iPhone 14 Pro Max" WebDriverAgentRunner-Runner.app && \
xcrun simctl launch "iPhone 14 Pro Max" com.facebook.WebDriverAgentRunner.xctrunner
