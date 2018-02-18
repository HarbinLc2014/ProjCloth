import React, { Component } from 'react';
import { View, Text, Platform, ImageBackground, Dimensions } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
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
  state = { phone: '', code: '', password: '' };

  getRegisterCode = () => {
  /*  twi.messages.create({
  //      body: 'Your code is ' + code,
        body: 'Your code is shit',
        to: '+8615546147213',
        from: '+16122604295'
      });
    console.log('getCode!');*/
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
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
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

      <Button title="注册" style={{ marginBottom: 5, marginTop: 35, width: 180 }} />
      <View style={{ width: SCREEN_WIDTH, alignItems: 'center', marginBottom: 50 }}>
      <FormValidationMessage labelStyle={{ fontSize: 10 }}>wwwww</FormValidationMessage>
      </View>
      <Button title="登录已有账号" textStyle={{ fontSize: 13 }} onPress={() => this.props.navigation.navigate('signin')} buttonStyle={{ width: 180, backgroundColor: 'rgba(0,0,0,0)' }} />
      </View>
      </ImageBackground>
    </View>
  );
}
}

export default SignUpForm;
