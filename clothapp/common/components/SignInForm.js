import React, { Component } from 'react';
import { View, Text, Platform, ImageBackground, Dimensions, Keyboard, Switch, Alert } from 'react-native';
import { Font } from 'expo';
import { FormLabel, FormInput, Button, Card, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginUser, login, resetPassword } from '../actions/AuthActions';

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
  state = { phone: '', password: '', email: '', message: '', fontLoaded: false, rememberAccount: false };
  componentWillMount() {
    this.setState({ loading: this.props.auth.loading });
//    console.log(this.props.loading);
        this.props.auth.signinerror = '';
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
  submit() {
    Keyboard.dismiss();
    this.setState({ email: '', password: '' });
    this.props.loginUser({ email: this.state.email, password: this.state.password, navigate: this.props.navigation.navigate });
  }
  renderButton() {
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
      <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 0 }}
                    containerStyle={{ flex: -1 }}
                    activeOpacity={0.8}
                    title='登录'
                  onPress={this.submit.bind(this)}
                    textStyle={btTextStyles3}
      />
    );
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
        <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', flex: 1, marginLeft: 30, marginRight: 30 }}>
        <View style={{ marginBottom: 50 }}>
        <Text style={btTextStyles}>靓衣汇</Text>
        </View>
      <View style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
        <FormLabel labelStyle={btTextStyles4}>邮箱</FormLabel>
        <FormInput
          containerStyle={{ borderColor: '#ffffff' }}
          inputStyle={{ width: 250, borderColor: '#ffffff', color: '#ffffff' }}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </View>

      <View style={{ marginBottom: 10, flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
      <View style={{ width: 200 }}>
        <FormLabel labelStyle={btTextStyles4}>密码</FormLabel>
        <FormInput
        inputStyle={{ borderColor: '#ffffff', color: '#ffffff' }}
          value={this.state.password}
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
      </View>
      <View style={{ width: 150, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button
      buttonStyle={styles.loginButton2}
      containerStyle={{ marginTop: 32, flex: 0 }}
      containerStyle={{ flex: -1 }}
      activeOpacity={0.8}
    onPress={this.submit.bind(this)}
      textStyle={btTextStyles3}
      title="重置密码"
      onPress={() => {
                        this.props.resetPassword(this.state.email);
                        Alert.alert(
                        '密码重置',
                        '我们已向邮箱中发送了邮件，如果您输入的邮箱地址正确，可以根据链接来重置密码',
                        [
                          { text: 'OK' },
                        ]
                      );
                     }}
      />
      </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
      <Switch size={10} tintColor='#92BBD9' onTintColor='#92BBD9' thumbTintColor='#d1d1d1' value={this.state.rememberAccount} onValueChange={() => this.setState({ rememberAccount: !this.state.rememberAccount })} />
       <Text style={btTextStyles3}>记住账号</Text>
      </View>
      <View style={{ alignItems: 'center', width: SCREEN_WIDTH }}>
      {this.renderButton()}
      <View style={{ width: SCREEN_WIDTH, alignItems: 'center', marginBottom: 50 }}>
      <FormValidationMessage labelStyle={{ fontSize: 13 }}>{this.props.auth.signinerror}</FormValidationMessage>
      </View>
      <Button title="还没有账号？ 注册新用户" textStyle={{ fontSize: 13 }} onPress={() => this.props.navigation.navigate('signup')} buttonStyle={{ width: 180, backgroundColor: 'rgba(0,0,0,0)' }} />
      </View>

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
        color: '#92BBD9',
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
        fontFamily: 'lcfont1',
        fontSize: 20,
        color: '#ffffff',
        textShadowOffset: { width: 0.1, height: 0.1 },
        textShadowColor: '#ff82ab',
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
},
loginTextButton: {
  fontSize: 16,
  color: '#fff',
  fontWeight: 'bold',
},
loginButton2: {
  marginBottom: 5,
  marginTop: 25,
borderRadius: 30,
height: 50,
width: 120,
backgroundColor: '#92BBD9'
},
};
export const mapStateToProps = state => {
  return {
     auth: state.auth, loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { loginUser, login, resetPassword })(SignInForm);
