
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginPage from './src/pages/LoginPage/index';

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginPage
  }
}, {
  initialRouteName: 'Login'
});

const App = createAppContainer(AppSwitchNavigator);

export default App;
