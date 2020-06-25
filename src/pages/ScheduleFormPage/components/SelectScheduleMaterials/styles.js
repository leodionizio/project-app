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
  materialsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    marginVertical: 12,
    maxHeight: 60,
  },
  materialDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  materialName: {
    ...defaultStyles.text,
    fontSize: 16,
    color: colors.defaultColor,
  },
  materialIcon: {
    width: 38,
    height: 38,
    marginRight: 12,
  },
  changeAmountContainer: {
    flex: 1,
    height: '100%',
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
