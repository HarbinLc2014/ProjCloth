import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';

class LoginScreen extends Component {
  render() {
    return (
      <View>
      <SignUpForm />
      </View>
    );
  }
}

export default LoginScreen;
