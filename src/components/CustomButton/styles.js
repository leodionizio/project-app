import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const borderRadiusDefault = 6;
const button = {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadiusDefault
}

export const styles = StyleSheet.create({
    formElement: {
        width: '100%',
        maxWidth: 280,
        marginVertical: 10,
    },
    primary: {
        ...button,
        backgroundColor: colors.primary
    },
    outline: {
        ...button,
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: 'transparent',
    },
    textLight: {
        fontSize: 16,
        color: colors.lightColor
    },
    textPrimary: {
        fontSize: 16,
        color: colors.primary
    }
});

