import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {testProps} from '../utils';

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text {...testProps('text')}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
