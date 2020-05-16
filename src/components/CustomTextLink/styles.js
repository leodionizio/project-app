import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

export const styles = StyleSheet.create({
    formElement: {
        ...defaultStyles.formElement
    },
    text: {
        ...defaultStyles.text,
        color: colors.darkColor
    },
    textsecondary: {
        ...defaultStyles.text,
        color: colors.secondary
    },
    primary: {
        ...defaultStyles.text,
        color: colors.primary
    },
});

