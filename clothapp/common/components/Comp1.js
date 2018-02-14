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

class Comp1 extends Component {
  state = { currentPage: 0 };
  renderAllImage() {
    return _.uniqBy(this.props.clothes.filter((t) => {
             return t.show && t.type.includes(this.props.count);
         }), 'src').map(cloth => {
           return(
             <TouchableOpacity key={cloth.id} onPress={() => { this.props.viewCloth(cloth); this.props.pressComp1(cloth); }}>
             <Image key={cloth.id} source={cloth.src} resizeMode='stretch' style={{ flex: 1, width: SCREEN_WIDTH/2-8, height: 290 }} />
             </TouchableOpacity>
           );
         });
      }
      onAnimationEnd(e){
      // 计算水平方向的偏移量
      var offSetX = e.nativeEvent.contentOffset.x;

      //当前的页数
      var currentPage = Math.floor(offSetX / ((SCREEN_WIDTH/2)-8));
      //更新指示器，绘制ui
      this.setState({
          currentPage:currentPage
      });
      //AlertIOS.alert(" currentPage=  " +this.state.currentPage);
    }
      renderPageCircle() {
            var indicatorArr = [];
            var imgsArr = ImageData.data;
            var style;
            for(var i=0 ; i<8;i++){
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
                ref='scrollView'
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={{ width: (SCREEN_WIDTH/2)-8, height: 290 }}
                onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                // 开始拖拽
      //          onScrollBeginDrag={this.onScrollBeginDrag}
                // 停止拖拽
      //          onScrollEndDrag={this.onScrollEndDrag}
            >
              {this.renderAllImage()}
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
    width: (SCREEN_WIDTH/2)-10,
    height: 25,
    //marginTop: -100,
    //marginTop: 550,
//    marginLeft: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 275,
  //  bottom: 0,
    //设置主轴的方向
    flexDirection: 'row',
    //侧轴方向对齐
    alignItems: 'center'
  }

  });
  const mapStateToProps = (state) => {
    return { clothes: state.clothes };
  };
export default connect(mapStateToProps, actions)(Comp1);
