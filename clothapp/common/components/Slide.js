import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { TimerMixin } from 'react-timer-mixin';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const s1 = require('../../assets/spring/welcome/welcome.jpg');
const s2 = require('../../assets/spring/welcome/welcome2.jpg');
const s3 = require('../../assets/spring/welcome/welcome4.jpg');

class Slide extends Component {
  state={ source: [s1, s2, s3] };
  //设置固定值
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={{ marginTop: 15 }}>
        <Button
        title="Get Start!"
        raised
        buttonStyle={styles.buttonStyle}
        onPress={this.props.onComplete}
        />
        </View>
      );
    }
  }
  renderSlide() {
    return this.props.data.map((slide, index) => {
      return (
      <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
      <ImageBackground source={this.state.source[index]} style={{ flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)'}}>
      <Text style={styles.slideText}>{slide.text}</Text>
      {this.renderLastSlide(index)}
      </ImageBackground>
      </View>
    );
    });
  }

  render() {
    return (
      <ScrollView
      horizontal
      ref='scrollView'
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      enableEmptySections={false}
      style={{ flex: 1 }}
      >
      {this.renderSlide()}
      </ScrollView>
    );
  }


}

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288d1'
  }
};

export default Slide;
