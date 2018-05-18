import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import TotokaButton from 'app/components/TotokaButton.js';

class WelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Nombre de la aplicacion',
    headerStyle: {
      backgroundColor: 'white',
    },
  })

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
        <View style={{height: '70%', alignItems: 'center', justifyContent: 'space-around'}}>
          <TotokaButton name='Usuarios'/>
          <TotokaButton name='Negocios'/>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;
