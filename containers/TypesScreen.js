import React, {Component} from 'react';
import {TouchableOpacity, View, FlatList, Text, StyleSheet} from 'react-native';


TypeData = ["Entretenimiento",
        "Restaurante",
        "Bar",
        "Discoteca",
        "Niños",
        "Cafe",
        "Comida Rapida",
        "Pasteleria",
      ];

const styles = StyleSheet.create({
  listItem: {
    height: 60,
    borderBottomWidth: 3,
    borderBottomColor: '#C3FFDD',
    justifyContent: 'center',
  },
})

class TypesScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'TotokaApp',
    headerStyle: {
      backgroundColor: '#052743',
    }
  })

render_item = (data) => (
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("SwipeScreen")} style={styles.listItem}>
    <Text style={{marginLeft: 10, color: '#123A5D', fontWeight: 'bold', fontSize: 24}}>{data.item}</Text>
  </TouchableOpacity>
)

  render(){
    return(
      <View style={{backgroundColor: 'white', flex: 1}}>
        <FlatList
          data={TypeData}
          renderItem={this.render_item}
          />
      </View>
    )
  }
}
export default TypesScreen;
