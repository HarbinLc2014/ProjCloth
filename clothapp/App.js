import { Notifications } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import WelcomeScreen from './common/WelcomeScreen';
import LoginScreen from './common/LoginScreen';
import HomeScreen from './common/HomeScreen';
import MatchScreen from './common/MatchScreen';
import ProfileScreen from './common/ProfileScreen';
import ClothScreen from './common/ClothScreen';
import reducers from './common/reducers';
import registerForNotifications from './services/push_notifications';

export default class App extends Component {
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
        login: { screen: LoginScreen },
        main: { screen: TabNavigator({
          home: {
             screen: StackNavigator({
               hscreen: { screen: HomeScreen }
             })
           },
          list: {
             screen: StackNavigator({
               favor: { screen: ClothScreen }
             })
           },
          match: {
             screen: StackNavigator({
               mscreen: { screen: MatchScreen }
             })
           },
          profile: {
             screen: StackNavigator({
               pfile: { screen: ProfileScreen }
             })
           },
        }) }
       }, {
         navigationOptions: {
      //     tabBar: { visible: false }
          tabBarVisible: false
         },
         lazyLoad: true
       });
          return (
          <Provider store={createStore(reducers)}>
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
