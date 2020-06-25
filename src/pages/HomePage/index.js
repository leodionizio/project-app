import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { CustomButton, CustomLink, CustomLottieView } from '@components/index';

import { styles } from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;

    this.state = {
      user: {
        id: params.userID,
        name: '',
        email: '',
        donatedAmount: 0,
      },
      showAnimation: false,
    };
  }

  async handleGetUser() {
    try {
      const { user } = this.state;

      const response = await fetch(`/api/user/${user.id}`).then((res) =>
        res.json()
      );

      this.setState({ user: { ...this.state.user, ...response.body } });
    } catch (error) {
      console.log(error);
    }
  }

  showAnimationView = () => {
    this.setState({ showAnimation: true });
    setTimeout(() => {
      console.log(this.state);
      this.setState({ showAnimation: false });
    }, 3000);
  };

  componentDidMount() {
    this.handleGetUser();
  }

  render() {
    const { showAnimation } = this.state;
    const { name, email, donatedAmount } = this.state.user;
    const donatedAmountML = `${donatedAmount * 200}ml doados`;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.actions}>
          <TouchableWithoutFeedback onPress={() => navigate('Login')}>
            <Image
              style={styles.logoutImage}
              source={require('@assets/icons/sair.png')}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.content}>
          <View style={styles.personInfoContent}>
            <Image
              style={styles.momBabyImage}
              source={require('@assets/icons/mom_baby.png')}
            />
            <Text style={styles.textName}>{name}</Text>
            <Text style={styles.textEmail}>{email}</Text>
          </View>

          <View style={styles.donationContent}>
            <Image
              style={styles.milkBottleImage}
              source={require('@assets/icons/milk_bottle.png')}
            />
            <Text style={styles.textDonated}>{donatedAmountML}</Text>
          </View>

          <View style={styles.shareButtonContent}>
            <TouchableWithoutFeedback onPress={() => this.showAnimationView()}>
              <Image
                style={styles.shareImage}
                source={require('@assets/icons/share_icon.png')}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.customButtonContent}>
            <CustomButton
              text="Doar agora"
              type="outline"
              onPress={() => navigate('ScheduleSelect')}
            />
          </View>
        </View>

        {showAnimation ? (
          <CustomLottieView
            source={require('@assets/animations/shared.json')}
            type="full"
          />
        ) : null}
      </View>
    );
  }
}
