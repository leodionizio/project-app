import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const linkText = {
    fontSize: 14,
    padding: 4,
    textAlign: 'center'
};

export const styles = StyleSheet.create({
    formElement: {
        width: '100%',
        maxWidth: 280,
        marginBottom: 10,
    },
    primary: {
        ...linkText,
        color: colors.primary
    },
});

