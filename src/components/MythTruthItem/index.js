import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export default class MythTruthItem extends Component {
  icon(category) {
    return category === 'M'
      ? require('@assets/icons/myth.png')
      : require('@assets/icons/truth.png');
  }

  render() {
    const { question, answer, category } = this.props;

    return (
      <View
        style={category === 'M' ? styles.containerReverse : styles.container}
      >
        <Image
          style={category === 'M' ? styles.iconMyth : styles.iconTruth}
          source={this.icon(category)}
        />

        <View style={styles.content}>
          <Text style={styles.question}>{question}</Text>
          <Text style={styles.answer}>R: {answer}</Text>
        </View>
      </View>
    );
  }
}
