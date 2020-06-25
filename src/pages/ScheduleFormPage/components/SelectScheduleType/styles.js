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
  card: {
    ...cardContainer,
    backgroundColor: '#e6e6e6',
  },
  cardSelected: {
    ...cardContainer,
    backgroundColor: colors.primaryHighlight,
  },
  title: {
    ...defaultStyles.text,
    width: '100%',
    fontSize: 18,
    color: colors.defaultColor,
    padding: 24,
  },
  cardTitle: {
    ...defaultStyles.text,
    fontSize: 20,
    color: colors.defaultColor,
    marginLeft: 12,
  },
  cardTitleSelected: {
    ...defaultStyles.text,
    fontSize: 20,
    color: colors.lightColor,
    marginLeft: 12,
  },
  image: {
    width: 100,
    height: 80,
  },
});
