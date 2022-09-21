import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    return(
        <View style={styles.container}>
            <SearchBar />
            <Text>Pantalla de  busqueda</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',
        flex: 1
    } 
    
})

export default  SearchScreen;

