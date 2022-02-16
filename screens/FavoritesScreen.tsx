import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MealList from "../components/MealList";
import Meal from "../models/meal";
import { MEALS } from "../data/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButtons";
import { NavigationDrawerProp } from "react-navigation-drawer";

const FavoritesScreen: NavigationStackScreenComponent = (props: any) => {
  const favMeals = MEALS.filter((m: Meal) => m.id === "m1" || m.id === "m2");
  return <MealList meals={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData: any) => {
  const { navigation }: { navigation: NavigationDrawerProp<any, any> } =
    navigationData;
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
