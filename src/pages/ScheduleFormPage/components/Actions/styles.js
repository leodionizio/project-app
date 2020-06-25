import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 80,
    paddingHorizontal: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  linkText: {
    ...defaultStyles.text,
    fontSize: 16,
    color: colors.primary,
  }
});
