import {Button, Platform, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export function testProps(testID: string) {
  return Platform.OS === 'ios'
    ? {testID, accessible: false}
    : {accessible: true, accessibilityLabel: testID};
}

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text {...testProps('text')}>Count: {count}</Text>
      <Button
        onPress={() => setCount(c => c + 1)}
        title="Increment"
        {...testProps('button')}
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
