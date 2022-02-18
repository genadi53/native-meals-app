import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { useSelector } from "react-redux";
import Meal from "../models/meal";
import { MealsState } from "../store/reducers/meals";
import MealItem from "./MealItem";
// import {
//   NavigationProp,
//   NavigationScreenProp,
//   NavigationParams,
// } from "react-navigation";

interface MealListProps {
  meals: Meal[];
  navigation: NavigationScreenProp<any, any>;
}

const MealList: React.FC<MealListProps> = ({ navigation, meals }) => {
  const favoriteMeals = useSelector(
    (state: { meals: MealsState }) => state.meals.favoriteMeals
  );

  const renderMealItem = ({ item }: { item: Meal }) => {
    const isFavorite = favoriteMeals.find((meal: Meal) => meal.id === item.id);

    return (
      <MealItem
        meal={item}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealsDetails",
            params: {
              mealId: item.id,
              mealTitle: item.title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={(meal, _idx) => meal.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
