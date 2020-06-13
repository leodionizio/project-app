import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class InfoListItem extends Component {
  render() {
    const { id, icon, title, navigate } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigate('InfoDetail', {
            title: title,
            infoId: id,
          })
        }
      >
        <View style={styles.container}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
