import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { RestaurantIcon, StarIcon } from "../components/TabIcons";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import colors from "../constants/customColors";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen as any,
    CategoriesMeals: CategoryMealsScreen,
    MealsDetails: {
      screen: MealDetailsScreen as any,
      // navigationOptions: {},
    },
  },
  {
    // initialRouteName: "Categories",
    mode: "modal", // "card",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primary_color : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : colors.primary_color,
    },
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    // initialRouteName: "Categories",
    mode: "modal", // "card",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primary_color : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : colors.primary_color,
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return <RestaurantIcon tabInfo={tabInfo} />;
      },
      tabBarColor: colors.primary_color,
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return <StarIcon tabInfo={tabInfo} />;
      },
      tabBarColor: colors.secondary_color,
    },
  },
};

const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.secondary_color,
          inactiveTintColor: "grey",
        },
      });

export default createAppContainer(BottomTabNavigator);
