import React from "react";
import { Platform, Text } from "react-native";
import {
  createAppContainer,
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfig,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { RestaurantIcon, StarIcon } from "../components/TabIcons";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import colors from "../constants/customColors";
import {
  StackNavigationOptions,
  StackNavigationProp,
} from "react-navigation-stack/lib/typescript/src/vendor/types";

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
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : colors.primary_color,
    },
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen as NavigationRouteConfig<
      StackNavigationOptions,
      StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>,
      unknown
    >,
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

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
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
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return <StarIcon tabInfo={tabInfo} />;
      },
      tabBarColor: colors.secondary_color,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const BottomTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: colors.primary_color,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.secondary_color,
          inactiveTintColor: "grey",
          labelStyle: {
            fontFamily: "open-sans",
          },
        },
      });

const DrawerNavigator = createDrawerNavigator(
  {
    MealsFavorites: {
      screen: BottomTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.secondary_color,
      labelStyle: {
        fontFamily: "opens-sans-bold",
      },
    },
    navigationOptions: {},
  }
);

export default createAppContainer(DrawerNavigator);
