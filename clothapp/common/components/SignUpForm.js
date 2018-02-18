import React, { Component } from 'react';
import { View, Text, Platform, ImageBackground } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
const accountSid = 'AC79b658ea966756f6e9af4ed3f4486ef4';
const authToken = '7d94caeebccfd63f8e13b27a6d64caa5';
//const Twilio = require('react-native-twilio')(accountSid, authToken);


/*
const twi = twilio.Twilio(accountSid, authToken);*/
const createNonceStr = function () {
    return Math.random().toString(36).substr(2, 15);
};
// 生成时间戳 秒值 借用微信的
const createTimestamp = function () {
    return parseInt(new Date().getTime() / 1000) + '';
};
//进行SHA1哈希计算，转化成16进制字符 这里用的库为jshashes
const generateSHA1SignatureByHex = (appSecret, nonce, timestamp) => {
    const sha1Str = appSecret + nonce + timestamp;
    const SHA1 = new Hashes.SHA1().hex(sha1Str)
    return SHA1;
};

class SignUpForm extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      headerTitle: '注册',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
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
    <View style={{ flex: 1 }}>
    <ImageBackground source={require('../../assets/spring/source/_08A4730.jpg')} style={{ flex: 1 }}>
      <View style={{ marginBottom: 10 }}>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <FormLabel>Password</FormLabel>
        <FormInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </View>
      <View style={{ marginBottom: 10, flexDirection: 'row' }}>
      <View style={{ width: 200 }}>
        <FormLabel>Enter Code</FormLabel>
        <FormInput
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
        />
      </View>
      <View style={{ width: 150, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button title="获取验证码" onPress={this.getRegisterCode} />
      </View>
      </View>

      <Button title="Submit" style={{ marginBottom: 20, marginTop: 15 }} />
      <Button title="登录" onPress={() => this.props.navigation.navigate('signin')} />
      </ImageBackground>
    </View>
  );
}
}

export default SignUpForm;
