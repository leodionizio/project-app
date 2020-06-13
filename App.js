import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';
import AppSwitchNavigator from '@navigators/switchNavigation';

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  componentDidMount() {
    this._loadFonts();
  }

  _loadFonts = async () => {
    try {
      await Font.loadAsync({
        'Ruluko': require('@assets/fonts/Ruluko-Regular.ttf'),
        'AlexBrush': require('@assets/fonts/AlexBrush-Regular.ttf'),
      }).then(() => {
        this.setState({ isReady: true });
      });
    } catch (error) {
      console.log('error on loading fonts');
    }
  };

  render() {
    if (!this.state.isReady) {
      return <ActivityIndicator size="large" color="#5FB9AF" />;
    } else {
      return <AppContainer />;
    }
  }
}
