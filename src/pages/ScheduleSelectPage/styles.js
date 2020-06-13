import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

const cardContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 24,
  marginHorizontal: 12,
  borderRadius: 6,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: colors.backgroundColor,
  },
  cardAlreadyDonor: {
    ...cardContainer,
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 6,
    backgroundColor: '#AFDCD6',
  },
  cardFisrtTime: {
    ...cardContainer,
    flexDirection: 'row-reverse',
    marginTop: 6,
    marginBottom: 12,
    backgroundColor: '#F7D8CA',
  },
  title: {
    ...defaultStyles.text,
    textAlign: 'justify',
    width: '100%',
    fontSize: 16,
    color: colors.secondary,
    paddingHorizontal: 24,
    paddingVertical: 12,
},
  cardTitle: {
    ...defaultStyles.text,
    flex: 1,
    fontSize: 34,
    color: colors.lightColor,
    marginLeft: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
});
