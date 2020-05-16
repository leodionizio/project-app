import { createStackNavigator } from 'react-navigation-stack';
import {
  LoginPage,
  SignupPage,
  InfoPage,
  InfoSelectPage,
  InfoListPage,
} from '@pages';

import { colors } from '../src/constants';

const navigationDefaultOptions = {
  headerTitleStyle: {
    color: colors.lightColor,
  },
  headerTintColor: colors.lightColor,
  headerStyle: {
    backgroundColor: colors.secondary,
    shadowColor: colors.defaultColor,
  },
};

const LoginStackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
      headerMode: 'none',
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup: {
      screen: SignupPage,
      navigationOptions: {
        headerTitle: 'Cadastro',
        ...navigationDefaultOptions,
      },
    },
  },
  {
    initialRouteName: 'Login',
  }
);

const InfoStackNavigator = createStackNavigator(
  {
    InfoSelect: {
      screen: InfoSelectPage,
      navigationOptions: {
        headerTitle: 'Dúvidas e Informações',
        ...navigationDefaultOptions,
      },
    },
    InfoList: {
      screen: InfoListPage,
      navigationOptions: {
        headerTitle: 'Informações',
        ...navigationDefaultOptions,
      },
    },
    Info: {
      screen: InfoPage,
      navigationOptions: {
        headerTitle: 'Dúvidas e Informações',
        ...navigationDefaultOptions,
      },
    },
  },
  {
    initialRouteName: 'InfoSelect',
  }
);

export { LoginStackNavigator, InfoStackNavigator };
