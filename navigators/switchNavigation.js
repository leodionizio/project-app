import { createSwitchNavigator } from 'react-navigation';

import { LoginPage, SignupPage } from '@pages';
import BottomTabNavigator from './tabNavigation';

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginPage
  },
  Signup: {
    screen: SignupPage
  },
  Tabs: BottomTabNavigator

}, {
  initialRouteName: 'Login'
});

export default AppSwitchNavigator;