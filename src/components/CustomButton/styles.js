import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  formElement: {
    ...defaultStyles.formElement,
  },
  primary: {
    ...defaultStyles.button,
    backgroundColor: colors.primary,
  },
  outline: {
    ...defaultStyles.button,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
  textLight: {
    ...defaultStyles.text,
    fontSize: 16,
    color: colors.lightColor,
  },
  textPrimary: {
    ...defaultStyles.text,
    fontSize: 16,
    color: colors.primary,
  },
});
