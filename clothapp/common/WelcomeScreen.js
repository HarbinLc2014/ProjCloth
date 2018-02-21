import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import _ from 'lodash';
import { Font } from 'expo';
import Slide from './components/Slide';

const SLIDE_DATA = [
  { text: '欢迎来到靓衣汇!', color: '#007aff' },
  { text: '潮流服装 一键下单', color: '#009688' },
  { text: '各种服装，尽在靓衣汇！', color: '#03a9f4' }
];

class WelcomeScreen extends Component {

  onSlideComplete = () => {
    this.props.navigation.navigate('login');
  }
  render() {
    return <Slide data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}

export default WelcomeScreen;
