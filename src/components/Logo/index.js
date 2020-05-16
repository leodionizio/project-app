import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoImage} source={require('@assets/images/logo.png')} />
        <Text style={styles.logoTitle}>Gota de Amor</Text>
      </View>
    );
  }
}
