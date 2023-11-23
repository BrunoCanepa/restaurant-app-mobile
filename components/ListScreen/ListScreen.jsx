import React from 'react';
import { StyleSheet, View } from 'react-native';
import Scrolleable from '../Scrolleable/Scrolleable';

//Componente de pantalla de listado de restaurantes y shows

function ListScreen({ navigation }) {

  return (
    <View style={styles.container} >

      <Scrolleable navigation={navigation} type="restaurant" title="Restaurantes" />
      <Scrolleable navigation={navigation} type="show" title="Shows" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListScreen;