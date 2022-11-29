import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button, StyleSheet, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';

import React from 'react';
import {testProps} from '../utils';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

Animated.addWhitelistedNativeProps({r: true});

export function AnimateSvg() {
  const sv = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    return {
      r: `${5 + sv.value * 40}%`,
    };
  });

  const handlePress = () => {
    sv.value = withTiming(1, {duration: 500});
  };

  return (
    <>
      <View style={styles.container}>
        <Svg height="200" width="200" {...testProps('svg')}>
          <AnimatedCircle
            cx="50%"
            cy="50%"
            fill="lime"
            animatedProps={animatedProps}
          />
        </Svg>
      </View>
      <Button onPress={handlePress} title="Button" {...testProps('button')} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
