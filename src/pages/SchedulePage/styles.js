import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const borderRadiusDefault = 6;

const styleInput = {
    borderWidth: 1,
    borderColor: colors.lightColor,
    borderRadius: borderRadiusDefault,
    width: '100%',
    height: 42,
    color: colors.darkColor,
    backgroundColor: `rgba(${colors.lightColorRGB}, 0.3)`,
    fontSize: 16,
    padding: 12
}

export const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgba(${colors.backgroundRGB}, 0.8)`,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    inlineElement: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorText: {
        fontSize: 12,
        padding: 4,
        color: colors.danger,
    },
    text: {
        fontSize: 14,
        color: colors.lightColor,
    }
});

