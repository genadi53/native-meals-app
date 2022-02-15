import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MealList from "../components/MealList";
import Meal from "../models/meal";
import { MEALS } from "../data/data";

const FavoritesScreen: NavigationStackScreenComponent = (props: any) => {
  const favMeals = MEALS.filter((m: Meal) => m.id === "m1" || m.id === "m2");
  return <MealList meals={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
