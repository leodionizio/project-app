import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const maxHeight = window.innerHeight;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: maxHeight,
        maxHeight: maxHeight,
        backgroundColor: colors.backgroundColor,
        overflow: 'hidden'
    },
    content: {
        paddingTop: 70,
        paddingBottom: 50,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: maxHeight,
        maxHeight: maxHeight,
        overflow: 'scroll',
    },
    title: {
        fontSize: 14,
        textAlign: 'left',
        marginHorizontal: 36,
        marginVertical: 24,
        color: colors.secondary
    }
});

