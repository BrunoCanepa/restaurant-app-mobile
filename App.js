import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoreProvider from "./Store/StoreProvider";
import HomeScreen from './components/HomeScreen/HomeScreen';
import DetailsScreen from './components/DetailsScreen/DetailsScreen';
import ListScreen from './components/ListScreen/ListScreen';

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

export default App;