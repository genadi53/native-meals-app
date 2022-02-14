import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailsScreen</Text>
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

export default MealDetailsScreen;
