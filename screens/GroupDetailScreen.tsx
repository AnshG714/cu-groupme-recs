import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GroupDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: NavigationProp<any, any>;
}) {
  const { img, title, desc, tags, members } = route.params;
  const topTags = tags.length <= 4 ? tags : tags.slice(0, 4);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.topBar}
        >
          <Text style={{ fontSize: 20 }}>{'<'}</Text>
        </TouchableOpacity>
        <Image source={{ uri: img }} style={styles.imgStyle} />
        <Text style={styles.headerStyle}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="md-people" size={20} style={styles.iconStyle} />
          <Text style={{ marginTop: 2 }}>{members}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {topTags.map((tag: string) => (
            <View style={{ borderRadius: 10, marginBottom: 20 }}>
              <Text style={styles.tag}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text>{desc}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join GroupMe now!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: '100%',
  },
  topBar: {
    marginBottom: 20,
  },
  imgStyle: {
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerStyle: {
    textAlign: 'center',
    fontWeight: '600',
  },
  iconStyle: {
    color: '#4a4a4a',
    alignSelf: 'center',
    marginRight: 3,
  },
  tag: {
    backgroundColor: '#d5d5d5',
    paddingHorizontal: 8,
    paddingVertical: 0.5,
    marginVertical: 4,
    marginHorizontal: 2,
  },
  space: {
    height: 100,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
    alignSelf: 'center',
    height: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
