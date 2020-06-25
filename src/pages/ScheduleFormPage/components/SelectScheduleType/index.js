import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';

import { styles } from './styles';

export default class SelectScheduleType extends Component {
  render() {
    const { handleSelectType, type } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>O que deseja solicitar?</Text>
        <TouchableWithoutFeedback onPress={() => handleSelectType(1)}>
          <View style={type === 1 ? styles.cardSelected : styles.card}>
            <Image
              style={styles.image}
              source={require('@assets/icons/materiais_coleta.png')}
            />
            <Text
              style={type === 1 ? styles.cardTitleSelected : styles.cardTitle}
            >
              Materiais para coleta
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleSelectType(2)}>
          <View style={type === 2 ? styles.cardSelected : styles.card}>
            <Image
              style={styles.image}
              source={require('@assets/icons/frascos_leite.png')}
            />
            <Text
              style={type === 2 ? styles.cardTitleSelected : styles.cardTitle}
            >
              Retirada de leite coletado
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
