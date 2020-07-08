import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { InfoReferences, MythTruthItem } from '@components';
import { styles } from './styles';

/* Mock for information details */
import mythsTruthsList from '@mock/mythsTruths.mock';

export default class MythsTruthsDetailPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InfoReferences />

        <FlatList
          style={styles.content}
          data={mythsTruthsList}
          renderItem={({ item }) => (
            <MythTruthItem
              style={styles.title}
              question={item.question}
              answer={item.answer}
              category={item.category}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}
