import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/data";
import Meal from "../models/meal";
import { MealsState } from "../store/reducers/meals";

const CategoryMealsScreen: NavigationStackScreenComponent = (props: any) => {
  const categoryId = props.navigation.getParam("categoryId");
  // const currentCategory = CATEGORIES.find((c) => c.id === categoryId);

  const availableMeals: Meal[] = useSelector(
    (state: { meals: MealsState }) => state.meals.filteredMeals
  );
  const meals = availableMeals.filter(
    (m: Meal) => m.categoryIds.indexOf(categoryId) >= 0
  );

  if (meals.length === 0) {
    <View style={styles.screen}>
      <DefaultText>No meals found. Check your filters!</DefaultText>
    </View>;
  }
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;
