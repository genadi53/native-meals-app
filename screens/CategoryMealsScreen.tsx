import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/data";
import Meal from "../models/meal";

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  CategoryMealsScreenProps
> = (props: any) => {
  const categoryId = props.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((c) => c.id === categoryId);
  const meals = MEALS.filter(
    (m: Meal) => m.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <MealItem
        meal={item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealsDetails",
            params: {
              mealId: item.id,
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

      {/* <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.navigate("CategoriesMeals");
          // props.navigation.push("CategoriesMeals");
          // props.navigation.replace("CategoriesMeals"); // cannot go back
          // props.navigation.pop(); // only in stack navigator
          // props.navigation.popToTop();
        }}
      /> */}
    </View>
  );
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
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default CategoryMealsScreen;
