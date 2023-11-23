import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { storeContext } from '../../Store/StoreProvider';
import { useContext } from 'react';

//Componente para mostrar los restaurantes y shows en carrusel en la pantalla principal

const CardSlider = ({ navigation, type }) => {

  const [store] = useContext(storeContext);

  //Filtra la data según el tipo pasado como parametros para conseguir un array de shows o un array de restaurantes
  data = store.detalles.filter(item => type === item.type);

  return (
    <Carousel
      data={data}
      sliderWidth={400}
      sliderHeight={150}
      itemWidth={220}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Info", { item })}>
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.cardImage}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 220,
    height: 350,
    resizeMode: 'cover',
  },
});

export default CardSlider;
