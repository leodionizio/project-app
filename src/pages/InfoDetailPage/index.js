import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

/* Mock for information details */
import infoDetails from '@mock/infoDetails.mock';

export default class InfoDetailPage extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;

    this.state = {
      info: infoDetails.find((info) => info.id === params.infoId),
    };
  }

  render() {
    const { info } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{info.title}</Text>
        <Text style={styles.text}>{info.text}</Text>
      </View>
    );
  }
}
