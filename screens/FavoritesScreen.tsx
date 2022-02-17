import React from "react";
import { NavigationDrawerProp } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/HeaderButtons";
import MealList from "../components/MealList";
import { MEALS } from "../data/data";
import Meal from "../models/meal";
import { MealsState } from "../store/reducers/meals";

const FavoritesScreen: NavigationStackScreenComponent = (props: any) => {
  const favMeals: Meal[] | undefined = useSelector(
    (state: { meals: MealsState }) => state.meals.favoriteMeals
  );

  const favMeals2 = MEALS.filter((m: Meal) => m.id === "m1" || m.id === "m2");
  return (
    <MealList
      meals={favMeals ? favMeals : favMeals2}
      navigation={props.navigation}
    />
  );
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
