import React, { Component } from 'react';
import { Text, View, Keyboard } from 'react-native';

import { FormInput, CustomButton, CustomTextLink, CustomLottieView, Navbar } from '@components/index';
import validators from '@utils/validate';

import { styles } from './styles';


export default class SignupPage extends Component {
  constructor(props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRegistry = this.handleRegistry.bind(this);

    this.state = {
      formControls: {
        name: '',
        email: '',
        user: '',
        password: ''
      },
      errors: {
        invalidCredentials: false
      },
      isFocused: {
        name: false,
        email: false,
        user: false,
        password: false
      },
      isLoading: false,
      showAnimation: false
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
    }, 2000);
  }

  handleFocus(name) {
    const { isFocused } = this.state;
    isFocused[name] = !isFocused[name];

    this.setState({ isFocused });
  };

  handleInput(input) {
    const { name, value } = input;
    const { formControls, errors } = this.state;

    formControls[name] = value;
    errors.invalidCredentials = false;
    errors[name] && delete errors[name];

    this.setState({
      formControls,
      errors
    });
  };

  handleError(status) {
    const { errors } = this.state

    switch (status) {
      case 401:
        errors.invalidCredentials = true;
        this.setState({ errors });
        break;

      default:
        toast.error(messages.error['generic'], toastOptions);
        break;
    }
  };

  hasErrors = errors => Object.values(errors).some(error => error);

  async handleRegistry(e) {
    // e.preventDefault();

    const { formControls, errors } = this.state;
    Keyboard.dismiss();

    this.showLoader();

    const formErrors = validators.formValidate(
      formControls,
      errors
    );

    if (!this.hasErrors(formErrors)) {
      try {
        console.log(formControls);
        console.log(this.state);

        // await api.post('/auth/login', formControls);
        // this.props.history.push('/');

      } catch (error) {
        this.handleError(error);
      }

      // concluding - remove after
      setTimeout(() => {
        this.hideLoader();
        this.showAnimationView();
      }, 3000);

      // - end remove
      return;
    }
    this.hideLoader();
    this.setState({ errors: formErrors });
  };

  render() {
    const { formControls, errors, isFocused, isLoading, showAnimation } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <Navbar title="Tela de cadastro" />

        <View style={styles.content}>
          <Text style={styles.title}>Para se cadastrar, por favor preencha as informações abaixo:</Text>

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
            onChangeText={text => this.handleInput({ name: 'name', value: text })}
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
            onChangeText={text => this.handleInput({ name: 'email', value: text })}
          />

          <FormInput
            name="user"
            label="Usuário"
            placeholder="Insira um nome para seu usuário"
            errors={errors}
            value={formControls.user}
            disabled={isLoading}
            isFocused={isFocused}
            onFocus={() => this.handleFocus('user')}
            onBlur={() => this.handleFocus('user')}
            onChangeText={text => this.handleInput({ name: 'user', value: text })}
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
            onChangeText={text => this.handleInput({ name: 'password', value: text })}
          />

          <CustomButton isLoading={isLoading} text="Cadastrar" onPress={this.handleRegistry} />

          <CustomTextLink isLoading={isLoading} text="Já possui uma conta? " color="secondary" textLink="Entre aqui." onPress={() => navigate('Login')} />

        </View>

        {
          showAnimation
            ? <CustomLottieView source={require('@assets/animations/done.json')} type="full" />
            : null
        }

      </View>
    );
  }
}