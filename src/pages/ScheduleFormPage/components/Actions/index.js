import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { CustomLink } from '@components';
import { styles } from './styles';

export default class Actions extends Component {
  render() {
    const { step, handleChangeStep } = this.props;

    return (
      <View style={styles.container}>
        {step > 1 ? (
          <View>
            <TouchableWithoutFeedback
              onPress={() => handleChangeStep(step - 1)}
            >
              <Text style={styles.linkText}>Voltar</Text>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <View />
        )}
        <View>
          <TouchableWithoutFeedback
            onPress={() => handleChangeStep(step + 1)}
          >
            <Text style={styles.linkText}>{step < 3 ? 'Avançar' : 'Confirmar'}</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
