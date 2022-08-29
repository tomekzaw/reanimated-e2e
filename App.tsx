import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

export function testProps(testID: string) {
  return Platform.OS === 'ios'
    ? {testID, accessible: false}
    : {accessible: true, accessibilityLabel: testID};
}

const TESTS = [HelloWorld, AnimateWidth, ScrollTo];

function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text {...testProps('text')}>Hello world!</Text>
    </View>
  );
}

function AnimateWidth() {
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

function ScrollTo() {
  const ref = React.useRef<ScrollView>(null);

  const COLORS = [
    'red',
    'orange',
    'yellow',
    'lime',
    'blue',
    'purple',
    'pink',
    'brown',
    'black',
  ];

  const scroll = () => {
    ref.current?.scrollTo({y: 200});
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={ref} {...testProps('ScrollView')} style={{width: 200}}>
        {COLORS.map(color => (
          <View
            key={color}
            style={{flex: 1, height: 200, backgroundColor: color}}
            {...testProps(`box-${color}`)}
          />
        ))}
      </ScrollView>
      <Button title="Button" onPress={scroll} {...testProps('Button')} />
    </View>
  );
}

interface TestProps {
  name: string;
}

function Test({name}: TestProps) {
  switch (name) {
    case 'HelloWorld':
      return <HelloWorld />;
    case 'AnimateWidth':
      return <AnimateWidth />;
    case 'ScrollTo':
      return <ScrollTo />;
  }
  return <></>;
}

export default function App() {
  const [currentTest, setCurrentTest] = React.useState<string | null>(null);

  if (currentTest !== null) {
    return (
      <View style={styles.container}>
        <Test name={currentTest} />
        <Button
          title="Reset"
          {...testProps('reset')}
          onPress={() => setCurrentTest(null)}
        />
      </View>
    );
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
      <Button
        title="Reset"
        {...testProps('reset')}
        onPress={() => setCurrentTest(null)}
      />
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
