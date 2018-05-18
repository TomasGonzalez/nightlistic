import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const TotokaButton = (props) => (
  <TouchableOpacity style={styles.TotokaButton}>
    <Text style={styles.buttonText}> {props.name} </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  TotokaButton: {
    borderRadius: 5,
    backgroundColor: 'blue',
    height: 80,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default TotokaButton
