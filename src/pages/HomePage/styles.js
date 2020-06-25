import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    overflow: 'hidden',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  logoutImage: {
    width: 22,
    height: 22,
  },
  content: {
    height: '100%',
    marginTop: 10,
    paddingBottom: 70,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  personInfoContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  donationContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  shareButtonContent: {
    marginBottom: 100,
  },
  customButtonContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  momBabyImage: {
    width: 120,
    height: 120,
  },
  milkBottleImage: {
    width: 90,
    height: 90,
  },
  textName: {
    fontSize: 20,
    color: colors.secondary,
  },
  textEmail: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 6,
  },
  textDonated: {
    fontSize: 24,
    color: colors.secondary,
  },
  shareImage: {
    width: 36,
    height: 36,
  },
});
