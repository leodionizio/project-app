import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { styles } from './styles';
import stepsForm from '@utils/enums/steps-form.enum';

export default class Actions extends Component {
  render() {
    const { step, handleChangeStep, type } = this.props;

    const backStep = () => {
      const newStep =
        type === 2 && step - 1 === stepsForm.MATERIALS
          ? step - 2
          : type === 1 && step - 1 === stepsForm.COLLECT
          ? step - 2
          : step - 1;
      handleChangeStep(newStep);
    };

    const advanceStep = () => {
      const newStep =
        type === 2 && step + 1 === stepsForm.MATERIALS
          ? step + 2
          : type === 1 && step + 1 === stepsForm.COLLECT
          ? step + 2
          : step + 1;
      handleChangeStep(newStep);
    };

    return (
      <View style={styles.container}>
        {step !== stepsForm.TYPE ? (
          <View>
            <TouchableWithoutFeedback onPress={backStep}>
              <View>
                <Text style={styles.linkText}>Voltar</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ) : (
          <View />
        )}
        <View>
          <TouchableWithoutFeedback
            onPress={advanceStep}
            disabled={type === null}
          >
            <View>
              <Text style={styles.linkText}>
                {step !== stepsForm.OBSERVATION ? 'Avançar' : 'Confirmar'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
