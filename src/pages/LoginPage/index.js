import React, { Component } from 'react';
import { Text, TextInput, View, Button, ImageBackground } from 'react-native';
import { styles } from './styles';
import validators from '../../utils/validate';
const bgImage = require('../../assets/images/bg-image.jpg')

export default class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      formControls: {
        email: 'leodionizio@email.com',
        password: '123456'
      },
      errors: {
        invalidCredentials: false
      }
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    const { formControls, errors } = this.state

    formControls[name] = value
    errors.invalidCredentials = false
    errors[name] && delete errors[name]

    this.setState({
      formControls,
      errors
    });
  };

  handleError(status) {
    const { errors } = this.state

    switch (status) {
      case 401:
        errors.invalidCredentials = true
        this.setState({ errors });
        break;

      default:
        toast.error(messages.error['generic'], toastOptions);
        break;
    }
  };

  hasErrors = errors => Object.values(errors).some(error => error);

  async handleLogin(e) {
    // e.preventDefault();

    const { formControls, errors } = this.state

    const formErrors = validators.formValidate(
      formControls,
      errors
    );

    if (!this.hasErrors(formErrors)) {
      try {
        console.log(formControls)
        // await api.post('/auth/login', formControls);
        // this.props.history.push('/');
      } catch (error) {
        this.handleError(error);
      }
    }

    this.setState({ errors: formErrors });
  };


  render() {
    const { formControls, errors } = this.state

    return (
      <ImageBackground source={bgImage} style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Bem vindo à página de Login</Text>
          <TextInput
            name="email"
            type="email"
            placeholder="Insira seu e-mail"
            errors={errors}
            value={formControls.email}
            onChange={this.handleInput} />

          <TextInput
            name="password"
            type="password"
            placeholder="******"
            value={formControls.password}
            errors={errors}
            onChange={this.handleInput} />

          <Button title="Entrar" onPress={this.handleLogin}></Button>
        </View>
      </ImageBackground>
    );
  }
}
