import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import CustomHeaderButton from "../components/HeaderButtons";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

const FiltersScreen: NavigationStackScreenComponent = () => {
  return (
    <View style={styles.screen}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = {
  headerTitle: "Filter Meals",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FiltersScreen;
