import { StyleSheet } from 'react-native';
import { colors, defaultStyles } from '@constants';

const linkText = {
    fontSize: 14,
    padding: 4,
    textAlign: 'center'
};

export const styles = StyleSheet.create({
    formElement: {
        ...defaultStyles.formElement
    },
    primary: {
        ...linkText,
        color: colors.primary
    },
});

