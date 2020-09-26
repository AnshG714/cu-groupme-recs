import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DiscoverScreen from '../screens/DiscoverScreen';
import SuggestScreen from '../screens/SuggestScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import {
  AddGroupParamList,
  BottomTabParamList,
  DiscoverParamList,
  SuggestParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Discover"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: {
          paddingVertical: 6,
        },
      }}
    >
      <BottomTab.Screen
        name="Discover"
        component={DiscoverNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-compass" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Suggest"
        component={SuggestNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-chatboxes" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add Group"
        component={AddGroupNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-people" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={25} style={{ marginBottom: 4 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const DiscoverStack = createStackNavigator<DiscoverParamList>();

function DiscoverNavigator() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{ headerShown: false }}
      />
    </DiscoverStack.Navigator>
  );
}

const SuggestStack = createStackNavigator<SuggestParamList>();

function SuggestNavigator() {
  return (
    <SuggestStack.Navigator>
      <SuggestStack.Screen
        name="SuggestScreen"
        component={SuggestScreen}
        options={{ headerShown: false }}
      />
    </SuggestStack.Navigator>
  );
}

const AddGroupStack = createStackNavigator<AddGroupParamList>();

function AddGroupNavigator() {
  return (
    <AddGroupStack.Navigator>
      <AddGroupStack.Screen
        name="AddGroupScreen"
        component={AddGroupScreen}
        options={{ headerShown: false }}
      />
    </AddGroupStack.Navigator>
  );
}
