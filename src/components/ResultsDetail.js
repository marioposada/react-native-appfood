import {Image, StyleSheet, Text, View} from 'react-native'

import React from 'react'

const ResultsDetail = ({result}) => {
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    )
}

const style =  StyleSheet.create ({
    
})

export  default  ResultsDetail;

