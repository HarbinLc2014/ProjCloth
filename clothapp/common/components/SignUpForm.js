import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Font } from 'expo';
import { View, Text, Platform, ImageBackground, Dimensions, Keyboard } from 'react-native';
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
  state = { phone: '', code: '', password: '', email: '', fontLoaded: false };
  componentWillMount() {
        this.props.auth.signuperror = '';
  }
  async componentDidMount() {
      await Font.loadAsync({
      //    'gloria-halleujah': require('../assets/sample.otf'),
          lcfont1: require('../../assets/sample.otf'),
          lcfont2: require('../../assets/sample2.ttf'),
          lcfont3: require('../../assets/sample3.otf'),
          lcfont4: require('../../assets/GloriaHallelujah.ttf')
      });

      this.setState({ fontLoaded: true });
  }
  getRegisterCode = () => {
  }
  submit() {
    Keyboard.dismiss();
    this.setState({ email: '', password: '' });
    this.props.signupUser({ email: this.state.email, password: this.state.password, navigate: this.props.navigation.navigate });
  }
render() {
  let btTextStyles = [];
  let btTextStyles2 = [];
  let btTextStyles3 = [];
  let btTextStyles4 = [];
  btTextStyles[0] = styles.btText;
  btTextStyles2[0] = styles.btText2;
  btTextStyles3[0] = styles.btText3;
  btTextStyles4[0] = styles.btText4;
  if (this.state.fontLoaded) {
      btTextStyles[1] = styles.btText_with_font;
      btTextStyles2[1] = styles.btText_with_font2;
      btTextStyles3[1] = styles.btText_with_font3;
      btTextStyles4[1] = styles.btText_with_font4;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageBackground source={require('../../assets/spring/source/_08A4730.jpg')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <View style={{ marginBottom: 50 }}>
      <Text style={btTextStyles}>靓衣汇</Text>
      </View>
      <View>
        <FormLabel labelStyle={btTextStyles4}>邮箱</FormLabel>
        <FormInput
        containerStyle={{ width: 250, borderColor: '#ffffff' }}
        inputStyle={{ borderColor: '#ffffff', color: '#ffffff' }}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <FormLabel labelStyle={btTextStyles4}>密码</FormLabel>
        <FormInput
        containerStyle={{ width: 250, borderColor: '#ffffff' }}
        inputStyle={{ borderColor: '#ffffff', color: '#ffffff' }}
        secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </View>

      <Button
      title="注册"
      buttonStyle={styles.loginButton}
      containerStyle={{ marginTop: 32, flex: 0 }}
      containerStyle={{ flex: -1 }}
      activeOpacity={0.8}
    onPress={this.submit.bind(this)}
      textStyle={btTextStyles2}
      />
      <View style={{ width: SCREEN_WIDTH, alignItems: 'center', marginBottom: 50 }}>
      <FormValidationMessage labelStyle={{ fontSize: 13 }}>{this.props.auth.signuperror}</FormValidationMessage>
      </View>
      <Button title="已经注册过了？ 登录已有账号" textStyle={{ fontSize: 13 }} onPress={() => this.props.navigation.navigate('signin')} buttonStyle={{ width: 280, backgroundColor: 'rgba(0,0,0,0)' }} />
      </View>
      </ImageBackground>
    </View>
  );
}
}
const styles = {
      btText: {
        fontSize: 13,
        color: '#FA4A07',
        textShadowOffset: { width: 2, height: 1.5 },
         textShadowColor: 'black',
         margin: 10,
      },
      btText_with_font: {
          fontFamily: 'lcfont1',
          fontSize: 48,
          fontWeight: 'bold',
          color: '#ff82ab',
          textShadowOffset: { width: 0.1, height: 0.1 },
          textShadowColor: '#ff82ab',
          textAlign: 'center'
      },
      btText2: {
        fontSize: 13,
        color: '#FA4A07',
        textShadowOffset: { width: 2, height: 1.5 },
         textShadowColor: 'black',
         margin: 10,
          textAlign: 'center'
      },
      btText_with_font2: {
        fontFamily: 'lcfont1',
        fontSize: 20,
        color: '#ffffff',
        textShadowOffset: { width: 0.1, height: 0.1 },
        textShadowColor: '#ff82ab',
        textAlign: 'center'
      },
      btText3: {
        fontSize: 13,
        color: '#FA4A07',
        textShadowOffset: { width: 2, height: 1.5 },
         textShadowColor: 'black',
         margin: 10,
          textAlign: 'center'
      },
      btText_with_font3: {
          fontFamily: 'lcfont3',
          fontSize: 13,
          fontWeight: 'bold',
          color: '#007aff',
          textShadowOffset: { width: 2, height: 1.5 },
          textShadowColor: 'black',
          margin: 10,
          textAlign: 'center'
      },
      btText4: {
        fontSize: 15,
        color: '#ffffff',
        textShadowOffset: { width: 2, height: 1.5 },
         textShadowColor: 'black',
      },
      btText_with_font4: {
          fontFamily: 'lcfont1',
          fontSize: 15,
          color: '#ffffff',
          textShadowOffset: { width: 2, height: 1.5 },
           textShadowColor: 'black',
      },
      loginButton: {
        marginBottom: 5,
        marginTop: 35,
  borderRadius: 30,
  height: 50,
  width: 200,
  backgroundColor: '#92BBD9'
}
};
export const mapStateToProps = state => {
  return {
     auth: state.auth
  };
};

export default connect(mapStateToProps, { signupUser })(SignUpForm);
