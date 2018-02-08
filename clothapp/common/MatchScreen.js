import React, { Component } from 'react';
import { Font } from 'expo';
import { View, Text, Image, Platform, ImageBackground, Dimensions, DeviceEventEmitter, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as actions from './actions';
import { likeCloth } from './actions/ClothAction';
import Swipe from './components/Swipe';
import Images from './components/Image';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class MatchScreen extends Component {

    static navigationOptions = props => {
      const { navigation } = props;
      const { navigate } = navigation;
      return {
        title: '主页',
        tabBarIcon: ({ tintColor }) => {
            return <Entypo name="documents" size={30} color={tintColor} />;
          },
        headerTitle: 'Matching',
        headerStyle: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }

      };
    }
    state = {
        fontLoaded: false,
        src: [
          require('../assets/bg6.jpg'),
          require('../assets/tbg1.jpg'),
      require('../assets/bg5.jpg'),
    require('../assets/bg4.jpg')
    ]
    };
  componentWillMount() {
  //  console.log(this.props.clothes);
  }
  async componentDidMount() {
    await Font.loadAsync({
        lcfont1: require('../assets/sample.otf'),
        lcfont2: require('../assets/sample2.ttf'),
        lcfont3: require('../assets/sample3.otf')
    });

    this.setState({ fontLoaded: true });
  }
        /* eslint-disable global-require */
  renderCard = (cloth) => {
    const { id } = cloth;
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
    console.log(btTextStyles);
    return (
      <View style={{ marginLeft: 35, marginRight: 35, width: SCREEN_WIDTH-70, height: SCREEN_HEIGHT-150, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={this.state.src[id % (this.state.src.length)]} style={{ flex: 1, width: SCREEN_WIDTH-70, height: null, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} resizeMode='stretch'>
      <View style={{ flex: 1, width: (SCREEN_WIDTH-70)*0.7, height: (SCREEN_HEIGHT-150)*0.82, marginTop: (SCREEN_HEIGHT-150)*0.055 }}>
      <Image style={{ width: null, height: (SCREEN_HEIGHT-150)*0.82, borderRadius: 10 }} source={Images.ad[id]} ></Image>
      <View style={styles.detailWrapper}>
      <TouchableOpacity style={{ alignItems: 'center', flex: 1, width: null, backgroundColor: 'rgba(0,0,0,0.15)' }}>
      <Text style={btTextStyles}>更多介绍</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
      </View>
    );
    }
  renderNoMoreCards = () => {
      return (
        <Card title='No More Matches!'>
        </Card>
      );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <ImageBackground source={require('../assets/bg2.jpg')} style={{ flex: 1, width: null, height: null, backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <View style={{ flex: 1, marginTop: 60 }}>
      <Swipe
      data={this.props.clothes}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards}
  //    cloth={this.renderCard.cloth}
      onSwipeRight={cloth => {
        this.props.likeCloth(cloth);
        console.log('test:');
        console.log({ cloth });
  //      var likedClothes = cloth;
  //      DeviceEventEmitter.emit('taobaoBind', { likedClothes });
       }}
      keyProp="title"
      />
      </View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = {
  btText: {
      color: '#000',
  },
  btText_with_font: {
      fontFamily: 'lcfont1',
      fontSize: 30,
      color: '#fff',
  },
  btText2: {
      color: '#000',
  },
  btText_with_font2: {
      fontFamily: 'lcfont2',
      fontSize: 25,
      color: '#fff'
  },
  btText3: {
      color: '#000',
  },
  btText_with_font3: {
      fontFamily: 'lcfont3',
      fontSize: 38,
      fontWeight: 'bold',
      color: '#FFF'
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 3,
    marginTop: 20
  }
};

const mapStateToProps = state => {
//    console.log(state.libraries);
    return { clothes: state.clothes };
};

export default connect(mapStateToProps, { likeCloth })(MatchScreen);
