import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  const handlePress = () => setCount(c => c + 1);

  return (
    <View style={styles.container}>
      <Text testID="text">Count: {count}</Text>
      <Button onPress={handlePress} title="Increment" testID="button" />
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
