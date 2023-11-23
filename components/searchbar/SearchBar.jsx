import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { storeContext } from '../../Store/StoreProvider';
import { useContext } from 'react';

//Componente de barra de busqueda más botón para ir a todos los restaurantes

const SearchBar = ({ navigation }) => {

  //Variable para obtener lo escrito
  const [input, setInput] = useState('');

  const [store] = useContext(storeContext);
  const data = store.detalles;

  //Funcion para obtener la data filtrada en funcion de lo escrito
  const findData = (input) => {
    //Si no se escribe nada, no hay data
    if (input == "") {
      return ("");
    }

    //Compara la propiedad text de cada item del array con cada letra de lo escrito para devolver el array con las posibles opciones
    const filteredData = data.filter((item) => item.text.toLowerCase().includes(input.toLowerCase()));
    return filteredData;
  };

  //Funcion para navegar a la lista de todos los restaurantes y shows
  const showAll = () => {
    navigation.navigate('¡Disfruta!');
  }

  //Funcion para navegar al detalle de cada item mostrado en el desplegable
  const handleItemClick = (item) => {
    navigation.navigate("Info", { item });
  };

  return (
    <View style={styles.container}>
      <Autocomplete
        placeholder='Buscar...'
        data={findData(input)}
        onChangeText={(text) => setInput(text)}
        flatListProps={{
          renderItem: ({ item }) => <TouchableOpacity onPress={() => handleItemClick(item)} ><Text>{item.text}</Text></TouchableOpacity>,
        }}
      />
      <Button title="search 🔎" onPress={() => showAll()} ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
});

export default SearchBar;
