import CardSlider from '../restaurants/CardSlider';
import SearchBar from '../searchbar/SearchBar';
import React from 'react';
import { View, StyleSheet, } from 'react-native';

//Componente de pantalla principal

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <CardSlider navigation={navigation} type="restaurant" />
      <SearchBar navigation={navigation} />
      <CardSlider navigation={navigation} type='show' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;