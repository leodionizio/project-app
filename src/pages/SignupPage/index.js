import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  View,
} from 'react-native';

import {
  FormInput,
  CustomButton,
  CustomTextLink,
  CustomLottieView,
  Navbar,
} from '@components/index';
import validators from '@utils/validate';

import { styles } from './styles';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRegistry = this.handleRegistry.bind(this);

    this.state = {
      formControls: {
        name: '',
        email: '',
        document: '',
        password: '',
      },
      errors: {
        invalidCredentials: false,
      },
      isFocused: {
        name: false,
        email: false,
        document: false,
        password: false,
      },
      isLoading: false,
      showAnimation: false,
    };
  }

  // loader controller
  showLoader = () => this.setState({ isLoading: true });
  hideLoader = () => this.setState({ isLoading: false });
  showAnimationView = () => {
    this.setState({ showAnimation: true });
    setTimeout(() => {
      this.setState({ showAnimation: false });
      this.props.navigation.navigate('Login');
    }, 3000);
  };

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
        toast.error(messages.error['generic'], toastOptions);
        break;
    }
  }

  hasErrors = (errors) => Object.values(errors).some((error) => error);

  async handleRegistry() {
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
      console.log('form: ', formControls);
      // await api.post('/auth/login', formControls);
      this.showAnimationView();
      this.hideLoader();
      // setTimeout(() => {
      //   /* Ajustar para mobile */
      //   this.props.navigation.navigate('Login');
      // }, 3000);

    } catch (error) {
      this.handleError(error);
    }
  }

  render() {
    const {
      formControls,
      errors,
      isFocused,
      isLoading,
      showAnimation,
    } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="height" style={styles.content}>
          <View style={styles.contentForm}>
            <Text style={styles.title}>
              Para se cadastrar, por favor preencha as informações abaixo:
            </Text>

            <FormInput
              name="name"
              label="Nome"
              placeholder="Insira seu nome"
              errors={errors}
              value={formControls.name}
              disabled={isLoading}
              isFocused={isFocused}
              onFocus={() => this.handleFocus('name')}
              onBlur={() => this.handleFocus('name')}
              onChangeText={(text) =>
                this.handleInput({ name: 'name', value: text })
              }
            />

            <FormInput
              name="email"
              label="E-mail"
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
              name="document"
              label="CPF"
              placeholder="Insira seu cpf"
              errors={errors}
              value={formControls.document}
              disabled={isLoading}
              isFocused={isFocused}
              onFocus={() => this.handleFocus('document')}
              onBlur={() => this.handleFocus('document')}
              onChangeText={(text) =>
                this.handleInput({ name: 'document', value: text })
              }
            />

            <FormInput
              name="password"
              label="Senha"
              placeholder="Insira sua nova senha"
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
          </View>

          <View style={styles.contentActions}>
            <CustomButton
              isLoading={isLoading}
              text="Cadastrar"
              onPress={this.handleRegistry}
            />

            <CustomTextLink
              isLoading={isLoading}
              text="Já possui uma conta? "
              color="secondary"
              textLink="Entre aqui."
              onPress={() => navigate('Login')}
            />
          </View>
        </KeyboardAvoidingView>

        {showAnimation ? (
          <CustomLottieView
            source={require('@assets/animations/done.json')}
            type="full"
          />
        ) : null}
      </SafeAreaView>
    );
  }
}
