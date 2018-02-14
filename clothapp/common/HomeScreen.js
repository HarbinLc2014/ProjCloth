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
import { connect } from 'react-redux';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Profile from './components/Profile';
import Comp3 from './components/Comp3';
import Comp4 from './components/Comp4';
import { likeCloth } from './actions/ClothAction';

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
      headerTitle: '靓衣汇',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      headerRight:
        <Entypo name="notification" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { console.log('aaaaa'); }} />,
     headerLeft:
<Image source={require('../assets/source2.png')} resizeMode='stretch'  style={{ width: 30, height: 33, marginTop: 2, marginBottom: 5, marginLeft: 10 }} />

    };
  }
  state = {
      fontLoaded: false,
      showModal: false,
      thumbnail: 0,
      type: '',
      eventCloth: { type: '', src: require('../assets/bg2.jpg') }
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
  onAccept() {
      this.setState({ showModal: false });
  }
  press(event) {
  //  console.log(event.msg);
  //  console.log(event.thumbnail);
    this.setState({ src: event.src });
    this.setState({ showModal: !this.state.showModal });
    this.setState({ type: event.type });
    this.setState({ eventCloth: event });
  //  console.log(this.state.thumbnail);
  }
  pressComp1(event) {
  //  console.log(event.msg);
  //  console.log(event.thumbnail);
        this.setState({ thumbnail: event.thumbnail });
    this.setState({ showModal: !this.state.showModal });
    //console.log(this.state.thumbnail);
    this.setState({ type: 'title' });
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
                <Comp2 pressComp2={this.press.bind(this)} />
      </View>

   </View>
   <ImageBackground source={require('../assets/nbg.jpg')} style={{ flex: 1, width: null, height: null, alignItems: 'center' }}>
   <View style={{ flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0)', marginBottom: 30, paddingTop: 10 }}>

 <View style={styles.sectionStyle2}>
         <View style={{ alignItems: 'center', width: SCREEN_WIDTH-20, backgroundColor: '#ffffff', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 10 }}>
               <Text style={btTextStyles}>最佳搭配</Text>
         </View>
              {/* <Comp1 count={32}/> */}
              <Comp4 pressComp4={this.press.bind(this)} count="两件套" />
     </View>

 <View style={styles.sectionStyle2}>

         <View style={{ alignItems: 'center', width: SCREEN_WIDTH-20, backgroundColor: '#FFFFFF', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 10 }}>
               <Text style={btTextStyles}>单裙 & 连衣裙</Text>
         </View>

            {/*   <Comp1 count={40}/>  */}
            <Comp4 pressComp4={this.press.bind(this)} count="裙" />
     </View>
  </View>

      <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', width: SCREEN_WIDTH, alignItems: 'center', paddingTop: 5, marginBottom: 15, paddingBottom: 15 }}>

        <View style={styles.sectionStyle}>
            <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-8, marginBottom: 5 }}>
                  <Text style={btTextStyles}>上衣系列</Text>
            </View>
                  <Comp1 count="上衣" pressComp1={this.press.bind(this)}/>
        </View>
<View style={styles.sectionStyle}>
            <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-8, marginBottom: 5 }}>
                  <Text style={btTextStyles}>风衣 & 外衣</Text>
            </View>

                  <Comp1 count="风衣" pressComp1={this.press.bind(this)} />
        </View>

     </View>

           <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', marginTop: 20, paddingBottom: 12, marginBottom: 20 }}>

<View style={styles.sectionStyle}>
                 <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-10, backgroundColor: '#FFFFFF', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 5 }}>
                       <Text style={btTextStyles}>套装</Text>
                 </View>
                       <Comp1 count="套装" pressComp1={this.press.bind(this)}/>
             </View>

<View style={styles.sectionStyle}>

                 <View style={{ alignItems: 'center', width: (SCREEN_WIDTH/2)-10, backgroundColor: '#FFFFFF', borderRadius: 10, borderWidth: 1.5, borderColor: '#d1d1d1', marginBottom: 5 }}>
                       <Text style={btTextStyles}>裤子</Text>
                 </View>

                       <Comp1 count="裤" pressComp1={this.press.bind(this)}/>
             </View>

          </View>
      </ImageBackground>
          <View style={{ flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0.5)', width: SCREEN_WIDTH, paddingBottom: 0, marginTop: 10 }}>
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
          <View>
        <Text style={[btTextStyles, { fontSize: 25, marginLeft: 20 }]}>其它商品</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
         <Ionicons name="ios-more" size={25} color="#ffffff" style={{ marginRight: 20, marginTop: 3 }}/>
         </View>
        </View>
          <ImageBackground source={require('../assets/bg2.jpg')} style={{ flex: 1, width: null, height: null, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', marginTop: 7}}>
          <View style={{marginBottom: 7, marginTop: 7}}>
          <Comp3 press={this.press.bind(this)}/>
          </View>
                  </ImageBackground>
          </View>
          <Profile
          visible={this.state.showModal}
          Accept={this.onAccept.bind(this)}
          library={this.state.eventCloth}
          >
              防尬聊话题
          </Profile>
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
         backgroundColor: 'rgba(0,0,0,0.25)',
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


const mapStateToProps = state => {
//    console.log(state.libraries);
    return { clothes: state.clothes };
};

export default connect(mapStateToProps, { likeCloth })(HomeScreen);
