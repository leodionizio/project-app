import { StyleSheet } from 'react-native';
import { colors } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 140,
    height: 130,
    marginRight: 10,
  },
  logoTitle: {
    fontFamily: 'alex-brush',
    fontSize: 48,
    width: 140,
    textAlign: 'center',
    color: colors.lightColor,
  },
});
