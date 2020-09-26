import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AddGroupScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Group</Text>
      </View>
      <Text style={styles.bodyText}>
        Want to add your group to this app? Click on the button below and fill
        out the form!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  titleContainer: {
    paddingBottom: 24,
  },
  bodyText: {
    fontSize: 18,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
