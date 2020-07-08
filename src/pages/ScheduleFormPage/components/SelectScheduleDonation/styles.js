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
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 160,
    paddingHorizontal: 24,
    marginVertical: 24,
  },
  donationTitle: {
    ...defaultStyles.text,
    fontSize: 16,
    textAlign: 'center',
    color: colors.defaultColor,
    marginBottom: 12
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  materialIcon: {
    width: 56,
    height: 56,
    marginTop: 12
  },
  changeAmountContainer: {
    flex: 1,
    // height: '100%',
    maxWidth: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  amountIcon: {
    width: 16,
    height: 16,
  },
  amountText: {
    ...defaultStyles.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 22,
    color: colors.defaultColor,
  },
});
