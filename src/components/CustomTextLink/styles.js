import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const linkText = {
    fontSize: 14,
    // paddingVertical: 4,
};

export const styles = StyleSheet.create({
    formElement: {
        width: '100%',
        maxWidth: 280,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        ...linkText,
        color: colors.darkColor
    },
    textsecondary: {
        ...linkText,
        color: colors.secondary
    },
    primary: {
        ...linkText,
        color: colors.primary
    },
});

