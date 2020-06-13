import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default class InfoReferences extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Todas as informações a seguir, foram retiradas do site do minitério da
          saúde.
        </Text>
        <Text
          style={styles.link}
          accessibilityRole="link"
          href="https://saude.gov.br/saude-de-a-z"
          target="_blank"
        >
          https://saude.gov.br/saude-de-a-z
        </Text>
      </View>
    );
  }
}
