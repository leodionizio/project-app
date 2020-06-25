import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';
import AppSwitchNavigator from '@navigators/switchNavigation';
import { makeServer } from './server.mock';

if (window.server) {
  server.shutdown();
}

window.server = makeServer();

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
  constructor() {
    super();
    this.state = { fontsLoaded: false };
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        ruluko: require('./src/assets/fonts/Ruluko-Regular.ttf'),
        'alex-brush': require('./src/assets/fonts/AlexBrush-Regular.ttf'),
      });

      this.setState({ fontsLoaded: true });
    } catch (error) {
      console.log('error on loading fonts');
    }
  }

  render() {
    if (this.state.fontsLoaded) {
      return <AppContainer />;
    } else {
      return <ActivityIndicator size="large" color="#5FB9AF" />;
    }
  }
}
