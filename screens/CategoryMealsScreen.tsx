import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/data";
import Meal from "../models/meal";

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  CategoryMealsScreenProps
> = (props: any) => {
  const categoryId = props.navigation.getParam("categoryId");
  // const currentCategory = CATEGORIES.find((c) => c.id === categoryId);
  const meals = MEALS.filter(
    (m: Meal) => m.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList meals={meals} navigation={props.navigation} />;
  /* <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.navigate("CategoriesMeals");
          // props.navigation.push("CategoriesMeals");
          // props.navigation.replace("CategoriesMeals"); // cannot go back
          // props.navigation.pop(); // only in stack navigator
          // props.navigation.popToTop();
        }}
      /> */
};

CategoryMealsScreen.navigationOptions = (navData: any) => {
  // console.log(navData);
  const categoryId = navData.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((c) => c.id === categoryId);

  return {
    headerTitle: currentCategory ? currentCategory.title : "Other Category",
  };
};

export default CategoryMealsScreen;
