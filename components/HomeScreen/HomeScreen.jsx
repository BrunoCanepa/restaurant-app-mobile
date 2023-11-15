import CardSlider from '../restaurants/CardSlider';
import SearchBar from '../searchbar/SearchBar';
import React from 'react';
import { useContext } from 'react';
import { storeContext } from '../../Store/StoreProvider';
import { Button, View, StyleSheet, } from 'react-native';

function HomeScreen({ navigation }) {
  
    const store = useContext(storeContext);
  
    return (
      
        <View style={styles.container}>
          <CardSlider images={store[0].restaurantes} navigation={navigation} type="restaurants"/>
          <SearchBar data={store[0].data} />
          <CardSlider images={store[0].shows} navigation={navigation} type="shows"/>
          <Button
            title="All restaurants"
            onPress={() => navigation.navigate('List')}
          />
        </View>
    );
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}});

export default HomeScreen;