import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';

import { styles } from './styles';

export default class SelectScheduleDonation extends Component {
  constructor(props) {
    super(props);

    this.handleIcons = this.handleIcons.bind(this);
  }

  handleIcons(amountMilk) {
    const icons = [];
    for (let i = 0; i < amountMilk; i++) {
      icons.push(
        <Image
          key={i}
          style={styles.materialIcon}
          source={require('@assets/icons/frasco.png')}
        />
      );
    }

    return icons.map((icon) => icon);
  }

  render() {
    const { collect, handleChangeDonation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Informe os detalhes sobre o leite a ser coletado:
        </Text>

        <View style={styles.donationContainer}>
          <Text style={styles.donationTitle}>
            Quantidade de frascos para doação (200ml)
          </Text>

          <View style={styles.iconsContainer}>
            {this.handleIcons(collect.amountMilk)}
          </View>

          <View style={styles.changeAmountContainer}>
            <TouchableWithoutFeedback
              onPress={() =>
                handleChangeDonation({
                  newAmountMilk:
                    collect.amountMilk > 1 ? collect.amountMilk - 1 : 1,
                })
              }
            >
              <Image
                style={styles.amountIcon}
                source={require('@assets/icons/menos.png')}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.amountText}>{collect.amountMilk}</Text>
            <TouchableWithoutFeedback
              onPress={() =>
                handleChangeDonation({
                  newAmountMilk:
                    collect.amountMilk < 6 ? collect.amountMilk + 1 : 6,
                })
              }
            >
              <Image
                style={styles.amountIcon}
                source={require('@assets/icons/adicionar.png')}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.donationContainer}>
          <Text style={styles.donationTitle}>
            Há quantos dias o leite começou a ser coletado?
          </Text>

          <View style={styles.changeAmountContainer}>
            <TouchableWithoutFeedback
              onPress={() =>
                handleChangeDonation({
                  newDaysStartedToBeCollect:
                    collect.daysStartedToBeCollect > 1
                      ? collect.daysStartedToBeCollect - 1
                      : 1,
                })
              }
            >
              <Image
                style={styles.amountIcon}
                source={require('@assets/icons/menos.png')}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.amountText}>
              {collect.daysStartedToBeCollect} dias
            </Text>
            <TouchableWithoutFeedback
              onPress={() =>
                handleChangeDonation({
                  newDaysStartedToBeCollect:
                    collect.daysStartedToBeCollect < 15
                      ? collect.daysStartedToBeCollect + 1
                      : 15,
                })
              }
            >
              <Image
                style={styles.amountIcon}
                source={require('@assets/icons/adicionar.png')}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}
