import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from './styles';

export default class CustomLink extends Component {
  render() {
    const { isLoading, text, color, ...others } = this.props;

    return (
      <View style={styles.formElement}>
        <TouchableWithoutFeedback disabled={isLoading} {...others}>
          <Text style={styles[color] || styles.primary}> {text} </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
