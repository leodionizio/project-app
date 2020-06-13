import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#cecece',
    padding: 24,
  },
  title: {
    ...defaultStyles.text,
    fontSize: 16,
    color: colors.secondary,
  },
  link: {
    ...defaultStyles.text,
    fontSize: 16,
    color: colors.primary,
  },
});
