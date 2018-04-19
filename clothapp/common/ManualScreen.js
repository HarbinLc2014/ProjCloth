import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import { Font } from 'expo';
import { Ionicons, Foundation, Entypo, FontAwesome } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  btText: {
    fontSize: 13,
    color: '#FA4A07',
    textShadowOffset:{width:2, height:1.5},
     textShadowColor:'black',
     margin: 10,
  },
  btText_with_font: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
      fontFamily: 'lcfont1',
      textShadowOffset: { width: 0.1, height: 0.1 },
       textShadowColor: '#ff82ab',
       textAlign: 'center'
  },
  btText2: {
    fontSize: 13,
    color: '#FA4A07',
    textShadowOffset:{width:2, height:1.5},
     textShadowColor:'black',
     margin: 10,
      textAlign: 'center'
  },
  btText_with_font2: {
      fontFamily: 'lcfont2',
      fontSize: 13,
      color: '#FA4A07',
      textShadowOffset:{width:2, height:1.5},
       textShadowColor:'black',
       margin: 10,
        textAlign: 'center'
  },
  btText3: {
    fontSize: 13,
    color: '#FA4A07',
    textShadowOffset:{width:2, height:1.5},
     textShadowColor:'black',
     margin: 10,
      textAlign: 'center'
  },
  btText_with_font3: {
      fontFamily: 'lcfont3',
      fontSize: 13,
      fontWeight: 'bold',
      color: '#007aff',
      textShadowOffset: { width: 2, height: 1.5 },
      textShadowColor:'black',
      margin: 10,
      textAlign: 'center'
  },
  btText4: {
    fontSize: 13,
    color: '#FA4A07',
    textShadowOffset:{width:2, height:1.5},
     textShadowColor:'black',
     margin: 10,
      textAlign: 'center'
  },
  btText_with_font4: {
      fontFamily: 'lcfont4',
      fontSize: 13,
      fontWeight: 'bold',
      color: '#007aff',
      textShadowOffset:{width:2, height:1.5},
       textShadowColor:'black',
       margin: 10,
       textAlign: 'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
    slide4: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide5: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide6: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
  text: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

class ManualScreen extends Component {
   static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      title: '我的设置',
      tabBarIcon: ({ tintColor }) => {
      return <FontAwesome name="cog" size={30} color={tintColor} />;
    },
      headerTitle: '使用手册',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
    };
  }
  state = { fontLoaded: false };
  async componentDidMount() {
      await Font.loadAsync({
      //    'gloria-halleujah': require('../assets/sample.otf'),
          lcfont1: require('../assets/sample.otf'),
          lcfont2: require('../assets/sample2.ttf'),
          lcfont3: require('../assets/sample3.otf'),
          lcfont4: require('../assets/GloriaHallelujah.ttf')
      });

      this.setState({ fontLoaded: true });
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
      <Swiper style={styles.wrapper} showsButtons >
        <View style={styles.slide1}>
          <Text style={btTextStyles}>进入靓衣汇App, 点击 “开始” 进入注册\登录界面.</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={btTextStyles}>在注册界面输入您的邮箱和密码,点击注册。</Text>
          <Text style={btTextStyles}>如果忘记了密码,可以在登录界面输入您的邮箱号,然后点击重置密码,系统将会向您的邮箱发送一封重置密码的链接。</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={btTextStyles}>当您在主页浏览了一件服装后，您可以在我的设置中的浏览记录一栏中查看它们并且下单。</Text>
          <Text style={btTextStyles}>当您每次退出靓衣汇后，您的浏览记录将被清空。</Text>
        </View>
        <View style={styles.slide4}>
          <Text style={btTextStyles}>您可以在匹配页面中浏览各式各样的服装。</Text>
          <Text style={btTextStyles}>左划表示跳过该服装，右划会将它们加入收藏。</Text>
        </View>
        <View style={styles.slide5}>
          <Text style={btTextStyles}>您可以通过点击匹配页面的右上角来筛选服装的类型。</Text>
        </View>
        <View style={styles.slide6}>
          <Text style={btTextStyles}>您可以在收藏中点击购物车按钮对服装进行下单，我们将会以货到付款的形式对您进行收款。</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={btTextStyles}>请务在订单中必填写个人真实信息，以便于我们联系您并且送货。</Text>
          <Text style={btTextStyles}>如果我们无法通过订单信息联系到您，我们将会取消该订单。</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={btTextStyles}>如有更多问题请参照联系我们一栏中的联系方式联系我们的客服，我们会及时处理您的问题和意见。</Text>
        </View>
      </Swiper>
    );
  }
}

export default ManualScreen;
