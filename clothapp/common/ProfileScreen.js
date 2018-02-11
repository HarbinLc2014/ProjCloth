import React, { Component } from 'react';
import { Text, View, Platform, ImageBackground, TouchableOpacity,Dimensions, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Ionicons, Foundation, Entypo, FontAwesome } from '@expo/vector-icons';
import CardSection from './components/CardSection';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ProfileScreen extends Component {
      static navigationOptions = props => {
        const { navigation } = props;
        const { navigate } = navigation;
                return {
        title: '我的设置',
        tabBarIcon: ({ tintColor }) => {
        return <FontAwesome name="cog" size={30} color={tintColor} />;
      },
          headerTitle: '设置',
          headerStyle: {
            marginTop: Platform.OS === 'android' ? 24 : 0
          }
        };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/spring/welcome/welcome3.jpg')} style={{ flex: 1, width: null, height: null, backgroundColor: 'rgba(0,0,0,0)'}}>
      <View style={{ marginTop: 0 }}>
      <View style={{ width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', height: SCREEN_WIDTH*0.55, backgroundColor: 'rgba(0,0,0,0.5)', flexDirection: 'column' }}>
      <Image source={require('../assets/source2.png')} resizeMode='stretch'  style={{ width: SCREEN_WIDTH*0.35, height: SCREEN_WIDTH*0.38, marginTop: 15, marginBottom: 10 }} />
      <Text style={{ color: '#FFFFFF', fontSize: 20 }} > 靓衣汇 </Text>
      </View>

      <CardSection style={{ backgroundColor: 'rgba(16,16,16,0.75)' }}>
      <TouchableOpacity style={{ width: SCREEN_WIDTH }}>
      <Text style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, fontSize: 18, color: '#FFF', fontWeight: '900' }}>订单历史</Text>
      </TouchableOpacity>
      </CardSection>
      <CardSection style={{ backgroundColor: 'rgba(16,16,16,0.75)' }}>
      <TouchableOpacity style={{ width: SCREEN_WIDTH }}>
      <Text style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, fontSize: 18, color: '#FFF', fontWeight: '900' }}>浏览记录</Text>
      </TouchableOpacity>
      </CardSection>
      <CardSection style={{ backgroundColor: 'rgba(16,16,16,0.75)' }}>
      <TouchableOpacity style={{ width: SCREEN_WIDTH }}>
      <Text style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, fontSize: 18, color: '#FFF', fontWeight: '900' }}>个人设置</Text>
      </TouchableOpacity>
      </CardSection>
      <CardSection style={{ backgroundColor: 'rgba(16,16,16,0.75)' }}>
      <TouchableOpacity style={{ width: SCREEN_WIDTH }}>
      <Text style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, fontSize: 18, color: '#FFF', fontWeight: '900' }}>更多信息</Text>
      </TouchableOpacity>
      </CardSection>
      <CardSection style={{ backgroundColor: 'rgba(16,16,16,0.75)' }}>
      <TouchableOpacity style={{ width: SCREEN_WIDTH }}>
      <Text style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 15, fontSize: 18, color: '#FFF', fontWeight: '900' }}>商家加盟</Text>
      </TouchableOpacity>
      </CardSection>
      </View>
      </ImageBackground>
      </View>
    );
  }
}

export default ProfileScreen;
