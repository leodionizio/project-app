import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { colors } from '../../constants';
import { styles } from './styles';

export default class CustomButton extends Component {
  render() {
    const { isLoading, text, color, type, ...others } = this.props;

    return (
      <View style={styles.formElement}>
        <TouchableHighlight disabled={isLoading} style={type === 'outline' ? styles.outline : styles[color] || styles.primary}
          underlayColor={colors.primaryHighlight} {...others}>
          {
            isLoading
              ? <Image style={{ width: 28, height: 28 }} source={require('@assets/icons/loader.gif')} />
              : <Text style={type === 'outline' ? styles.textPrimary : styles.textLight}> {text} </Text>
          }
        </TouchableHighlight>
      </View>
    );
  }
}
