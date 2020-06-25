import { createStackNavigator } from 'react-navigation-stack';
import {
  LoginPage,
  SignupPage,
  HomePage,
  InfoDetailPage,
  InfoSelectPage,
  InfoListPage,
  MythsTruthsDetailPage,
  ScheduleSelectPage,
  ScheduleInfoPage,
  ScheduleFormPage,
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
    height: 100
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

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        headerTitle: 'Início',
        ...navigationDefaultOptions,
      },
    },
  },
  {
    initialRouteName: 'Home',
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
    InfoDetail: {
      screen: InfoDetailPage,
      navigationOptions: {
        headerTitle: 'Informação',
        ...navigationDefaultOptions,
      },
    },
    MythsTruthsDetail: {
      screen: MythsTruthsDetailPage,
      navigationOptions: {
        headerTitle: 'Mitos e Verdades',
        ...navigationDefaultOptions,
      },
    },
  },
  {
    initialRouteName: 'InfoSelect',
  }
);

const ScheduleStackNavigator = createStackNavigator(
  {
    ScheduleSelect: {
      screen: ScheduleSelectPage,
      navigationOptions: {
        headerTitle: 'Agendamento',
        ...navigationDefaultOptions,
      },
    },
    ScheduleInfo: {
      screen: ScheduleInfoPage,
      navigationOptions: {
        headerTitle: 'Santa Casa de Taquaritinga',
        ...navigationDefaultOptions,
      },
    },
    ScheduleForm: {
      screen: ScheduleFormPage,
      navigationOptions: {
        headerTitle: 'Solicitar atendimento',
        ...navigationDefaultOptions,
      },
    },
    // InfoDetail: {
    //   screen: InfoDetailPage,
    //   navigationOptions: {
    //     headerTitle: 'Informação',
    //     ...navigationDefaultOptions,
    //   },
    // },
    // MythsTruthsDetail: {
    //   screen: MythsTruthsDetailPage,
    //   navigationOptions: {
    //     headerTitle: 'Mitos e Verdades',
    //     ...navigationDefaultOptions,
    //   },
    // },
  },
  {
    initialRouteName: 'ScheduleSelect',
  }
);

export {
  LoginStackNavigator,
  HomeStackNavigator,
  InfoStackNavigator,
  ScheduleStackNavigator,
};
