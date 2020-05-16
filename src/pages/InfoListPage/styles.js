import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: maxHeight,
        // maxHeight: maxHeight,
        backgroundColor: colors.backgroundColor,
        overflow: 'hidden'
    },
    text: {
        fontSize: 14,
        color: colors.lightColor,
    }
});

