import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;


export const styles = StyleSheet.create({
    lottieImage: {
        width: 300,
        height: 300,
    },
    lottieImageFull: {
        width: maxWidth,
        height: maxHeight,
        backgroundColor: `rgba(${colors.lightColorRGB}, 0.6)`,
    }
});

