import { createSwitchNavigator } from 'react-navigation';
import BottomTabNavigator from './tabNavigation';
import { LoginStackNavigator } from './stackNavigation';

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: LoginStackNavigator,
    Tabs: BottomTabNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);

export default AppSwitchNavigator;
