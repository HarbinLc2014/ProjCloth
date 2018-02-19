import React, { Component } from 'react';
import {Text, View, Modal, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, ImageBackground} from 'react-native';
import { Card, Button } from 'react-native-elements';
import CardSection from './CardSection2';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class OrderDetail extends Component {
    state = {friendShow: false, src: null };

render() {
  const {
      containerStyle, textStyle, cardSectionStyle, textStyle3, cardSectionStyle3, textStyle4,
      imageStyle, cardSectionStyle2, textStyle2, imageStyle2, imageStyle3, imageStyle4
  } = styles;
    return (
        <Modal
            visible={this.props.visible}
            transparent
            animationType="slide"
            onRequestClose={() => {
            }}

        >
            <TouchableWithoutFeedback onPress={this.props.Accept}>
                <View style={containerStyle}>
                <Card title='订单详情'>
                    <TouchableWithoutFeedback>
                        <View>
                        <View style={{ width: null, alignItems: 'center' }}>
                        <Text style={textStyle2}>{this.props.order.type}  {this.props.order.code}</Text>
                        </View>
                            <View style={cardSectionStyle2}>
                                <View style={{ marginBottom: 30, flexDirection: 'column', paddingLeft: 20 }}>
                                <Text style={textStyle2}>价格: ¥{this.props.order.price}</Text>
                                <Text style={textStyle2}>收货人: {this.props.order.name}</Text>
                                <Text style={textStyle2}>手机号: {this.props.order.phone}</Text>
                                <Text style={textStyle2}>收货地址: {this.props.order.address}</Text>
                                <Text style={textStyle2}>备注: {this.props.order.ps}</Text>
                                <Text style={textStyle2}>下单日期: {this.props.order.date}</Text>
                                <Text style={textStyle2}>交易状态: {this.props.order.state}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                  </Card>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
  }
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    cardSectionStyle2: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    cardSectionStyle3: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
    },
    textStyle2: {
        lineHeight: 40,
        fontSize: 14,
        color: '#000000'
    },
    textStyle3: {
        lineHeight: 40,
        fontSize: 15,
        marginLeft: 10
    },
    textStyle4: {
      lineHeight: 40,
      fontSize: 25,
      textAlign: 'center',
      color: '#ffffff',
      fontWeight: 'bold'
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.65)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    imageStyle: {
        height: SCREEN_WIDTH-20,
        width: SCREEN_WIDTH-20,
        borderWidth: 0,
        borderRadius: 5
    },
    imageStyle2: {
        height: 20,
        width: 20,
        marginRight: 20
    },
    imageStyle3: {
        height: 15,
        width: 15
    },
    imageStyle4: {
        height: 15,
        width: 15,
        marginRight: 25
    },
};

export default OrderDetail;
