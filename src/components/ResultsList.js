import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ResultsList = ({title}) => {
return (
    <View>
        <Text style={style.title}>{title}</Text>
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

