import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GroupCard from '../components/GroupCard';
import data from './data';

export default function DiscoverScreen() {
  const categories = Object.keys(data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Discover</Text>
        </View>
        {categories.map((category) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{category}</Text>
            <ScrollView
              horizontal
              style={styles.categoryRow}
              contentContainerStyle={{ paddingHorizontal: 12 }}
            >
              {data[category].map(({ img, title, desc, tags, members }) => (
                <GroupCard
                  img={img}
                  title={title}
                  desc={desc}
                  tags={tags}
                  members={members}
                />
              ))}
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  titleContainer: {
    marginBottom: 24,
  },
  categoryContainer: {
    marginVertical: 12,
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryRow: {
    marginHorizontal: -24,
  },
});
