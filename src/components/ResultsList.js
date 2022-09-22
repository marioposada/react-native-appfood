import { FlatList, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ResultsList = ({title,results}) => {
return (
    <View>
        <Text style={style.title}>{title}</Text>
        <FlatList 
        horizontal
        data={results}
        keyExtractor={(result) =>  result.id}
        renderItem={({item}) => {
    return <Text>{item.name}</Text>
    }}
        
        
        
        />
    </View>
)    
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        
        
    }
    
})

export default ResultsList;

