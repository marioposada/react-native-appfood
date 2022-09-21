import { StyleSheet, Text, TextInput, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
