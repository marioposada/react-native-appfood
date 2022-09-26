import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultsDetail from "./ResultsDetail";

import React from "react";

const ResultsList = ({ title, results }) => {
  return (
    <View>
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
  },
});

export default ResultsList;
