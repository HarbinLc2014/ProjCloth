import React, { Component } from 'react';
import { View, ScrollView, Text, Platform, StyleSheet, Dimensions, KeyboardAvoidingView, Alert, Image } from 'react-native';
import { Card, FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { addOrder } from './actions/OrderActions';
import CardSection from './components/CardSection2';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
class Order extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      headerTitle: '我的订单',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    };
  }
  state = { fontLoaded: false, name: '', phone: '', address: '', ps: '', message: '' };
  async componentDidMount() {
      await Font.loadAsync({
      //    'gloria-halleujah': require('../assets/sample.otf'),
          lcfont1: require('../assets/sample.otf'),
          lcfont2: require('../assets/sample2.ttf'),
          lcfont3: require('../assets/sample3.otf')
      });

      this.setState({ fontLoaded: true });
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
    return (
      <ScrollView>
        <Card title="订单信息" titleStyle={btTextStyles}>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 0 }}>
        <CardSection style={{ flexDirection: 'row' }}>
        <Image source={this.props.navigation.state.params.orderCloth.src} style={{ width: 75, height: 75, borderRadius: 5, borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)' }} resizeMode='contain'/>
        <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: 40 }}>
        <Text style={{ textAlign: 'center' }}>{this.props.navigation.state.params.orderCloth.type}</Text>
        <Text>款号: {this.props.navigation.state.params.orderCloth.code}</Text>
        <Text style={{ textAlign: 'center' }}>价格: ¥{this.props.navigation.state.params.orderCloth.price}</Text>
        </View>
        </CardSection>
        <CardSection style={{ flexDirection: 'column', marginBottom: 0, width: SCREEN_WIDTH-50, paddingTop: 20 }}>
        <FormLabel containerStyle={{ marginBottom: 8, width: null, height: 20 }}>收货人姓名</FormLabel>
        <FormInput
        containerStyle={{ width: null, height: 30, marginBottom: 20 }}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <FormLabel containerStyle={{ marginBottom: 8, width: null, height: 20 }}>收货地址</FormLabel>
        <FormInput
        containerStyle={{ width: null, height: 30, marginBottom: 20 }}
          value={this.state.address}
          onChangeText={address => this.setState({ address })}
        />
        <FormLabel containerStyle={{ marginBottom: 8, width: null, height: 20 }}>手机号(用于接受短信确认订单)</FormLabel>
        <FormInput
        keyboardType={'numeric'}
        containerStyle={{ width: null, height: 30, marginBottom: 20 }}
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel containerStyle={{ marginBottom: 8, width: null, height: 20 }}>备注(颜色尺码，如:颜色: 蓝色, 尺码: L)</FormLabel>
        <FormInput
        containerStyle={{ width: null, height: 30, marginBottom: 20 }}
          value={this.state.ps}
          onChangeText={ps => this.setState({ ps })}
        />
        </CardSection>
          <View style={{ paddingTop: 10, paddingBottom: 0 }}>
          <Button title='确认下单' color='#000000' fontSize={13} fontWeight='bold' backgroundColor='#d1d1d1' style={{ borderRadius: 5, borderWidth: 2, width: SCREEN_WIDTH-150, borderColor: '#000000' }}
          onPress={() =>
{           if(this.state.phone!== '' && this.state.name!== '' && this.state.address!==''){
           const nowTime = new Date();
           var time = nowTime.getTime()/1000;
           var date = new Date(time * 1000);//.转换成毫秒
           var timer = date.getFullYear() + '-' + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
           console.log(timer);
           console.log(this.state);
          this.props.addOrder({ name: this.state.name, date: timer, cloth: this.props.navigation.state.params.orderCloth, phone: this.state.phone, address: this.state.address, ps: this.state.ps, state: '审核中' });
            Alert.alert(
            '订单添加成功!',
            '您可以在订单历史中查看以前的订单，一旦我们确认商品是否有库存后,会第一时间通过短信和在订单历史中通知您',
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('favor') },
            ]
          );
}
else {
      this.setState({ message: '收货人、地址和手机号不能为空' });
    } 
}
        }
          />
          <FormValidationMessage labelStyle={{ fontSize: 10 }} containerStyle={{ marginTop: 3.5 }}>{this.state.message}</FormValidationMessage>
          </View>
        </View>
        </Card>
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
  });

  const mapStateToProps = (state) => {
    return { orders: state.orders };
  };

  export default connect(mapStateToProps, { addOrder })(Order);
