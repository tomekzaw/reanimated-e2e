import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(c => c + 1)} title="Increment" />
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
