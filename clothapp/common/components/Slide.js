import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';
import { TimerMixin } from 'react-timer-mixin';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const s1 = require('../../assets/spring/welcome/welcome.jpg');
const s2 = require('../../assets/spring/welcome/welcome2.jpg');
const s3 = require('../../assets/spring/welcome/welcome4.jpg');

class Slide extends Component {

  state={ source: [s1, s2, s3], fontLoaded: false };
  componentWillMount() {
  }
  async componentDidMount() {
      await Font.loadAsync({
          lcfont0: require('../../assets/GloriaHallelujah.ttf'),
          lcfont1: require('../../assets/sample.otf')
      });

      this.setState({ fontLoaded: true });
  }
  //设置固定值
  renderLastSlide(index) {
    let btTextStyles = [];
    let btTextStyles2 = [];
    btTextStyles[0] = {};
    btTextStyles2[0] = {};
    if (this.state.fontLoaded){
        btTextStyles[1] = { fontFamily: 'lcfont1' };
        btTextStyles2[1] = { fontFamily: 'lcfont0' };
    }
    if (index === this.props.data.length - 1) {
      return (
        <View style={{ marginTop: 50 }}>
        <Button
        title="进入"
        raised
        titleStyle={btTextStyles}
        buttonStyle={styles.buttonStyle}
        onPress={this.props.onComplete}
        />
        </View>
      );
    }
  }
  renderSlide() {
    let btTextStyles = [];
    let btTextStyles2 = [];
    btTextStyles[0] = {};
    btTextStyles2[0] = {};
    if (this.state.fontLoaded){
        btTextStyles[1] = { fontFamily: 'lcfont1' };
        btTextStyles2[1] = { fontFamily: 'lcfont0' };
    }
    return this.props.data.map((slide, index) => {
      return (
      <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
      <ImageBackground source={this.state.source[index]} style={{ flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0)'}}>
      <Text style={[styles.slideText, { color: slide.color }, btTextStyles]}>{slide.text}</Text>
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
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: 'rgba(123,222,111,0.7)',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 200
  }
};

export default Slide;
