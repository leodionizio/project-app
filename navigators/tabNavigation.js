import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomePage, InfoSelectPage, SchedulePage } from '@pages';
import { InfoStackNavigator } from './stackNavigation';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
    },
    Info: {
      screen: InfoStackNavigator,
    },
    Schedule: {
      screen: SchedulePage,
    },
  },
  {
    initialRouteName: 'Info',
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);

export default BottomTabNavigator;
