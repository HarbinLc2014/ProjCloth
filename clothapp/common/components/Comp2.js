import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, Platform, AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
    AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { viewCloth } from '../actions/ClothAction';
import * as actions from '../actions';

import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { TimerMixin } from 'react-timer-mixin';
import Images from './Image';

const ImageData = require('../ImageData.json');
const SCREEN_WIDTH = Dimensions.get('window').width;

class Comp2 extends Component {
    /* eslint-disable global-require */
  state = { currentPage: 0 };
  onAnimationEnd(e){
  // 计算水平方向的偏移量
  var offSetX = e.nativeEvent.contentOffset.x;

  //当前的页数
  var currentPage = Math.floor(offSetX / (SCREEN_WIDTH) );
  //更新指示器，绘制ui
  this.setState({
      currentPage:currentPage
  });
  //AlertIOS.alert(" currentPage=  " +this.state.currentPage);
}
  renderAllImage() {
          return _.uniqBy(this.props.clothes.filter((t) => {
                   return !t.show;
               }), 'src').map(cloth => {
                 return (
                   <TouchableOpacity key={cloth.id} onPress={() => { this.props.viewCloth(cloth); this.props.pressComp2(cloth); }}>
                   <Image key={cloth.id} source={cloth.src} resizeMode='stretch' style={{ flex: 1, width: SCREEN_WIDTH, height: (SCREEN_WIDTH*2)/3 }} />
                   </TouchableOpacity>
                 );
               });
      }
      renderPageCircle() {
            var indicatorArr = [];
            var imgsArr = ImageData.data;
            var style;
            for(var i = 0; i < _.uniqBy(this.props.clothes.filter((t) => {
                     return !t.show;
                 }), 'src').length; i++){
              //判断当前页选择样式
              style = (i==this.state.currentPage) ? { color: 'orange', textAlign: 'center' } : { color: '#ffffff', textAlign: 'center' };
              indicatorArr.push(
                  <Text key={i} style={[{fontSize:25,color:'white',textAlign:'center'},style]}>&bull;</Text>
              );
            }
            return indicatorArr;
          }
  render() {
        return (
          <View style={styles.container}>
            <ScrollView
                onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                ref='scrollView'
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={{ width: SCREEN_WIDTH, height: (SCREEN_WIDTH * 2) / 3 }}
            >
               {this.renderAllImage()}
            </ScrollView>
            <View style={styles.pageViewStyle}>
            {this.renderPageCircle()}
            </View>
          </View>
        );
      }

  }

  const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pageViewStyle: {
    width: SCREEN_WIDTH,
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: ((SCREEN_WIDTH * 2) / 3) - 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  });
  const mapStateToProps = (state) => {
    return { clothes: state.clothes };
  };
export default connect(mapStateToProps, actions)(Comp2);
