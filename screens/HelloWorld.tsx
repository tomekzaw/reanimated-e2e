import {Platform, Text} from 'react-native';

import React from 'react';
import {version as reactNativeGestureHandlerVersion} from 'react-native-gesture-handler/package.json';
import {version as reactNativeReanimatedVersion} from 'react-native-reanimated/package.json';
import {version as reactNativeScreensVersion} from 'react-native-screens/package.json';
import {version as reactNativeSvgVersion} from 'react-native-svg/package.json';
import {version as reactNativeVersion} from 'react-native/package.json';
import {testProps} from '../utils';

function getPlatform() {
  // @ts-ignore
  const os = Platform.constants.systemName || Platform.constants.Brand;
  return `${os} ${Platform.Version}`;
}

function getMode() {
  return __DEV__ ? 'Debug' : 'Release';
}

function getRuntime() {
  return 'HermesInternal' in global ? 'Hermes' : 'JSC'; // TODO: V8
}

function getArchitecture() {
  return 'nativeFabricUIManager' in global ? 'Fabric' : 'Paper';
}

export function HelloWorld() {
  return (
    <>
      <Text {...testProps('text')}>Hello world!</Text>
      <Text>React Native version: {reactNativeVersion}</Text>
      <Text>Reanimated version: {reactNativeReanimatedVersion}</Text>
      <Text>Gesture Handler version: {reactNativeGestureHandlerVersion}</Text>
      <Text>Screens version: {reactNativeScreensVersion}</Text>
      <Text>SVG version: {reactNativeSvgVersion}</Text>
      <Text>Platform: {getPlatform()}</Text>
      <Text>Mode: {getMode()}</Text>
      <Text>Architecture: {getArchitecture()}</Text>
      <Text>Runtime: {getRuntime()}</Text>
    </>
  );
}
