import React, { Component } from 'react';
import { View, Text, Platform, ImageBackground } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignInForm extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      headerTitle: '登录',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    };
  }
  state = { phone: '', password: '' };
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

      <Button title="Submit" style={{ marginBottom: 20, marginTop: 15 }} />
      <Button title="注册" onPress={() => this.props.navigation.navigate('signup')} />
      </ImageBackground>
    </View>
  );
}
}

export default SignInForm;
