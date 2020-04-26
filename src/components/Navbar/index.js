import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { colors } from '../../constants';
import { styles } from './styles';

export default class Navbar extends Component {
  showBackNavigationButton(backPage) {
    return backPage
      ?
      <Image style={styles.image} source={require('@assets/icons/back.png')} />
      : null;
  };

  render() {
    const { title, backPage, ...others } = this.props;

    return (
      <View style={styles.navbar}>
        {this.showBackNavigationButton(backPage)}
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
