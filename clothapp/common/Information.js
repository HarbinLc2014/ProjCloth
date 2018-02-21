import React, { Component } from 'react';
import { View, Text, Platform, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { Font } from 'expo';
import { Card } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

 class Information extends Component {
   static navigationOptions = props => {
     const { navigation } = props;
     const { navigate } = navigation;
     return {
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
     if(this.state.fontLoaded){
         btTextStyles[1] = styles.btText_with_font;
         btTextStyles2[1] = styles.btText_with_font2;
         btTextStyles3[1] = styles.btText_with_font3;
         btTextStyles4[1] = styles.btText_with_font4;
     }
     return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ImageBackground source={require('../assets/spring/source/p30.jpg')} style={{ flex: 1 }}>
    <Card title='靓衣汇温馨提示' titleStyle={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', textShadowOffset:{width:0.1, height:0.1}, textShadowColor:'black' }} containerStyle={{ marginLeft: 30, marginRight: 30, backgroundColor: 'rgba(0,0,0,0.7)', width: SCREEN_WIDTH-60, alignItems: 'center' }}>
    <View style={{ width: 3.2*SCREEN_WIDTH/4 }}>
    <Text style={btTextStyles}>
    如果下单以后长时间未被审核, 请联系客服寻求帮助。
    </Text>
    <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
    <Text style={btTextStyles}>QQ: 1826442304</Text>
     <Text style={btTextStyles}>Wechat: NsxxxN</Text>
      </View>
     <Text style={btTextStyles}>
      联系时请注名靓衣库订单号以及遇到的问题
    </Text>
    <Text style={btTextStyles}>
    如果您对我们的衣服感兴趣，也可以经常来光顾我们的小店^ ^
    </Text>
    <Text style={btTextStyles}>
      地址: 黑龙江省哈尔滨市南岗区红军街5路5厅
    </Text>
    <Text style={btTextStyles}>
      由于货运问题,有些特殊尺码和颜色的服装可能需要一段时间才能从仓库调出，或者会断货。如遇这种情况，我们会在第一时间与您联系，确认是否更换尺码颜色或者取消订单，给您带来的不便希望能够谅解。
    </Text>
    </View>
    </Card>
    </ImageBackground>
    </ScrollView>
  );
  }
 }

const styles = {
      btText: {
        fontSize: 13,
        color: '#FA4A07',
        textShadowOffset:{width:2, height:1.5},
         textShadowColor:'black',
         margin: 10,
          textAlign: 'center'
      },
      btText_with_font: {
          fontFamily: 'lcfont1',
          fontSize: 16,
          color: '#ff82ab',
          textShadowOffset:{width:0.1, height:0.1},
           textShadowColor:'#ff82ab',
           margin: 12,
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
};

 export default Information;
