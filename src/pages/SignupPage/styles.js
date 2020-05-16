import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.backgroundColor,
  },
  content: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  },
  contentForm: {
    ...defaultStyles.formElement,
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentActions: {
    ...defaultStyles.formElement,
    flexDirection: 'column',
  },
  title: {
    ...defaultStyles.text,
    textAlign: 'left',
    marginVertical: 36,
    maxWidth: 290,
    color: colors.secondary,
  },
});
