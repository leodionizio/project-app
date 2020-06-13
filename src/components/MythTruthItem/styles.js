import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

const icon = {
  width: 48,
  height: 48,
};

const containerDefault = {
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#E1E1E1',
  marginHorizontal: 24,
  paddingHorizontal: 8,
  paddingVertical: 24,
};

export const styles = StyleSheet.create({
  container: {
    ...containerDefault,
    flexDirection: 'row',
  },
  containerReverse: {
    ...containerDefault,
    flexDirection: 'row-reverse',
  },
  iconMyth: {
    ...icon,
    marginLeft: 18,
  },
  iconTruth: {
    ...icon,
    marginRight: 18,
  },
  content: {
    flex: 1,
  },
  question: {
    ...defaultStyles.text,
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 6,
    color: colors.secondary,
  },
  answer: {
    ...defaultStyles.text,
    textAlign: 'justify',
    color: colors.default,
  },
});
