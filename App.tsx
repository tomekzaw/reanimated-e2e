import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export function testProps(testID: string) {
  return Platform.OS === 'ios'
    ? {testID, accessible: false}
    : {accessible: true, accessibilityLabel: testID};
}

const TESTS = [HelloWorld, AnimateWidth];

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text {...testProps('text')}>Hello world!</Text>
    </View>
  );
}

export function AnimateWidth() {
  const width = useSharedValue(100);

  const box = useAnimatedStyle(() => ({width: width.value}));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, box]} {...testProps('box')} />
      <Button
        onPress={() => {
          width.value = withTiming(250, {duration: 150});
        }}
        title="Button"
        {...testProps('button')}
      />
    </View>
  );
}

export default function App() {
  const [currentTest, setCurrentTest] = React.useState<string | null>(null);

  switch (currentTest) {
    case 'HelloWorld':
      return <HelloWorld />;
    case 'AnimateWidth':
      return <AnimateWidth />;
  }

  return (
    <View style={styles.container}>
      {TESTS.map(test => (
        <Button
          key={test.name}
          title={test.name}
          {...testProps(test.name)}
          onPress={() => setCurrentTest(test.name)}
        />
      ))}
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
