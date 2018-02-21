import { Notifications } from 'expo';
import React, { Component } from 'react';
import wilddog from 'wilddog';
import { StyleSheet, Text, View, Platform, StatusBar, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StackNavigator, TabNavigator } from 'react-navigation';
import WelcomeScreen from './common/WelcomeScreen';
import LoginScreen from './common/LoginScreen';
import HomeScreen from './common/HomeScreen';
import NotificationScreen from './common/NotificationScreen';
import MatchScreen from './common/MatchScreen';
import Information from './common/Information';
import ProfileScreen from './common/ProfileScreen';
import ClothScreen from './common/ClothScreen';
import OrderScreen from './common/OrderScreen';
import SettingScreen from './common/SettingScreen';
import HistoryScreen from './common/HistoryScreen';
import Manual from './common/Manual';
import Order from './common/Order';
import SignUpForm from './common/components/SignUpForm';
import SignInForm from './common/components/SignInForm';
import reducers from './common/reducers';
import registerForNotifications from './services/push_notifications';

export default class App extends Component {
  componentWillMount() {
    var config = {
  authDomain: 'wd7622364344zejjra.wilddog.com'
};
wilddog.initializeApp(config);
  }
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;

      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'Ok.' }]
        );
      }
    });
  }
  render() {
    const MainNavigator = TabNavigator({
        welcome: { screen: WelcomeScreen },
        login: { screen: StackNavigator({
        signin: { screen: SignInForm },
        signup: { screen: SignUpForm }
      }) },
        main: { screen: TabNavigator({
          home: {
             screen: StackNavigator({
               hscreen: { screen: HomeScreen },
               notify: { screen: NotificationScreen }
             })
           },
          list: {
             screen: StackNavigator({
               favor: { screen: ClothScreen },
               order: { screen: Order }
             })
           },
          match: {
             screen: StackNavigator({
               mscreen: { screen: MatchScreen }
             })
           },
          profile: {
             screen: StackNavigator({
               pfile: { screen: ProfileScreen },
               history: { screen: HistoryScreen },
               order: { screen: Order },
               oscreen: { screen: OrderScreen },
               setting: { screen: SettingScreen },
               information: { screen: Information },
               manual: { screen: Manual }
             })
           },
        }) }
       }, {
         navigationOptions: {
      //     tabBar: { visible: false }
    //      tabBarVisible: false
         },
         lazyLoad: true
       });
          return (
          <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
              <View style={styles.container}>
              <MainNavigator />
              </View>
              </Provider>


          );
      }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,

      },

      status_bar: {
          backgroundColor: 'white',
          ...Platform.select({
              android: {
                  height: StatusBar.currentHeight
              },
              ios: {
                  height: 20,
              }
          }),
      },
  });
