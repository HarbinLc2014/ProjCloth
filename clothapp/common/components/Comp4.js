import React, { Component } from 'react';
import _ from 'lodash';
import { Text, View, Platform, AppRegistry, TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
    AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { TimerMixin } from 'react-timer-mixin';
import * as actions from '../actions';
import { viewCloth } from '../actions/ClothAction';
import Images from './Image';

const ImageData = require('../ImageData.json');
const SCREEN_WIDTH = Dimensions.get('window').width;

class Comp4 extends Component {
    /* eslint-disable global-require */
  state = { currentPage: 0 };
  onAnimationEnd(e){
  // 计算水平方向的偏移量
  var offSetX = e.nativeEvent.contentOffset.x;

  //当前的页数
  var currentPage = Math.floor(offSetX / (SCREEN_WIDTH-40) );
  //更新指示器，绘制ui
  this.setState({
      currentPage: currentPage
  });
  //AlertIOS.alert(" currentPage=  " +this.state.currentPage);
}
  renderAllImage() {
    return _.uniqBy(this.props.clothes.filter((t) => {
             return t.show && t.type.includes(this.props.count);
         }), 'src').map(cloth => {
           return(
          <TouchableOpacity key={cloth.id} onPress={() => { this.props.viewCloth(cloth); this.props.pressComp4(cloth); }}>
            <Image key={cloth.id} source={cloth.src} resizeMode='stretch' style={{ flex: 1, width: SCREEN_WIDTH/2.5, height: (SCREEN_WIDTH/1.5)-20, borderWidth: 8, borderRadius: 10, marginRight: 8, marginLeft: 8, marginTop: 10, marginBottom: 10, borderColor: 'rgba(0,0,0,0.5)' }} />
          </TouchableOpacity>
        );
      });
    }
      renderPageCircle() {
            var indicatorArr = [];
            var imgsArr = ImageData.data;
            var style;
            for(var i=0 ; i<imgsArr.length;i++){
              //判断当前页选择样式
              style = (i==this.state.currentPage) ? { color: 'orange', textAlign: 'center' } : { color: '#ffffff', textAlign: 'center' };
              indicatorArr.push(
                  <Text key={i} style={[{ fontSize: 25, color: 'white', textAlign: 'center' }, style]}>&bull;</Text>
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
                style={{ width: SCREEN_WIDTH-20, height: SCREEN_WIDTH / 1.5, backgroundColor: '#ffffff' }}
            >
               {this.renderAllImage()}
              <Text>hello</Text>
            </ScrollView>
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
    top: 205,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  });const mapStateToProps = (state) => {
    return { clothes: state.clothes };
  };
export default connect(mapStateToProps, actions)(Comp4);
