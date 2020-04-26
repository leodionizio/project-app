import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        overflow: 'hidden'
    },
    content: {
        height: '100%',
        marginTop: 70,
        paddingBottom: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    personInfoContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32
    },
    donationContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28
    },
    shareButtonContent: {
        marginBottom: 28
    },
    customButtonContent: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    momBabyImage: {
        width: 120,
        height: 120
    },
    milkBottleImage: {
        width: 90,
        height: 90,
    },
    textName: {
        fontSize: 20,
        color: colors.secondary,
    },
    textEmail: {
        fontSize: 16,
        color: colors.primary,
    },
    textDonated: {
        fontSize: 24,
        color: colors.secondary,
    },
    shareImage: {
        width: 36,
        height: 36
    }
});

