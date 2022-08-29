import {Button, StyleSheet, View} from 'react-native';

import {AnimateWidth} from './screens/AnimateWidth';
import {HelloWorld} from './screens/HelloWorld';
import React from 'react';
import {ScrollTo} from './screens/ScrollTo';
import {testProps} from './utils';

const TESTS = [HelloWorld, AnimateWidth, ScrollTo];

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
});
