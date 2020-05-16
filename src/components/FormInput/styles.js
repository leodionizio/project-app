import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  formElement: {
    ...defaultStyles.formElement,
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    ...defaultStyles.text,
    width: '100%',
    maxWidth: 280,
    color: colors.secondary,
    marginVertical: 2,
  },
  input: {
    ...defaultStyles.input,
    borderColor: colors.secondary,
  },
  inputLogin: {
    ...defaultStyles.input,
    borderColor: colors.lightColor,
    backgroundColor: `rgba(${colors.lightColorRGB}, 0.3)`,
  },
  inputFocused: {
    ...defaultStyles.input,
    backgroundColor: `rgba(${colors.lightColorRGB}, 0.3)`,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputInvalid: {
    ...defaultStyles.input,
    backgroundColor: `rgba(${colors.lightColorRGB}, 0.3)`,
    borderColor: colors.danger,
  },
  errorText: {
    ...defaultStyles.text,
    width: '100%',
    maxWidth: 280,
    fontSize: 12,
    padding: 4,
    color: colors.danger,
    marginBottom: -20,
  },
});
