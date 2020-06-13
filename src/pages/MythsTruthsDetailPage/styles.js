import { StyleSheet } from 'react-native';
import { colors } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    marginBottom: 14
  },
  content: {
    flex: 1,
    // flexGrow: 1,
    // overflow: 'scroll'
  }
});
