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
  cardContainerInfo: {
    ...cardContainer,
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 6,
    backgroundColor: '#F7D8CA',
  },
  cardContainerMythsTruths: {
    ...cardContainer,
    flexDirection: 'row-reverse',
    marginTop: 6,
    marginBottom: 12,
    backgroundColor: '#AFDCD6',
  },
  title: {
    ...defaultStyles.text,
    flex: 1,
    fontSize: 32,
    color: colors.lightColor,
    marginLeft: 12,
  },
  image: {
    width: 120,
    height: 120,
  },
});
