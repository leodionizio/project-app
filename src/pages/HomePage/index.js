import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { FormInput, CustomButton, CustomTextLink, Navbar } from '@components/index';

import { styles } from './styles';

export default class HomePage extends Component {

  render() {
    const userName = 'Fernanda H. Santos Pereira';
    const userEmail = 'fesantoshsp@gmail.com';
    const donatedAmount = '= 1600ml doados';

    return (
      <View style={styles.container}>
        <Navbar title="Início" />

        <View style={styles.content}>

          <View style={styles.personInfoContent}>
            <Image style={styles.momBabyImage} source={require('@assets/icons/mom_baby.png')} />
            <Text style={styles.textName}>{userName}</Text>
            <Text style={styles.textEmail}>{userEmail}</Text>
          </View>

          <View style={styles.donationContent}>
            <Image style={styles.milkBottleImage} source={require('@assets/icons/milk_bottle.png')} />
            <Text style={styles.textDonated}>{donatedAmount}</Text>
          </View>

          <View style={styles.shareButtonContent}>
            <Image style={styles.shareImage} source={require('@assets/icons/share_icon.png')} />
          </View>

          <View style={styles.customButtonContent}>
            <CustomButton text="Doar agora" type="outline" onPress={() => console.log('doar')} />
          </View>

        </View>
      </View>
    );
  }
}
