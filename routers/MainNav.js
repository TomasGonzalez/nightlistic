import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import SwipeScreen from 'app/containers/SwipeScreen.js';
import WelcomeScreen from 'app/containers/WelcomeScreen.js';
import TypesScreen from 'app/containers/TypesScreen.js';

const DefaultNavigator = StackNavigator({
  TypesScreen: {
    screen: TypesScreen,
  },
  SwipeScreen: {
    screen: SwipeScreen,
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
})

export default DefaultNavigator;
