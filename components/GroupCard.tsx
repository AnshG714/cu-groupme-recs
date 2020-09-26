import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from './Themed';

type GroupCardProps = {
  img: string;
  title: string;
  desc: string;
  tags: string[];
  members: number;
};

export default ({ img, title, desc, tags, members }: GroupCardProps) => {
  const topTags = tags.length <= 4 ? tags : tags.slice(0, 4);
  return (
    <View style={styles.card}>
      <Image source={{ uri: img }} style={styles.img} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.desc}>
          {desc}
        </Text>
        <View style={styles.detailsContainer}>
          <View style={styles.membersContainer}>
            <Ionicons name="md-people" size={20} style={styles.icon} />
            <Text style={styles.members}>{members}</Text>
          </View>
          <View style={styles.tagsContainer}>
            {topTags.map((tag) => (
              <Text style={styles.tag}>{tag}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 320,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
  },
  img: {
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 5,
  },
  desc: {
    color: '#9B9B9B',
    fontSize: 17,
    marginBottom: 7,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  membersContainer: {
    marginRight: 22,
  },
  icon: {
    color: '#4a4a4a',
    alignSelf: 'center',
  },
  members: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  tagsContainer: {
    display: 'flex',
    flexShrink: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 0.5,
    borderRadius: 10,
    marginVertical: 4,
    marginHorizontal: 2,
  },
});
