import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
        paddingHorizontal: 36,
        position: 'absolute',
        flex: 0.1,
        flexDirection :'row',
        alignItems: 'center',
        shadowColor: '#b4b4b4',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
        color: colors.lightColor,
    },
    image: {
        height: 24,
        width: 24,
        marginLeft: -18,
        marginRight: 24,
        display: 'flex'
    }
});

