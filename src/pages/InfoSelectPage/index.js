import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { FormInput, CustomButton, CustomTextLink, Navbar } from '@components';

import { styles } from './styles';

export default class InfoSelectPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bem-vindo! Informações</Text>

        <Button onPress={() => navigate('InfoList')} title="Navegar"/>
      </View>
    );
  }
}
