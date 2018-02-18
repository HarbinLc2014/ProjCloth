import React, { Component } from 'react';
import { View, Text, Platform, ImageBackground, Dimensions } from 'react-native';
import { FormLabel, FormInput, Button, Card, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginUser, login } from '../actions/AuthActions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class SignInForm extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      header: null,
      headerTitle: '登录',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      headerLeft: <Text />
    };
  }
  state = { phone: '', password: '', email: '' };
  submit() {
    this.props.loginUser({ email: this.state.email, password: this.state.password, navigate: this.props.navigation.navigate });
  }
render() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require('../../assets/spring/source/_08A4730.jpg')} style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', flex: 1, marginLeft: 30, marginRight: 30 }}>
      <View style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
        <FormLabel labelStyle={{ fontSize: 15, color: '#ffffff' }}>邮箱</FormLabel>
        <FormInput
          containerStyle={{ borderColor: '#ffffff' }}
          inputStyle={{ width: 250, borderColor: '#ffffff', color: '#ffffff' }}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </View>

      <View style={{ marginBottom: 10, flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
      <View style={{ width: 200 }}>
        <FormLabel labelStyle={{ fontSize: 15, color: '#ffffff' }}>密码</FormLabel>
        <FormInput
        inputStyle={{ borderColor: '#ffffff', color: '#ffffff' }}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </View>
      <View style={{ width: 150, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button title="重置密码" onPress={this.getRegisterCode} titleStyle={{ fontSize: 15 }} />
      </View>
      </View>
      <View style={{ alignItems: 'center', width: SCREEN_WIDTH }}>
      <Button title="登录" style={{ marginBottom: 5, marginTop: 35, width: 180 }} onPress={this.submit.bind(this)} />
      <View style={{ width: SCREEN_WIDTH, alignItems: 'center', marginBottom: 50 }}>
      <FormValidationMessage labelStyle={{ fontSize: 10 }}>wwwww</FormValidationMessage>
      </View>
      <Button title="注册新用户" textStyle={{ fontSize: 13 }} onPress={() => this.props.navigation.navigate('signup')} buttonStyle={{ width: 180, backgroundColor: 'rgba(0,0,0,0)' }} />
      </View>

      </View>
      </ImageBackground>
    </View>
  );
}
}

export const mapStateToProps = state => {
  const { error, loading } = state.auth;
  return {
     error, loading
  };
};

export default connect(null, { loginUser, login })(SignInForm);
