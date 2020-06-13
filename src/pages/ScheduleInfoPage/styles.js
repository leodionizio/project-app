import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

const defaultTitle = {
  ...defaultStyles.text,
  textAlign: 'justify',
  width: '100%',
  fontSize: 16,
  color: colors.defaultColor,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  textContainer: {
    padding: 24,
  },
  title: {
    ...defaultTitle,
    fontWeight: 'bold',
  },
  text: {
    ...defaultTitle,
  },
  imagePhoto: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  contactRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  contactText: {
    ...defaultTitle,
    flex: 1,
    flexWrap: 'wrap',
    color: colors.primary,
  },
  subText: {
    ...defaultTitle,
    fontSize: 12,
  },
});
