import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { FormInput, CustomButton, CustomTextLink, Navbar } from '@components/index';

import { styles } from './styles';

export default class InfoPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar title="Dúvidas e informações" />

        <Text>Bem-vindo! Informações</Text>
      </View>
    );
  }
}
