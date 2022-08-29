import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button, StyleSheet, View} from 'react-native';

import React from 'react';
import {testProps} from '../utils';

export function AnimateWidth() {
  const width = useSharedValue(100);

  const box = useAnimatedStyle(() => ({width: width.value}));

  const handlePress = () => {
    width.value = withTiming(250, {duration: 150});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, box]} {...testProps('box')} />
      <Button onPress={handlePress} title="Button" {...testProps('button')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    backgroundColor: 'navy',
  },
});
