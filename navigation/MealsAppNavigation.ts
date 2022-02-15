import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import colors from "../constants/customColors";

const Navigator = createStackNavigator(
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

export default createAppContainer(Navigator);
