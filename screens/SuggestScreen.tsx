import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function SuggestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Suggest</Text>
      </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
