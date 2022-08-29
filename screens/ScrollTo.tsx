import {Button, ScrollView, StyleSheet, View} from 'react-native';

import React from 'react';
import {testProps} from '../utils';

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

export function ScrollTo() {
  const ref = React.useRef<ScrollView>(null);

  const scroll = () => {
    ref.current?.scrollTo({y: 200});
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={ref} {...testProps('ScrollView')}>
        {COLORS.map(color => (
          <View
            key={color}
            style={[styles.box, {backgroundColor: color}]}
            {...testProps(`box-${color}`)}
          />
        ))}
      </ScrollView>
      <Button title="Button" onPress={scroll} {...testProps('Button')} />
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
  },
});
