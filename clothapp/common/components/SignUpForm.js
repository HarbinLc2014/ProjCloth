import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Platform, ImageBackground, Dimensions } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import { signupUser } from '../actions/AuthActions';

const accountSid = 'AC79b658ea966756f6e9af4ed3f4486ef4';
const authToken = '7d94caeebccfd63f8e13b27a6d64caa5';
//const Twilio = require('react-native-twilio')(accountSid, authToken);

const SCREEN_WIDTH = Dimensions.get('window').width;
/*
const twi = twilio.Twilio(accountSid, authToken);*/

class SignUpForm extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      header: null,
      headerTitle: '注册',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      headerLeft: <Text />
    };
  }
  state = { phone: '', code: '', password: '', email: '' };
  componentWillMount() {
        this.props.auth.signuperror = '';
  }
  getRegisterCode = () => {
  }
  submit() {
    this.props.signupUser({ email: this.state.email, password: this.state.password, navigate: this.props.navigation.navigate });
  }
render() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageBackground source={require('../../assets/spring/source/_08A4730.jpg')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <View>
        <FormLabel labelStyle={{ fontSize: 15, color: '#ffffff' }}>邮箱</FormLabel>
        <FormInput
        containerStyle={{ width: 250, borderColor: '#ffffff' }}
        inputStyle={{ borderColor: '#ffffff', color: '#ffffff' }}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <FormLabel labelStyle={{ fontSize: 15, color: '#ffffff' }}>密码</FormLabel>
        <FormInput
        containerStyle={{ width: 250, borderColor: '#ffffff' }}
        inputStyle={{ borderColor: '#ffffff', color: '#ffffff' }}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </View>

      <Button title="注册" style={{ marginBottom: 5, marginTop: 35, width: 180 }} onPress={this.submit.bind(this)} />
      <View style={{ width: SCREEN_WIDTH, alignItems: 'center', marginBottom: 50 }}>
      <FormValidationMessage labelStyle={{ fontSize: 13 }}>{this.props.auth.signuperror}</FormValidationMessage>
      </View>
      <Button title="登录已有账号" textStyle={{ fontSize: 13 }} onPress={() => this.props.navigation.navigate('signin')} buttonStyle={{ width: 180, backgroundColor: 'rgba(0,0,0,0)' }} />
      </View>
      </ImageBackground>
    </View>
  );
}
}

export const mapStateToProps = state => {
  return {
     auth: state.auth
  };
};

export default connect(mapStateToProps, { signupUser })(SignUpForm);
