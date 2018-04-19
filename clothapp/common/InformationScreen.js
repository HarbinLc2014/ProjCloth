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
      headerTitle: '联系我们',
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
      <View style={{ flex: 1 }}>
  {/*    <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={btTextStyles}>靓衣汇温馨提示</Text>
      </View> */}
      <Swiper style={styles.wrapper} showsButtons >
        <View style={styles.slide1}>
        <Text style={btTextStyles}>
        如果下单以后长时间未被审核, 请联系客服寻求帮助。
        </Text>
        <Text style={btTextStyles}>QQ: 1826442304</Text>
         <Text style={btTextStyles}>Wechat: NsxxxN</Text>
         <Text style={btTextStyles}>
          联系时请注名靓衣库订单号以及遇到的问题
        </Text>
        </View>
        <View style={styles.slide2}>
        <Text style={btTextStyles}>
        如果您对我们的衣服感兴趣，也可以来光顾我们的实体店
        </Text>
        <Text style={btTextStyles}>
          地址: 黑龙江省哈尔滨市南岗区红军街5路5厅
        </Text>
        <Text style={btTextStyles}>
          千百惠女装
        </Text>
        </View>
        <View style={styles.slide3}>
        <Text style={btTextStyles}>
          由于货运问题,有些特殊尺码和颜色的服装可能需要一段时间才能从仓库调出，或者会断货。
        </Text>
        <Text style={btTextStyles}>
          如遇这种情况，我们会在第一时间与您联系，确认是否更换尺码颜色或者取消订单，给您带来的不便希望能够谅解。
        </Text>
        </View>
      </Swiper>
    </View>
    );
  }
}

export default ManualScreen;
