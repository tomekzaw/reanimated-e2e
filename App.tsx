import {Button, StyleSheet, View} from 'react-native';

import {AnimateWidth} from './screens/AnimateWidth';
import {HelloWorld} from './screens/HelloWorld';
import React from 'react';
import {ScrollTo} from './screens/ScrollTo';
import {testProps} from './utils';

const TESTS = [HelloWorld, AnimateWidth, ScrollTo];

export default function App() {
  const [currentTest, setCurrentTest] = React.useState<() => JSX.Element>();

  return (
    <View style={styles.container}>
      {currentTest !== undefined ? (
        <>
          {React.createElement(currentTest)}
          <Button
            title="Menu"
            {...testProps('menu')}
            onPress={() => setCurrentTest(undefined)}
          />
        </>
      ) : (
        TESTS.map(test => (
          <Button
            key={test.name}
            title={test.name}
            {...testProps(test.name)}
            onPress={() => setCurrentTest(() => test)}
          />
        ))
      )}
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
