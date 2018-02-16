import React, { Component } from 'react';
import { Text, ScrollView, View, Platform, ImageBackground, Dimensions, Image, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import { Ionicons, Foundation, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import * as actions from './actions';
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
      headerTitle: 'Matching',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      headerRight:
        <MaterialIcons name="filter-list" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { navigation.state.params.navigatePress(); }} />,

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
  showModal: false
}
  componentWillMount() {
    this.setState({ likedClothes: this.props.likedClothes });
    this.props.navigation.setParams({
            navigatePress: this.showOrder
        });
  //  DeviceEventEmitter.addListener(
  //    'taobaoBind', (events) => { this.setState({ ss: '' }); console.log('ttt:'); });
    this.createDataSource(this.props);
  //  console.log(this.props.sourceClothes);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ likedClothes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(likedClothes);
  }
  onAccept = () => {
    this.setState({ showModal: false });
  }
  showOrder = () => {
    this.setState({ showModal: true });
  }
  renderRow(cloth) {
    this.createDataSource(this.props);
    return (
      <View style={{ width: SCREEN_WIDTH*3/4, marginLeft:SCREEN_WIDTH/8, marginRight: SCREEN_WIDTH/8, marginTop: 30 }}>
      <Card title={cloth.type} containerStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', height: SCREEN_HEIGHT*3/4 }} titleStyle={{ color: '#ffffff' }}>
      <View>
      <ImageBackground source={this.state.src[cloth.id % (this.state.src.length)]} style={{ flex: 1, width: null, height: 300, borderRadius: 5 }} resizeMode='stretch'>
      <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={cloth.src} style={{ height: 250, width: 150, marginTop: 0, marginLeft: 2, marginBottom: 20 }} />
      </View>
      </ImageBackground>
      </View>
      <View style={styles.detailWrapper}>
      <Text style={styles.italics} >款号: {cloth.code}</Text>
      <Text style={styles.italics} >价格: ¥{cloth.price}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
      <Feather name="shopping-cart" size={28} style={{ marginRight: 30, color: '#FFFFFF' }} onPress={() => { this.props.navigation.navigate('order'); }} />
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
    fontSize: 20,
    color: '#FFFFFF'
  }
};

const mapStateToProps = (state) => {
  return { likedClothes: state.likedClothes, sourceClothes: state.source };
};

export default connect(mapStateToProps, actions)(ClothScreen);
