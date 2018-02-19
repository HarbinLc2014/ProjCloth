import React, { Component } from 'react';
import { Text, ScrollView, View, Platform, ImageBackground, Dimensions, Image, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import { Ionicons, Foundation, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import * as actions from './actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class HistoryScreen extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      title: '我的收藏',
      tabBarIcon: ({tintColor}) => {
          return <Icon name="favorite-border" size={30} color={tintColor} />;
        },
      headerTitle: '最近浏览',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      headerRight:
        <MaterialIcons name="filter-list" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { console.log('aaaaa'); }} />,

    };
  }
  state = {
    test: [require('../assets/testbg.jpg'),
    require('../assets/testbg2.jpg'),
    require('../assets/testbg3.jpg')
  ],
      fontLoaded: false,
      src: [
        require('../assets/bg6.jpg'),
        require('../assets/tbg1.jpg'),
    require('../assets/bg5.jpg'),
  require('../assets/bg4.jpg')
]}
  componentWillMount() {
    this.setState({ viewedClothes: this.props.viewedClothes });
  //  DeviceEventEmitter.addListener(
  //    'taobaoBind', (events) => { this.setState({ ss: '' }); console.log('ttt:'); });
    this.createDataSource(this.props);
  //  console.log(this.props.sourceClothes);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ viewedClothes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(viewedClothes);
  }


  renderRow(cloth) {
    var style1 = cloth.show ? { height: 250, width: 150, marginTop: 0, marginLeft: 2, marginBottom: 20 }: { height: 200, width: 350, marginTop: 0,  marginBottom: 20 };
    var wid = cloth.show ? SCREEN_WIDTH*3/4 : SCREEN_WIDTH;
    var marg = cloth.show? SCREEN_WIDTH/8 : 0;
    var imgwidth = cloth.show? null: SCREEN_WIDTH;
    var style2 = cloth.show? { backgroundColor: 'rgba(0,0,0,0.7)', height: SCREEN_HEIGHT*3/4 }:{ backgroundColor: 'rgba(0,0,0,0.7)', height: SCREEN_HEIGHT*3/4 };
    this.createDataSource(this.props);
    return (
      <View style={{ width: wid, marginLeft: marg, marginRight: marg, marginTop: 30 }}>
      <Card title={cloth.type} containerStyle={style2} titleStyle={{ color: '#ffffff' }}>
      <View>
      <ImageBackground source={cloth.show ? this.state.src[cloth.id % (this.state.src.length)] : this.state.test[cloth.id % (this.state.test.length)]} style={{ flex: 1, width: null, height: 300, borderRadius: 5 }} resizeMode='stretch'>
      <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={cloth.src} resizeMode='contain' style={style1} />
      </View>
      </ImageBackground>
      </View>
      <View style={styles.detailWrapper}>
      <Text style={styles.italics} >款号: {cloth.code}</Text>
      <Text style={styles.italics} >价格: {cloth.price} RMB </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
      <Feather name="shopping-cart" size={28} style={{ marginRight: 30, color: '#FFFFFF' }} onPress={() => { this.props.navigation.navigate('order',{
                   orderCloth: { type: cloth.type, src: cloth.src, code: cloth.code, price: cloth.price }
                   }); }} />
      <MaterialIcons name="delete" size={30} style={{ marginLeft: 30, color: '#FFFFFF' }} onPress={() => { console.log('aaaaa'); }} />
      </View>
      </View>
      </Card>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          <ImageBackground source={require('../assets/spring/welcome/welcome4.jpg')} style={{ flex: 1, width: null, height: null, backgroundColor: 'rgba(0,0,0,0)'}}>
      <ListView
      initialListSize={2}
      horizontal
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow.bind(this)}
      />
              </ImageBackground>
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 5,
    marginTop: 315,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  italics: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF'
  }
};

const mapStateToProps = (state) => {
  return { likedClothes: state.likedClothes, sourceClothes: state.source, viewedClothes: state.viewedClothes };
};

export default connect(mapStateToProps, actions)(HistoryScreen);
