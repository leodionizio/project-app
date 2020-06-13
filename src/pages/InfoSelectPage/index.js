import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { styles } from './styles';

export default class InfoSelectPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigate('InfoList')}>
          <View style={styles.cardContainerInfo}>
            <Image
              style={styles.image}
              source={require('@assets/icons/nurse.png')}
            />
            <Text style={styles.title}>Informações</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('MythsTruthsDetail')}>
          <View style={styles.cardContainerMythsTruths}>
            <Image
              style={styles.image}
              source={require('@assets/icons/mom.png')}
            />
            <Text style={styles.title}>Mitos e Verdades</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
