import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '@constants';

export default class FormInput extends Component {
  render() {
    const { name, errors, isFocused, label, ...others } = this.props;
    return (
      <View style={styles.formElement}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          id={name}
          name={name}
          placeholderTextColor={
            label ? colors.placeholderColor : colors.placeholderColorLogin
          }
          {...others}
          style={
            errors[name]
              ? styles.inputInvalid
              : isFocused[name]
              ? styles.inputFocused
              : label
              ? styles.input
              : styles.inputLogin
          }
        />
        {errors[name] && <Text style={styles.errorText}>{errors[name]}</Text>}
      </View>
    );
  }
}
