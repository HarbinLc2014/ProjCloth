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
        headerTitle: '推荐',
        headerStyle: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        },
  //      headerLeft:
  //       <Feather name="refresh-cw" size={25} style={{ marginLeft: 10, color: '#007aff' }} onPress={() => { console.log('aaaaa'); }} />,
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
  index: 0,
  filter1: '普通上衣',
  filter2: '',
  filter3: 'aasdasd'
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

  onAccept = (filter) => {
//    console.log(filter);
    this.setState({ filter2: '' });
    this.setState({ filter1: filter.make });
    this.setState({ filter3: 'asdasdads' });
    if (filter.make === '裤子') {
      this.setState({ filter1: '裤' });
    }
    if (filter.make === '裙子') {
      this.setState({ filter1: '裙' });
    }
    if (filter.make === '风衣外衣') {
    //  console.log('asdasdasd');
      this.setState({ filter1: '外套' });
      this.setState({ filter3: '风衣' });
    }
    if (filter.make === '雪纺针织') {
      this.setState({ filter1: '雪纺' });
      this.setState({ filter3: '针织' });
    }
    if (filter.make === '其他') {
      this.setState({ filter1: '夹克' });
      this.setState({ filter3: '开衫' });
    }
    if (filter.name !== '默认') {
      this.setState({ filter2: filter.name });
    }
    else {
      this.setState({ filter2: '' });
    }
    this.setState({ showModal: false });
  }
  showFilter = () => {
//    console.log('pressed!!!!');
    this.setState({ showModal: true });
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
        <Card title='暂无更多推荐了'>
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
               return t.show && (t.type.includes(this.state.filter1) || t.type.includes(this.state.filter3)) && t.type.includes(this.state.filter2);
           })}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards}
      onSwipeRight={cloth => {
        const nowTime = new Date();
           const time = nowTime.getTime();
        this.props.likeCloth({ favorite: { uid: time, type: cloth.type, code: cloth.code, price: cloth.price, src: cloth.src, id: cloth.id }, user: this.props.user });
                this.setState({ index: this.state.index + 1 });
              }
            }
      onSwipeLeft={() =>
        this.setState({ index: this.state.index + 1 })
      }
      keyProp="id"
      />
      </View>
      </ImageBackground>
      <Filter
      visible={this.state.showModal}
      Accept={this.onAccept.bind(this)}
      AcceptWithNoAction={() => this.setState({ showModal: false })}
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
    color: '#ffffff',
    fontWeight: 'bold'
  },
  textStyle2: {
    textAlign: 'center',
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold'
  }
};

const mapStateToProps = state => {
    return { clothes: state.clothes, user: state.auth.user };
};

export default connect(mapStateToProps, { likeCloth })(MatchScreen);
