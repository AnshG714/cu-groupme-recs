import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function GroupDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: NavigationProp<any, any>;
}) {
  const { title, desc, tags, members } = route.params;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ fontSize: 20 }}>{'<'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
