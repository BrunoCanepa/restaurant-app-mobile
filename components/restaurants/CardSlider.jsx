import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { storeContext } from '../../Store/StoreProvider';
import { useContext } from 'react';

const CardSlider = ({ navigation, type, details }) => {
  const [store] = useContext(storeContext);
  data = store.detalles;
  if (type == "shows"){
    data = store.shows;
  }
  return (
    <Carousel
      layout="default"
      data={data}
      sliderWidth={300}
      itemWidth={200}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> navigation.navigate("Details", {item})}>
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.cardImage}
            />
          </View>
        </TouchableOpacity>
      )}
      sliderHeight={150} 
    />
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 200, 
    height: 350, 
    resizeMode: 'cover',
  },
});

export default CardSlider;
