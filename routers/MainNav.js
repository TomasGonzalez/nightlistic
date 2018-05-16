import React,{Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import SwipeScreen from 'app/containers/SwipeScreen.js';

const DefaultNavigator = StackNavigator({
  SwipeScreen: {
    screen: SwipeScreen,
  },
})

export default DefaultNavigator;
