import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';

import { styles } from './styles';

export default class ScheduleSelectPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Para realizar um agendamento de coleta de leite materno, é necessário
          já ter efetuado a primeira doação junto a equipe da Santa Casa de
          Taquaritinga.
        </Text>
        <TouchableWithoutFeedback onPress={() => navigate('ScheduleForm')}>
          <View style={styles.cardAlreadyDonor}>
            <Image
              style={styles.image}
              source={require('@assets/icons/heart_calendar.png')}
            />
            <Text style={styles.cardTitle}>Já sou doadora</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('ScheduleInfo')}>
          <View style={styles.cardFisrtTime}>
            <Image
              style={styles.image}
              source={require('@assets/icons/donor_heart.png')}
            />
            <Text style={styles.cardTitle}>Primeira vez</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
