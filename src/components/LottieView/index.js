import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

import { styles } from './styles';

export default class CustomLottieView extends Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    render() {
        const { loop, type, ...others } = this.props;
        return (
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                style={type === 'full' ? styles.lottieImageFull : styles.lottieImage}
                {...others}
                loop={!!loop}
            />
        );
    }
}
