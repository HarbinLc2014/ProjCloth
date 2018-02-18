import React, { Component } from 'react';
import { View, ScrollView, Text, Platform, StyleSheet, Dimensions, KeyboardAvoidingView, Alert } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { Font } from 'expo';
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
  state = { fontLoaded: false, name: '' };
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
        <CardSection style={{ flexDirection: 'column' }}>
        <Text>款号: 80-AD-86019</Text>
        <Text style={{ textAlign: 'center' }}>价格: ¥299</Text>
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
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <FormLabel containerStyle={{ marginBottom: 8, width: null, height: 20 }}>手机号(我们会在几天内给您发送短信确认订单)</FormLabel>
        <FormInput
        keyboardType={'numeric'}
        containerStyle={{ width: null, height: 30, marginBottom: 20 }}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <FormLabel containerStyle={{ marginBottom: 8, width: null, height: 20 }}>备注(颜色、型号，比如:颜色: 蓝色, 型号: XL)</FormLabel>
        <FormInput
        containerStyle={{ width: null, height: 30, marginBottom: 20 }}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        </CardSection>
          <View style={{ paddingTop: 10, paddingBottom: 0 }}>
          <Button title='确认下单' color='#000000' fontSize={13} fontWeight='bold' backgroundColor='#d1d1d1' style={{ borderRadius: 5, borderWidth: 2, width: SCREEN_WIDTH-150, borderColor: '#000000' }}
          onPress={() => Alert.alert(
            '订单添加成功!',
            '您可以在订单历史中查看以前的订单，一旦我们确认商品是否有库存后,会第一时间通过短信和在订单历史中通知您',
            [
              { text: 'OK', onPress: () => this.props.navigation.navigate('favor') },
            ]
          )}
          />
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
export default Order;
