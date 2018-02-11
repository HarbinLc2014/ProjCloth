import React, { Component } from 'react';
import { Font } from 'expo';
import { Text, View, Platform, AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image, ImageBackground,
    AlertIOS } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { TimerMixin } from 'react-timer-mixin';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import Comp4 from './components/Comp4';

const ImageData = require('./ImageData.json');
const sample = require('../assets/sample.otf');
const sample2 = require('../assets/sample2.ttf');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
  /* eslint-disable global-require */
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      title: '主页',
      tabBarIcon: ({ tintColor }) => {
          return <Foundation name="social-myspace" size={30} color={tintColor} />;
        },
      headerTitle: 'Cloth Gallery',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      headerRight:
        <Entypo name="notification" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { console.log('aaaaa'); }} />,
     headerLeft:
          <Entypo name="log-out" size={25} style={{ marginLeft: 10, color: '#007aff' }} onPress={() => { console.log('aaaaa'); }} />

    };
  }
  state = {
      fontLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
      //    'gloria-halleujah': require('../assets/sample.otf'),
          lcfont1: require('../assets/sample.otf'),
          lcfont2: require('../assets/sample2.ttf'),
          lcfont3: require('../assets/sample3.otf')
      });

      this.setState({ fontLoaded: true });
  }
  render() {
    let btTextStyles = [];
    let btTextStyles2 = [];
    let btTextStyles3 = [];
    btTextStyles[0] = styles.btText;
    btTextStyles2[0] = styles.btText2;
    btTextStyles3[0] = styles.btText3;
    if(this.state.fontLoaded){
        btTextStyles[1] = styles.btText_with_font;
        btTextStyles2[1] = styles.btText_with_font2;
        btTextStyles3[1] = styles.btText_with_font3;
    }
  //  console.log(this.state.fontLoaded);
    return (
    <ScrollView>

    <View style={{ flexDirection: 'row', marginTop: 0 }}>

      <View style={{ width: SCREEN_WIDTH, height: (SCREEN_WIDTH * 2) / 3 }}>
                <Comp2 />
      </View>

   </View>
   <ImageBackground source={require('../assets/nbg.jpg')} style={{ flex: 1, width: null, height: null, alignItems: 'center' }}>
   <View style={{ flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0)', marginBottom: 30, paddingTop: 10 }}>

 <View style={styles.sectionStyle2}>
         <View style={{ alignItems: 'center', width: SCREEN_WIDTH-20, backgroundColor: '#ffffff', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 10 }}>
               <Text style={btTextStyles3}>最佳搭配</Text>
         </View>
              {/* <Comp1 count={32}/> */}
              <Comp4 />
     </View>

 <View style={styles.sectionStyle2}>

         <View style={{ alignItems: 'center', width: SCREEN_WIDTH-20, backgroundColor: '#FFFFFF', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 10 }}>
               <Text style={btTextStyles3}>经典服饰</Text>
         </View>

            {/*   <Comp1 count={40}/>  */}
            <Comp4 />
     </View>
  </View>

      <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', width: SCREEN_WIDTH, alignItems: 'center', paddingTop: 5, marginBottom: 15, paddingBottom: 15 }}>

        <View style={styles.sectionStyle}>
            <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-8, marginBottom: 5 }}>
                  <Text style={btTextStyles2}> 今 日 首 推 </Text>
            </View>
                  <Comp1 count={0}/>
        </View>
<View style={styles.sectionStyle}>
            <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-8, marginBottom: 5 }}>
                  <Text style={btTextStyles2}> 潮 流 女 装 </Text>
            </View>

                  <Comp1 count={8}/>
        </View>

     </View>

           <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', marginTop: 20, paddingBottom: 12, marginBottom: 20 }}>

<View style={styles.sectionStyle}>
                 <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-10, backgroundColor: '#FFFFFF', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 5 }}>
                       <Text style={btTextStyles}>人气商品</Text>
                 </View>
                       <Comp1 count={16}/>
             </View>

<View style={styles.sectionStyle}>

                 <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-10, backgroundColor: '#FFFFFF', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 5 }}>
                       <Text style={btTextStyles}>促销商品</Text>
                 </View>

                       <Comp1 count={24}/>
             </View>

          </View>
      </ImageBackground>
          <View style={{ flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0.5)', width: SCREEN_WIDTH, paddingBottom: 0, marginTop: 10 }}>
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
          <View>
        <Text style={[btTextStyles, { fontSize: 25, marginLeft: 20 }]}>时尚服装</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
         <Ionicons name="ios-more" size={25} color="#ffffff" style={{ marginRight: 20, marginTop: 3 }}/>
         </View>
        </View>
          <ImageBackground source={require('../assets/bg2.jpg')} style={{ flex: 1, width: null, height: null, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', marginTop: 7}}>
          <View style={{marginBottom: 7, marginTop: 7}}>
          <Comp3 />
          </View>
                  </ImageBackground>
          </View>
    </ScrollView>

   );
  }
}
const styles = StyleSheet.create({
    btText: {
        color: '#000',
    },
    btText_with_font: {
        fontFamily: 'lcfont1',
        fontSize: 30,
        color: '#000',
    },
    btText2: {
        color: '#000',
    },
    btText_with_font2: {
        fontFamily: 'lcfont2',
        fontSize: 25,
        color: '#FA4A07'
    },
    btText3: {
        color: '#000',
    },
    btText_with_font3: {
        fontFamily: 'lcfont3',
        fontSize: 38,
        fontWeight: 'bold',
        color: '#007aff'
    },
    sectionStyle: {
      width: (SCREEN_WIDTH / 2) - 4,
       marginTop: 5,
        marginLeft: 1,
         marginRight: 1,
         backgroundColor: 'rgba(0,0,0,0.5)',
         borderWidth: 3,
         borderRadius: 3,
         borderColor: 'rgba(0,0,0,0)',
         paddingBottom: 15
    },
    sectionStyle2: {
      width: SCREEN_WIDTH - 20,
       marginTop: 15,
        marginLeft: 5,
         marginRight: 5,
         marginBottom: 10
    }
});


export default HomeScreen;
