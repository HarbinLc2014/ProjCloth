import React, { Component } from 'react';
import { View, Text, Platform, ListView, Dimensions, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons, Ionicons, Foundation, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';
import * as actions from './actions';
import { Card, Button } from 'react-native-elements';
import OrderDetail from './components/OrderDetail';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class OrderScreen extends Component {
static navigationOptions = props => {
  const { navigation } = props;
  const { navigate } = navigation;
  return {
    headerTitle: '订单历史',
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  };
}
state = { showDetail: false, ord: { name: '', phone: '', address: '' } };
componentWillMount() {
  this.setState({ orders: this.props.orders });
  this.createDataSource(this.props);
}
componentWillReceiveProps(nextProps) {
  this.createDataSource(nextProps);
}
onAccept() {
  this.setState({ showDetail: false });
}
createDataSource({ orders }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });
  this.dataSource = ds.cloneWithRows(orders);
}
renderRow(order) {
  this.createDataSource(this.props);
  return (
    <View style={{ marginBottom: 10, backgroundColor: '#ffffff', paddingBottom: 5 }}>

    <View style={{ backgroundColor: '#ffffff', paddingTop: 10, paddingBottom: 10, paddingLeft: 10 }}>
    <Text>{order.date}</Text>
    </View>

    <View style={{ backgroundColor: '#eeeee0', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, flexDirection: 'row' }}>
    <Image source={order.cloth.src} style={{ width: 100, height: 100, marginRight: 5, borderRadius: 5, borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)' }} resizeMode='contain' />
    <View style={{ flexDirection: 'column', paddingLeft: 10, justifyContent: 'space-around', alignItems: 'flex-start' }}>
    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{order.cloth.type}    {order.cloth.code}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontSize: 13, fontWeight: 'bold', marginRight: 20 }}>价格 ¥{order.cloth.price}</Text>
    </View>
    <View style={{ flexDirection: 'row' }}>
    <Text style={{ fontSize: 13, fontWeight: 'bold', width: 100 }}>状态: {order.state}</Text>
    <View style={{ alignItems: 'flex-end', width: SCREEN_WIDTH-200, justifyContent: 'flex-start', flexDirection: 'row' }}>
    <MaterialCommunityIcons name="file-document" size={25} style={{ marginRight: 40, color: '#969696' }} onPress={() => this.setState({ showDetail: !this.state.showDetail, ord: { date: order.date, state: order.state, name: order.name, phone: order.phone, address: order.address, type: order.cloth.type, code: order.cloth.code, price: order.cloth.price, ps: order.ps } })} />
    <MaterialIcons name="delete" size={30} style={{ marginRight: 5, color: '#969696' }} />
    </View>
    </View>
    </View>
    </View>

    </View>
  );
}
  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: 15 }}>
      <ListView
      initialListSize={2}
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow.bind(this)}
      />
      <OrderDetail
        visible={this.state.showDetail}
        order={this.state.ord}
        Accept={this.onAccept.bind(this)}
      />
      </ScrollView>
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
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(OrderScreen);
