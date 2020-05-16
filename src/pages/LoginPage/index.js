import React, { Component } from 'react';
import {
  Text,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import {
  CustomButton,
  CustomLink,
  CustomTextLink,
  FormInput,
  Logo,
} from '@components';

import validators from '@utils/validate';
import { styles } from './styles';

const bgImage = require('@assets/images/bg-image.jpg');

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      formControls: {
        email: '',
        password: '',
      },
      errors: {
        invalidCredentials: false,
      },
      isFocused: {
        email: false,
        password: false,
      },
      isLoading: false,
    };
  }

  // loader controller
  showLoader = () => this.setState({ isLoading: true });
  hideLoader = () => this.setState({ isLoading: false });

  handleFocus(name) {
    const { isFocused } = this.state;
    isFocused[name] = !isFocused[name];

    this.setState({ isFocused });
  }

  handleInput(input) {
    const { name, value } = input;
    const { formControls, errors } = this.state;

    formControls[name] = value;
    errors.invalidCredentials = false;
    errors[name] && delete errors[name];

    this.setState({
      formControls,
      errors,
    });
  }

  handleError(status) {
    const { errors } = this.state;

    switch (status) {
      case 401:
        errors.invalidCredentials = true;
        this.setState({ errors });
        break;

      default:
        // this.toast.error(messages.error['generic'], toastOptions);
        console.log('Adicionar toast', errors);
        break;
    }
  }

  hasErrors = (errors) => Object.values(errors).some((error) => error);

  // async
  handleLogin() {
    Keyboard.dismiss();
    const { formControls, errors } = this.state;
    const formErrors = validators.formValidate(formControls, errors);

    if (this.hasErrors(formErrors)) {
      this.hideLoader();
      this.setState({ errors: formErrors });
      return;
    }

    this.showLoader();

    try {
      console.log('Form: ', formControls);
      this.hideLoader();
      this.props.navigation.navigate('Tabs');
      // await api.post('/auth/login', formControls);
    } catch (error) {
      console.log('error', error);
      this.hideLoader();
      this.handleError(error);
    }
  }

  render() {
    const { formControls, errors, isFocused, isLoading } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <KeyboardAvoidingView behavior="padding" style={styles.bgBackdrop}>
            <Logo />

            <Text style={styles.title}> Taquaritinga</Text>

            <FormInput
              name="email"
              placeholder="Insira seu e-mail"
              errors={errors}
              value={formControls.email}
              disabled={isLoading}
              isFocused={isFocused}
              onFocus={() => this.handleFocus('email')}
              onBlur={() => this.handleFocus('email')}
              onChangeText={(text) =>
                this.handleInput({ name: 'email', value: text })
              }
            />

            <FormInput
              name="password"
              placeholder="*******"
              secureTextEntry
              errors={errors}
              value={formControls.password}
              disabled={isLoading}
              isFocused={isFocused}
              onFocus={() => this.handleFocus('password')}
              onBlur={() => this.handleFocus('password')}
              onChangeText={(text) =>
                this.handleInput({ name: 'password', value: text })
              }
            />

            <CustomButton
              isLoading={isLoading}
              text="Entrar"
              onPress={() => this.handleLogin()}
            />

            {/* <CustomLink isLoading={isLoading} text="Esqueceu a senha?" onPress={() => navigate('Tabs')} /> */}

            <CustomTextLink
              isLoading={isLoading}
              text="É nova por aqui? "
              textLink="Crie uma conta."
              onPress={() => navigate('Signup')}
            />
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
