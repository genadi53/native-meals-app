import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/data";
import Meal from "../models/meal";
import { MealsState } from "../store/reducers/meals";

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  CategoryMealsScreenProps
> = (props: any) => {
  const categoryId = props.navigation.getParam("categoryId");
  // const currentCategory = CATEGORIES.find((c) => c.id === categoryId);

  const availableMeals: Meal[] = useSelector(
    (state: { meals: MealsState }) => state.meals.filteredMeals
  );
  const meals = availableMeals.filter(
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
