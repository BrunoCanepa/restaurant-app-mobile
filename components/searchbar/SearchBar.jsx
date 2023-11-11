import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');

  const findData = (query) => {
    if (query === '') {
      return [];
    }

    const filteredData = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    return filteredData;
  };

  return (
    <View style={styles.container}>
      <Autocomplete
        placeholder='Buscar...'
        data={findData(query)}
        defaultValue={query}
        onChangeText={(text) => setQuery(text)}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
});

export default SearchBar;
