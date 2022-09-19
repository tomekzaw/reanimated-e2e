import {Platform, Text} from 'react-native';

import React from 'react';
import {version as reactNativeVersion} from 'react-native/package.json';
import {version as reanimatedVersion} from 'react-native-reanimated/package.json';
import {testProps} from '../utils';

function getPlatform() {
  // @ts-ignore
  return `${Platform.constants.systemName} ${Platform.Version}`;
}

function getRuntime() {
  return 'HermesInternal' in global ? 'Hermes' : 'JSC'; // TODO: V8
}

function getArchitecture() {
  return '_nativeFabricUIManager' in global ? 'Fabric' : 'Paper';
}

export function HelloWorld() {
  return (
    <>
      <Text {...testProps('text')}>Hello world!</Text>
      <Text>React Native version: {reactNativeVersion}</Text>
      <Text>Reanimated version: {reanimatedVersion}</Text>
      <Text>Platform: {getPlatform()}</Text>
      <Text>Architecture: {getArchitecture()}</Text>
      <Text>Runtime: {getRuntime()}</Text>
    </>
  );
}
