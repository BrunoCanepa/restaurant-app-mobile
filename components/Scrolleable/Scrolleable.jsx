import React from 'react';
import { useContext } from 'react';
import { storeContext } from '../../Store/StoreProvider';
import { StyleSheet, Image, FlatList, TouchableOpacity, View, Text } from 'react-native';

//Componente para la lista de restaurante/show para el listado de todos los restaurantes y shows

const Scrolleable = ({ navigation, type, title }) => {

    const [store] = useContext(storeContext);

    //Data filtrada para obtener un array de restaurantes o de shows segun la propiedad type pasada como parametro
    data = store.detalles.filter(item => type === item.type);

    return (
        <View style={styles.listContainer}>
            <Text style={styles.title} > {title} </Text>
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Info', { item })}>
                        <Image source={item.image}
                            key={index}
                            style={styles.card}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
    },
    listContainer: {
        alignItems: 'center',
        width: '50%'
    },
    title: {
        fontSize: 20
    },
    flatList: {
        width: '100%'
    },
    card: {
        justifyContent: 'flex-start',
        width: '100%',
        height: 250,
        margin: 8
    }
});

export default Scrolleable;