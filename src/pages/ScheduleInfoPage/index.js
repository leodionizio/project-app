import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default class ScheduleInfoPage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Olá mãe!</Text>
          <Text style={styles.text}>
            Caso tenha interesse em ser uma doadora de leite materno,
            primeiramente é necessário ir até a Santa Casa de Taquaritinga para
            receber o kit de doação de leite materno e as primeiras instruções
            sobre como realizar a ordenha, massagem, higienização e ambiente
            para realizar a coleta em casa.
          </Text>
        </View>

        <Image
          style={styles.imagePhoto}
          source={require('@assets/images/santa_casa_taquaritinga.png')}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            É necessário estar portando seus documentos pessoais.
          </Text>

          <View style={styles.contactRow}>
            <Image
              style={styles.icon}
              source={require('@assets/icons/clock.png')}
            />
            <Text style={styles.contactText}>
              Segunda à sexta-feira até as 11:30 (sem agendamento)
            </Text>
          </View>
          <Text style={styles.subText}>
            *Entrar pela recepção da maternidade até o horário acima, ou pela
            entrada do Pronto Atendimento.
          </Text>

          <View style={styles.contactRow}>
            <Image
              style={styles.icon}
              source={require('@assets/icons/phone.png')}
            />
            <Text style={styles.contactText}>(16) 3253 - 9230</Text>
          </View>

          <View style={styles.contactRow}>
            <Image
              style={styles.icon}
              source={require('@assets/icons/address.png')}
            />
            <Text style={styles.contactText}>
              Praça Doutor José Furiatti, 153 - Centro, Taquaritinga - SP,
              15900-037{' '}
            </Text>
          </View>
        </View>

        <Image
          style={styles.imagePhoto}
          source={require('@assets/images/mapa_santa_casa.png')}
        />
      </ScrollView>
    );
  }
}
