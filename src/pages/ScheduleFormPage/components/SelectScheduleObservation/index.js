import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export default class SelectScheduleObservation extends Component {
  render() {
    const { observation, handleSetObservation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deseja adicionar alguma observação?</Text>

        <View style={styles.donationContainer}>
          <TextInput
            style={styles.textArea}
            onChangeText={(text) => handleSetObservation(text)}
            placeholder="Insira sua observação aqui. Ex: Melhor período para coleta, informações sobre o leite doado, etc."
            multiline
            textAlignVertical="top"
            numberOfLines={10}
            value={observation}
          />
        </View>
      </View>
    );
  }
}
