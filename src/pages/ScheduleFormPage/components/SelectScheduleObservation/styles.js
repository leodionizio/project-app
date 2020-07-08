import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

const cardContainer = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
  marginHorizontal: 12,
  marginVertical: 6,
  borderRadius: 6,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: colors.backgroundColor,
  },
  title: {
    ...defaultStyles.text,
    width: '100%',
    fontSize: 18,
    color: colors.defaultColor,
    padding: 24,
  },
  donationContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 24,
  },
  textArea: {
    ...defaultStyles.text,
    fontFamily: 'ruluko',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    width: '100%',
    maxWidth: 290,
    color: colors.darkColor,
    borderRadius: 6,
    padding: 12,
  },
});
