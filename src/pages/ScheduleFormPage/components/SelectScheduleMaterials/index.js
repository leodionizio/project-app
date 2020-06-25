import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';

import { styles } from './styles';

export default class SelectScheduleMaterials extends Component {
  render() {
    const { materials, handleChangeAmount, formControls } = this.props;
    console.log('formCOntrols', formControls);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Informe quais materiais deseja solicitar:
        </Text>
        {materials && materials.length
          ? materials.map((material) => {
              return (
                <View style={styles.materialsContainer} key={material.id}>
                  <View style={styles.materialDetailContainer}>
                    <Image style={styles.materialIcon} source={material.icon} />
                    <Text style={styles.materialName}>{material.name}</Text>
                  </View>

                  <View style={styles.changeAmountContainer}>
                    <TouchableWithoutFeedback
                      onPress={() =>
                        handleChangeAmount({
                          material,
                          newAmount:
                            material.amount > 0 ? material.amount - 1 : 0,
                        })
                      }
                    >
                      <Image
                        style={styles.amountIcon}
                        source={require('@assets/icons/menos.png')}
                      />
                    </TouchableWithoutFeedback>
                    <Text style={styles.amountText}>{material.amount}</Text>
                    <TouchableWithoutFeedback
                      onPress={() =>
                        handleChangeAmount({
                          material,
                          newAmount:
                            material.amount < 3 ? material.amount + 1 : 3,
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
              );
            })
          : null}
      </View>
    );
  }
}
