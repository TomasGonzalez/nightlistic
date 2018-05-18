import React, {Component} from 'react';
import { TouchableOpacity, View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import openMap from 'react-native-open-maps';

data = [
  {
    name: 'Yao',
    location: null,
    description: 'restaurante, chino y japones',
    type: ['Restaurante', 'chino', 'japones'],
    image: 'https://www.omnihotels.com/-/media/images/hotels/bospar/restaurants/bospar-omni-parker-house-parkers-restaurant-1170.jpg',
    schedule: {openAt: null, closesAt: null}
  },
  {
    name: 'Lasagna',
    location: null,
    description: 'restaurante, de comida italiana',
    type: ['Restaurante', 'pastas', 'italiano', 'pizza'],
    image: 'https://lefooding.com/media/W1siZiIsIjIwMTYvMDcvMTgvMTRfMzJfMjZfNTk0X2Jhcl9oYXJyeXNfbmV3X3lvcmtfYmFyX3BhcmlzLmpwZyJdLFsicCIsInRodW1iIiwiNjcyeDYwMCJdXQ/bar-harrys-new-york-bar-paris.jpg?sha=3a132a68',
    schedule: {openAt: null, closesAt: null}
  },
  {
    name: 'Boca Negra y romo y menore',
    location: null,
    description: 'discoteca pa menore',
    type: ['Club', 'baile', 'musica', 'bar'],
    image: 'https://i.ytimg.com/vi/YbSu7yhw74o/maxresdefault.jpg',
    schedule: {openAt: null, closesAt: null}
  },
  {
    name: 'moriqueta',
    location: null,
    description: 'un bar ahi',
    type: ['Bar', 'restaurante', 'musica'],
    image: 'http://infoguiaelsalvador.com/wp-content/uploads/infoguia-rumbas-discotec-bar-03.jpg',
    schedule: {openAt: null, closesAt: null}
  }
];

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: 'rgba(255,255,255,0.94)',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingTop: 28,
    marginBottom: 10,
    height: 200,
    width: 200,
    paddingLeft: 20,
  },
})

class SwipeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SwipeScreen',
    headerStyle: {
      backgroundColor: '#052743',
    },
  })

  componentWillMount = () => {
    if(data[0].image){
      this.setState({club: {uri: data[0].image}})
    }
  }

  _renderItem({item, index}) {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end', width: '100%', backgroundColor: 'black'}}>
        <Image
          style= {{height: '100%', width: '100%', position: 'absolute', opacity: 0.8, backgroundColor: 'black' }}
          source={{uri: item.image}}
        />
        <View style={{width: 300, height: 200, alignSelf: 'center', marginBottom: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>(openMap({ latitude: 37.865101, longitude: -119.538330 }))} style={{backgroundColor: 'white', width: 100}}>
            <Image
              style={{height: '100%', width: 100}}
              source={require('app/containers/images/mapIcon.jpg')}
            />
          </TouchableOpacity>
          <View style={{paddingTop: 20, paddingLeft: 20, paddingRight: 20, alignSelf: 'center', backgroundColor: 'rgba(255,255,255,0.8)', width: 185, height: 170}}>
            <Text style={{color: 'grey', fontSize: 18}}>{item.type[0]}</Text>
            <Text style={{fontSize: 24}}>{item.name}</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, marginBottom: 10}}> ? </Text>
              <Text style={{fontSize: 20, marginBottom: 10}}> 270.2 KM </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center',backgroundColor: '#DFBB7F', borderRadius: 2, width: 52, height: 52, position: 'absolute', alignSelf: 'flex-end', marginLeft: 248}}>
            <Text style={{fontSize: 14, alignSelf: 'center'}}> INFO </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={data}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={(element)=>{ this.setState({club: {uri: data[element].image} })}}
        />
      </View>
    )
  }
}

export default SwipeScreen;
