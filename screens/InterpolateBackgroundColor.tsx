import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button, StyleSheet, View} from 'react-native';

import React from 'react';
import {testProps} from '../utils';

export function InterpolateBackgroundColor() {
  const sv = useSharedValue(0);

  const box = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(sv.value, [0, 1], ['red', 'blue']);
    return {backgroundColor};
  });

  const handlePress = () => {
    sv.value = withTiming(1, {duration: 500});
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
    width: 200,
    height: 200,
    backgroundColor: 'black',
  },
});
