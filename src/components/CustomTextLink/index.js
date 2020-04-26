import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from './styles';

export default class CustomTextLink extends Component {
  render() {
    const { isLoading, text, textLink, color, colorLink, ...others } = this.props;
    const textColor = color ? `text${color}` : 'text';

    return (
      <View style={styles.formElement}>
        <Text style={styles[textColor]}>{text}</Text>
        <TouchableWithoutFeedback disabled={isLoading} {...others}>
          <Text style={styles[colorLink] || styles.primary}> {textLink} </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
