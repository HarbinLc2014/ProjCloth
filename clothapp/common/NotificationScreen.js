import React, { Component } from 'react';
import { View, Text, Platform, ListView } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { fetchNotification } from './actions/NotificationActions';

class NotificationScreen extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      title: '主页',
      tabBarIcon: ({ tintColor }) => {
          return <Foundation name="social-myspace" size={30} color={tintColor} />;
        },
      headerTitle: '我的通知',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
//      headerRight:
//        <MaterialIcons name="filter-list" size={25} style={{ marginRight: 10, color: '#007aff' }} onPress={() => { navigation.state.params.navigatePress(); }} />,

    };
  }
  state= { fontLoaded: false };
  componentWillMount() {
    this.props.fetchNotification(this.props.user);
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  async componentDidMount() {
      await Font.loadAsync({
      //    'gloria-halleujah': require('../assets/sample.otf'),
          lcfont1: require('../assets/sample.otf'),
          lcfont2: require('../assets/sample2.ttf'),
          lcfont3: require('../assets/sample3.otf')
      });

      this.setState({ fontLoaded: true });
  }
  createDataSource({ notifications }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(notifications);
  }
  renderRow(notify) {
    const btTextStyles = [];
    btTextStyles[0] = styles.btText;
    if (this.state.fontLoaded){
        btTextStyles[1] = styles.btText_with_font;
    }
    this.createDataSource(this.props);
    if (notify.message!=='')
    {
      return(
         <View style={{ marginBottom: 5, backgroundColor: '#ffffff', marginTop: 20 }}>
          <View style={{ backgroundColor: '#ffffff', paddingTop: 5, paddingBottom: 5, paddingLeft: 10 }}>
          <Text>{notify.date}</Text>
          </View>
              <View style={{ backgroundColor: '#ffffff', paddingTop: 5, paddingBottom: 5, paddingLeft: 10,  }}>
              <Text style={btTextStyles}>您的订单货物已经到达！</Text>
              </View>
          </View>
        );
    }
    return null;
  }
  render() {
    return (
      <ListView
      initialListSize={2}
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow.bind(this)}
      />
    );
  }
}
const styles = {
  btText: {
    color: '#000000'
  },
  btText_with_font: {
    fontFamily: 'lcfont1',
    color: '#000000'
  }
};
const mapStateToProps = (state) => {
  return { notifications: state.notify, user: state.auth.user };
};

export default connect(mapStateToProps, { fetchNotification })(NotificationScreen);
