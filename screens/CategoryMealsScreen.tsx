import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES } from "../data/data";

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationStackScreenComponent<
  CategoryMealsScreenProps
> = (props: any) => {
  const categoryId = props.navigation.getParam("categoryId");
  const currentCategory = CATEGORIES.find((c) => c.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Text>{currentCategory?.title}</Text>
      <Button
        title="Go To Details Meals"
        onPress={() => {
          props.navigation.navigate("MealsDetails");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop(); // only in stack navigator
          // props.navigation.popToTop();
        }}
      />
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;
