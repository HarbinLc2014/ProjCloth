import React, { Component } from 'react';
import {
        Text, View, Modal, PickerIOS,
        TouchableWithoutFeedback,
      } from 'react-native';
import { Card, Button } from 'react-native-elements';
import CardSection from './CardSection2';

const CAR_MAKES_AND_MODELS = {
  上衣: {
    name: '上衣',
    models: ['默认'],
  },
  裤子: {
    name: '裤子',
    models: ['默认', '普通', '牛仔裤'],
  },
  裙子: {
    name: '裙子',
    models: ['默认', '牛仔裙', '连衣裙', '单裙'],
  },
  两件套: {
    name: '两件套',
    models: ['默认'],
  },
  套装: {
    name: '套装',
    models: ['默认'],
  },
  风衣外衣: {
    name: '外衣 & 风衣',
    models: ['默认', '外衣', '风衣'],
  },
  背心: {
    name: '背心',
    models: ['默认'],
  },
  雪纺针织: {
    name: '雪纺 & 针织',
    models: ['默认', '针织品', '雪纺品'],
  },
  其他: {
    name: '其他',
    models: ['默认'],
  },
};
class Filter extends Component {
  state = {
     carMake: '上衣',
      modelIndex: 0,
      filterValue: '裤子' };

  render() {
    var PickerItemIOS = PickerIOS.Item;
    var make = CAR_MAKES_AND_MODELS[this.state.carMake];
    var selectionString = make.name + ' ' + make.models[this.state.modelIndex];
    return (
      <Modal
          visible={this.props.visible}
          transparent
          animationType="slide"
          onRequestClose={() => {
          }}
      >
          <TouchableWithoutFeedback onPress={this.props.Accept}>
              <View style={styles.containerStyle}>
                  <TouchableWithoutFeedback>
                    <Card title="过滤条件" containerStyle={{ backgroundColor: 'rgba(0,0,0,0.4)' }} titleStyle={{ fontSize: 23, fontWeight: 'bold', color: '#FFFFFF' }} >
                    <CardSection style={{ backgroundColor: 'rgba(0,0,0,0)', flexDirection: 'column', marginBottom: 5 }}>
                    <View style={{ marginTop: 15, marginBottom: 15 }}>
                            <Text style={{ fontSize: 18, textAlign: 'center', color: '#ffffff' }}>请选择{make.name}中的一个种类:</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <PickerIOS
                    itemStyle={{ fontSize: 20, color: '#ffffff', textAlign: 'center', fontWeight: 'bold', width: 150, height: 100 }}
          selectedValue={this.state.carMake}
          onValueChange={(carMake) => this.setState({ carMake, modelIndex: 0 })}
                    >
          {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
            <PickerItemIOS
              key={carMake}
              value={carMake}
              label={CAR_MAKES_AND_MODELS[carMake].name}
            />
          ))}
        </PickerIOS>
        <PickerIOS
        itemStyle={{ fontSize: 20, color: '#ffffff', textAlign: 'center', fontWeight: 'bold', width: 150, height: 100, marginRight: 20 }}
          selectedValue={this.state.modelIndex}
          key={this.state.carMake}
          onValueChange={(modelIndex) => this.setState({ modelIndex })}
        >
          {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
            <PickerItemIOS
              key={this.state.carMake + '_' + modelIndex}
              value={modelIndex}
              label={modelName}
            />
          ))}
        </PickerIOS>
        </View>
        <View style={{ backgroundColor: 'rgba(0,0,0,0)', flexDirection: 'column', marginBottom: 20, justifyContent: 'center', marginTop: 20 }}>
        <Button title='确认' color='#000000' fontSize={18} fontWeight='bold' backgroundColor='#d1d1d1' onPress={this.props.Accept} />
        </View>
                      </CardSection>
                    </Card>
                  </TouchableWithoutFeedback>
              </View>
          </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10,
    textAlign: 'center'
  },
  containerStyle: {
      backgroundColor: 'rgba(0,0,0,0.65)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
  },
    cardSectionStyle2: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
};
export default Filter;
