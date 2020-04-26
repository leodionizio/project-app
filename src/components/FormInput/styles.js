import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const borderRadiusDefault = 6;

const styleInput = {
    borderWidth: 1,
    borderRadius: borderRadiusDefault,
    width: '100%',
    height: 42,
    color: colors.darkColor,
    fontSize: 16,
    padding: 12
}

export const styles = StyleSheet.create({
    formElement: {
        width: '100%',
        maxWidth: 280,
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        color: colors.secondary,
        marginVertical: 2
    },
    input: {
        ...styleInput,
        borderColor: colors.secondary,
    },
    inputLogin: {
        ...styleInput,
        borderColor: colors.lightColor,
        backgroundColor: `rgba(${colors.lightColorRGB}, 0.3)`,
    },
    inputFocused: {
        ...styleInput,
        backgroundColor: `rgba(${colors.lightColorRGB}, 0.3)`,
        borderColor: colors.primary,
        borderWidth: 2
    },
    inputInvalid: {
        ...styleInput,
        backgroundColor: `rgba(${colors.lightColorRGB}, 0.3)`,
        borderColor: colors.danger,
    },
    errorText: {
        fontSize: 12,
        padding: 4,
        color: colors.danger,
    }
});