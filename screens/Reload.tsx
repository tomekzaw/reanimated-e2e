import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button, DevSettings, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

import {testProps} from '../utils';

function RotatingBox() {
  const sv = useSharedValue(0);

  useEffect(() => {
    sv.value = 0;
    sv.value = withTiming(90);
  }, [sv]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${sv.value}deg`}],
    backgroundColor: 'lime',
  }));

  return <Animated.View style={[styles.box, animatedStyle]} />;
}

export function Reload() {
  const handlePress = () => {
    DevSettings.reload(); // this is a no-op in release mode
  };

  return (
    <>
      <RotatingBox />
      <Button title="Reload" onPress={handlePress} {...testProps('button')} />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
