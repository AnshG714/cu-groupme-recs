import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Discover: {
            screens: {
              DiscoverScreen: 'one',
            },
          },
          Suggest: {
            screens: {
              SuggestScreen: 'two',
            },
          },
          AddGroup: {
            screens: {
              AddGroupScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
