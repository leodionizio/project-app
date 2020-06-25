import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  bgImage: {
    flex: 1,
  },
  bgBackdrop: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgba(${colors.backgroundRGB}, 0.8)`,
  },
  title: {
    ...defaultStyles.text,
    color: colors.lightColor,
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 20,
  },
  errorText: {
    ...defaultStyles.text,
    fontSize: 12,
    padding: 4,
    color: colors.danger,
  },
  invalidCredentials: {
    ...defaultStyles.text,
    fontSize: 16,
    marginBottom: 18,
    color: colors.danger,
  }
});
