import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import _ from 'lodash';
import Slide from './components/Slide';

const SLIDE_DATA = [
  { text: 'Welcome to ClothApp', color: '#007aff' },
  { text: 'Order your clothes by tapping at the screen', color: '#009688' },
  { text: 'Start Now!', color: '#03a9f4' }
];

class WelcomeScreen extends Component {
  componentWillMount() {
  }
  onSlideComplete = () => {
    this.props.navigation.navigate('login');
  }
  render() {
    return <Slide data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}

export default WelcomeScreen;
