import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class SignupPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo à página de cadastro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wetitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
