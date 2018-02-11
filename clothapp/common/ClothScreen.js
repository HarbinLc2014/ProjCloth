import React, { Component } from 'react';
import { Text, ScrollView, View, Platform, ImageBackground, Dimensions, ListView, DeviceEventEmitter } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import { Ionicons, Foundation, Entypo, MaterialIcons } from '@expo/vector-icons';
import * as actions from './actions';

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
        <MaterialIcons name="filter-list" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { console.log('aaaaa'); }} />,

    };
  }
  componentWillMount() {
    this.setState({ likedClothes: this.props.likedClothes });
  //  DeviceEventEmitter.addListener(
  //    'taobaoBind', (events) => { this.setState({ ss: '' }); console.log('ttt:'); });
    this.createDataSource(this.props);
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


  renderRow(cloth) {
    this.createDataSource(this.props);
    return (
      <View style={{ width: SCREEN_WIDTH*3/4, marginLeft:SCREEN_WIDTH/8, marginRight: SCREEN_WIDTH/8, marginTop: 30 }}>
      <Card title={cloth.title}>
      <View style={{ height: 300 }}>
      <View style={styles.detailWrapper}>
      <Text style={styles.italics} >{cloth.description}</Text>
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
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
};

const mapStateToProps = (state) => {
  return { likedClothes: state.likedClothes };
};

export default connect(mapStateToProps, actions)(ClothScreen);
