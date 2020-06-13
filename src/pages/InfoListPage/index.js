import React, { Component } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { InfoListItem, InfoReferences } from '@components';
import { styles } from './styles';

/* Mock for options */
import infoList from '@mock/infoList.mock';

export default class InfoListPage extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <InfoReferences />
        <FlatList
          data={infoList}
          renderItem={({ item }) => (
            <InfoListItem
              id={item.id}
              icon={item.icon}
              title={item.title}
              navigate={navigate}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}
