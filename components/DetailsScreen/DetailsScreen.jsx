import React from 'react';
import { Button, View, Text, StyleSheet, Image, FlatList } from 'react-native';

function DetailsScreen({ navigation, route }) {
    const { item } = route.params;
    return (
      <View style={styles.details}>
        <Image source={item.image}
        style={{
          height: 350,
          width: 200,
        }}/>
        {item.type == 'restaurant' && <Text>Menú: </Text>}
        
        <FlatList
          data={item.menu}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    details: {
      justifyContent: "center",
      alignItems: "center"
    },
  });

  export default DetailsScreen;