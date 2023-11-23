import React from 'react';
import { Button, View, Text, StyleSheet, Image, FlatList } from 'react-native';

//Componente de pantalla de detalles de restaurante/show

function DetailsScreen({ navigation, route }) {

  const { item } = route.params;

  return (
    <View style={styles.details}>
      {/* Pone estilo al banner segun el tipo */}
      {item.type == 'show' && <Image source={item.banner} style={styles.bannerShow} />}
      {item.type == 'restaurant' && <Image source={item.banner} style={styles.bannerRestaurant} />}

      <Text style={styles.menu} >{item.infoType}</Text>

      {/*Si es restaurante se renderiza una flatlist con el menu, si es show se renderiza un texto de descripcion del show */}

      {item.type == 'restaurant' && <FlatList
        data={item.menu}
        renderItem={({ item }) => <View style={styles.itemMenu}>
          <Text style={styles.product}>{item.key}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>}
      />}
      {item.type == 'show' && <Text style={styles.description} >{item.description}</Text>}
      <Button
        style={styles.button}
        title="Pagina Principal"
        onPress={() => navigation.navigate('Culinarte')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    height: '100%',
  },
  bannerRestaurant: {
    width: '100%',
    height: 125,
    marginBottom: 50,
  },
  bannerShow: {
    width: '100%',
    height: 200,
    marginBottom: 50,
  },
  menu: {
    fontSize: 40,
    marginBottom: 15
  },
  itemMenu: {
    flex: 1,
    flexDirection: 'row',
  },
  product: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 10
  },
  price: {
    position: 'absolute',
    right: 20,
    fontSize: 20,
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
  description: {
    height: 383
  }

});

export default DetailsScreen;