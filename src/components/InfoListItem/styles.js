import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    marginHorizontal: 24,
    paddingHorizontal: 8,
    paddingVertical: 24,
  },
  icon: {
    width: 44,
    height: 44,
    marginRight: 32,
  },
  title: {
    ...defaultStyles.text,
    flex: 1,
    fontSize: 16,
    color: colors.primary,
  },
});
