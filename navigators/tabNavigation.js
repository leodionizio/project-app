import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  HomeStackNavigator,
  InfoStackNavigator,
  ScheduleStackNavigator,
} from './stackNavigation';

import { Image } from 'react-native';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: () => null,
        tabBarIcon: ({}) => (
          <Image
            source={require('@assets/icons/casa.png')}
            style={{
              width: 30,
              height: 30,
              opacity: navigation.isFocused() ? 1 : 0.3,
            }}
          />
        ),
      }),
    },
    Info: {
      screen: InfoStackNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.routes.length <= 1,
        tabBarLabel: () => null,
        tabBarIcon: () => (
          <Image
            source={require('@assets/icons/informacao.png')}
            style={{
              width: 30,
              height: 30,
              opacity: navigation.isFocused() ? 1 : 0.3,
            }}
          />
        ),
      }),
    },
    Schedule: {
      screen: ScheduleStackNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.routes.length <= 1,
        tabBarLabel: () => null,
        tabBarIcon: (
          <Image
            source={require('@assets/icons/calendario.png')}
            style={{
              width: 30,
              height: 30,
              opacity: navigation.isFocused() ? 1 : 0.3,
            }}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Home',
    // initialRouteName: 'Schedule',
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
      style: {
        height: 60,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2,
        elevation: 1,
      },
    },
  }
);

export default BottomTabNavigator;
