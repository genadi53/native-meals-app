import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FiltersScreen;
