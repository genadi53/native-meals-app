import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {
  HeaderButtons,
  Item,
  HiddenItem,
} from "react-navigation-header-buttons";
import { MEALS } from "../data/data";
import CustomHeaderButton from "../components/HeaderButtons";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from "react-navigation-stack";

interface MealDetailsScreenProps {
  navigation: NavigationStackScreenProps;
}

const MealDetailsScreen = (props: NavigationStackScreenProps) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal ? selectedMeal.title : "Unknown meal"}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal ? selectedMeal.title : "Unknown meal",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
