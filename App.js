import React from 'react';
import { Button, View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import CardSlider from './components/restaurants/CardSlider';
import SearchBar from './components/searchbar/SearchBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { storeContext } from './Store/StoreProvider';
import { useContext } from 'react';
import StoreProvider from "./Store/StoreProvider";

const Icons = [
  require("./assets/McDonalds.png"),
  require("./assets/BurguerKing.png"),
  require("./assets/KFC.png"),
  require("./assets/Wendys.png"),
];

const images = [
  'https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1024x572.png',
  'https://brandemia.org/contenido/subidas/2021/12/bk_rebrand_stills_vi_1_logo.jpg',
  'https://static.vecteezy.com/system/resources/previews/024/693/620/original/kfc-logo-transparent-free-png.png',
 
]; 

const images2 = [
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/next-party-banner-design-template-aec806778f544b35aead11938d164d4c_screen.jpg?ts=1637052273",
  "https://img.freepik.com/psd-premium/festival-carnaval-banner-portugues-no-brasil-render-3d-espectaculo-evento-diseno-plantilla-realista_363450-2146.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/night-party-flyer-design-template-425d1866998f7f54a793a7b3348bbaa4.jpg?ts=1641177421",

];

const data= [
  "McDonalds",
  "Burguer King",
  "Kentaki Fried Chicken",
  "Wendys"
];



function HomeScreen({ navigation }) {
  
  const store = useContext(storeContext);
  const {detalles} = store; 

  return (
    
      <View style={styles.container}>
        
        <CardSlider images={store[0].restaurantes} navigation={navigation} details={detalles}/>
        <SearchBar data={store[0].data} />
        <CardSlider images={store[0].shows} navigation={navigation} details={detalles}/>
        
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="All restaurants"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    
  );
}

function DetailsScreen({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={styles.details}>
      <Image source={item.image}
      style={{
        height: 240,
        width: 240,
      }}/>
      
      <Text>Menú: </Text>
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

const Stack = createNativeStackNavigator();
function App() {
  return (
    <StoreProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    justifyContent: "center",
    alignItems: "center"
  },
  list: {
    flex: 1,
  }
});

export default App;

