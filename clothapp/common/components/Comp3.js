import React, { Component } from 'react';
import { Text, View, Platform, AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
    AlertIOS,
  TouchableOpacity } from 'react-native';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { TimerMixin } from 'react-timer-mixin';
import Images from './Image';

const ImageData = require('../ImageData.json');
const SCREEN_WIDTH = Dimensions.get('window').width;

class Comp3 extends Component {
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
        var i = 0;
        var allImage = [];
        return Images.bigjson.map(big => {
          return(
            <TouchableOpacity key={big.id} onPress={() => { this.props.press({ msg: big.src, thumbnail: big.id }); }}>
            <Image key={i} source={Images.big[big.id]} resizeMode='stretch' style={{ flex: 1, width: SCREEN_WIDTH/4, height: SCREEN_WIDTH/2.5, marginRight: 15, marginLeft: 15, borderWidth: 10, borderRadius: 10, borderColor: 'rgba(0,0,0,0)', marginTop: 7.5, marginBottom: 7.5 }} />
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
                style={{ width: SCREEN_WIDTH, height: (SCREEN_WIDTH / 2.5)+15, backgroundColor: 'rgba(0,0,0,0.2)' }}
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

  });
export default Comp3;
