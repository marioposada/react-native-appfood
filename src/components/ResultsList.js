import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultsDetail from "./ResultsDetail";

import React from "react";

const ResultsList = ({ title, results }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail  result={item}/>;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10,


  }
});

export default ResultsList;
