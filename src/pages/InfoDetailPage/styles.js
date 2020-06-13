import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    ...defaultStyles.text,
    textAlign: 'justify',
    width: '100%',
    fontSize: 16,
    color: colors.secondary,
  },
  text: {
    ...defaultStyles.text,
    textAlign: 'justify',
    color: colors.defaultColor,
  },
});
