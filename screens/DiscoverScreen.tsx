import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GroupCard from '../components/GroupCard';
import data from './data';

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Discover</Text>
        {data.map(({ img, title, desc, tags, members }) => (
          <GroupCard
            img={img}
            title={title}
            desc={desc}
            tags={tags}
            members={members}
          />
        ))}
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
