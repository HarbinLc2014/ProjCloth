import React, { Component } from 'react';
import { Text, ScrollView, View, Platform, ImageBackground, Dimensions, Image, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
import { Ionicons, Foundation, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import * as actions from './actions';
import { fetchFavorite, delFavorite } from './actions/ClothAction';
import Filter from './components/Order';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ClothScreen extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      title: '我的收藏',
      tabBarIcon: ({tintColor}) => {
          return <Icon name="favorite-border" size={30} color={tintColor} />;
        },
      headerTitle: '我的收藏',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
//      headerRight:
//        <MaterialIcons name="filter-list" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { navigation.state.params.navigatePress(); }} />,
      headerLeft:
          <Text />,
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
status: 0,
  showModal: false
}
  componentWillMount() {
  //  var a = DeviceInfo.getDeviceName();
  //  console.log(a);
    this.props.navigation.setParams({
            navigatePress: this.showOrder
        });
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user!==null && !this.state.status) {
      this.props.fetchFavorite(nextProps.user);
      this.setState({ status: 1 });
    }
    if (nextProps.user && this.props.user && nextProps.user.email !== this.props.user.email ) {
      this.props.fetchFavorite(nextProps.user);
    }
    this.createDataSource(nextProps);
  }
  componentWillUnmount() {
  //  console.log('UnAmount');
    this.props.fetchFavorite(this.props.user);
  }
  onAccept = () => {
    this.setState({ showModal: false });
  }
  createDataSource({ likedClothes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(likedClothes);
  }
  showOrder = () => {
    this.setState({ showModal: true });
  }
  renderRow(cloth) {
    if (cloth.code !==''){
    return (
      <View style={{ width: SCREEN_WIDTH*3/4, marginLeft:SCREEN_WIDTH/8, marginRight: SCREEN_WIDTH/8, marginTop: 0 }}>
      <Card title={cloth.type} containerStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', height: null }} titleStyle={{ color: '#ffffff' }}>
      <View>
      <ImageBackground source={this.state.src[cloth.id % (this.state.src.length)]} style={{ flex: 1, width: null, height: 300, borderRadius: 5 }} resizeMode='stretch'>
      <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={cloth.src} style={{ height: 250, width: 150, marginTop: 0, marginLeft: 2, marginBottom: 20 }} />
      </View>
      </ImageBackground>
      </View>
      <View style={{ flexDirection: 'row' }}>
      <View style={styles.detailWrapper}>
      <Text style={styles.italics} >款号: {cloth.code}</Text>
      <Text style={styles.italics} >价格: ¥{cloth.price}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 310 }}>
      <Feather name="shopping-cart" size={20} style={{ marginLeft: 10, marginRight: 10, color: '#FFFFFF' }} onPress={() => { this.props.navigation.navigate('order', {
                   orderCloth: { type: cloth.type, src: cloth.src, code: cloth.code, price: cloth.price }
                   }); }} />
      <MaterialIcons name="delete" size={22} style={{ marginLeft: 10, color: '#FFFFFF' }} onPress={() => { this.props.delFavorite({ favorite: { id: cloth.id }, user: this.props.user }); }} />
      </View>
      </View>
      </Card>
      </View>
    );
  }
  return null;
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
              <Filter
              visible={this.state.showModal}
              Accept={this.onAccept.bind(this)}
              />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 5,
    marginTop: 315,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  italics: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFFFFF'
  }
};

const mapStateToProps = (state) => {
  return { likedClothes: state.likedClothes, sourceClothes: state.source, user: state.auth.user };
};

export default connect(mapStateToProps, { fetchFavorite, delFavorite })(ClothScreen);
