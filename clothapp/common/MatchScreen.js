import React, { Component } from 'react';
import { Font } from 'expo';
import { View, Text, Image, Platform, ImageBackground, Dimensions, DeviceEventEmitter, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Ionicons, Foundation, Entypo, Feather, EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as actions from './actions';
import { likeCloth } from './actions/ClothAction';
import Swipe from './components/Swipe';
import Images from './components/Image';
import Filter from './components/Testcomp';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class MatchScreen extends Component {

    static navigationOptions = props => {
      const { navigation } = props;
      const { navigate } = navigation;
      return {
        title: '推荐',
        tabBarIcon: ({ tintColor }) => {
            return <Entypo name="documents" size={30} color={tintColor} />;
          },
        headerTitle: 'Matching',
        headerStyle: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        },
        headerLeft:
         <Feather name="refresh-cw" size={25} style={{ marginLeft: 10, color: '#007aff' }} onPress={() => { console.log('aaaaa'); }} />,
        headerRight:
          <Feather name="filter" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { navigation.state.params.navigatePress(); }} />,
      };
    }
    state = {
        fontLoaded: false,
        src: [
          require('../assets/bg6.jpg'),
          require('../assets/tbg1.jpg'),
      require('../assets/bg5.jpg'),
    require('../assets/bg4.jpg')
  ],
  length: this.props.clothes.length,
  showModal: false,
  normalStyle: true,
  index: 0
    };
  componentWillMount() {
    this.props.navigation.setParams({
            navigatePress: this.showFilter
        });
  }
  async componentDidMount() {
    await Font.loadAsync({
        lcfont1: require('../assets/sample.otf'),
        lcfont2: require('../assets/sample2.ttf'),
        lcfont3: require('../assets/sample3.otf')
    });

    this.setState({ fontLoaded: true });
  }
  showFilter = () => {
    console.log('pressed!!!!');
    this.setState({ showModal: true });
  }

  onAccept = () => {
    this.setState({ showModal: false });
  }
        /* eslint-disable global-require */
  renderCard = (cloth) => {
    const { id, src, show } = cloth;
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
    var imgheight = this.state.normalStyle ? (SCREEN_HEIGHT-150)*0.82 : (SCREEN_HEIGHT-150)*0.41;
    var titleText = this.state.normalStyle ? '更多介绍' : '查看大图';
//    console.log(btTextStyles);
    return (
      <View style={{ marginLeft: 35, marginRight: 35, width: SCREEN_WIDTH-70, height: SCREEN_HEIGHT-150, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={this.state.src[id % (this.state.src.length)]} style={{ flex: 1, width: SCREEN_WIDTH-70, height: null, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} resizeMode='stretch'>
      <View style={{ flex: 1, width: (SCREEN_WIDTH-70)*0.7, height: imgheight, marginTop: (SCREEN_HEIGHT-150)*0.055, flexDirection: 'column' }}>
      {this.renderDescription(cloth)}
      <Image style={{ width: null, height: imgheight, borderRadius: 10 }} source={src} resizeMode={this.state.normalStyle ? null : 'contain'}></Image>
      <View style={styles.detailWrapper}>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
      {this.renderCode(cloth)}
      {this.renderPrice(cloth)}
      </View>
      <TouchableOpacity style={{ alignItems: 'center', flex: 1, width: null, backgroundColor: 'rgba(0,0,0,0.15)' }} onPress={() => { this.setState({ normalStyle: !this.state.normalStyle }); }}>
      <Text style={btTextStyles}>{titleText}</Text>
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
  renderDescription = (cloth) => {
    if (!this.state.normalStyle) {
      return (
        <View style={{ marginTop: 15, marginBottom: 15 }}>
        <Text style={styles.textStyle1}>{cloth.type}</Text>
        </View>
      );
    }
  }
  renderPrice = (cloth) => {
    if (!this.state.normalStyle) {
      return (
                <View style={{ marginTop: 15, marginBottom: 15 }}>
        <Text style={styles.textStyle2}>价格: ¥{cloth.price}</Text>
        </View>
      );
    }
  }
  renderCode = (cloth) => {
    if (!this.state.normalStyle) {
      return (
                <View style={{ marginTop: 5, marginBottom: 10 }}>
        <Text style={styles.textStyle2}>款号: {cloth.code}</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <ImageBackground source={require('../assets/bg2.jpg')} style={{ flex: 1, width: null, height: null, backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <View style={{ flex: 1, marginTop: 0 }}>
      <View style={{ alignItems: 'flex-end' }}>
      </View>
      <Swipe
      index={this.state.index}
      data={this.props.clothes.filter((t) => {
               return t.show && t.type.includes('裙');
           })}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards}
  //    cloth={this.renderCard.cloth}
      onSwipeRight={cloth => {
        this.props.likeCloth(cloth);
                this.setState({ index: this.state.index + 1 });
                console.log(this.state.index);
  //      var likedClothes = cloth;
  //      DeviceEventEmitter.emit('taobaoBind', { likedClothes });
       }}
      keyProp="id"
      />
      </View>
      </ImageBackground>
      <Filter
      visible={this.state.showModal}
      Accept={this.onAccept.bind(this)}
      />

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
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 3,
    marginTop: 0
  },
  normalStyle1: {

  },
  textStyle1: {
    fontFamily: 'lcfont1',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textStyle2: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
};

const mapStateToProps = state => {
//    console.log(state.libraries);
    return { clothes: state.clothes };
};

export default connect(mapStateToProps, { likeCloth })(MatchScreen);
