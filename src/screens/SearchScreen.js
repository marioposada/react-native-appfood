import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByprice = (price) => {
    // price === '$' ||  '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultByprice("$")}
          title="Const Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultByprice("$$")}
          title="Big pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultByprice("$$$")}
          title="Big spender"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default SearchScreen;
