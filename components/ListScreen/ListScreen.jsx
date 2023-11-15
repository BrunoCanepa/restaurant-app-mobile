
import React from 'react';
import { useContext } from 'react';
import { storeContext } from '../../Store/StoreProvider';
import { StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

function ListScreen({navigation}) {

    const [store] = useContext(storeContext);
    const {detalles} = store;
  
    return (
      <FlatList 
      data={detalles}
      renderItem={ ({ item, index }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
          <Image source={item.image}
            key={index}
            style={{
              justifyContent: 'flex-start',
              width:200,
              height:200,
              margin:8
            }}
          />
        </TouchableOpacity>
      )}
    />
    );
  }
  export default ListScreen;