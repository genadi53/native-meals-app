import React, { useCallback, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  // NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButtons";
import Meal from "../models/meal";
import { toggle_favorite } from "../store/actions/meal";
import { MealsState } from "../store/reducers/meals";

interface MealDetailsScreenProps {
  navigation: NavigationStackScreenProps;
}

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = (props: NavigationStackScreenProps) => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals: Meal[] = useSelector(
    (state: { meals: MealsState }) => state.meals.meals
  );
  const favoriteMeals: Meal[] = useSelector(
    (state: { meals: MealsState }) => state.meals.favoriteMeals
  );
  const isFavorite: boolean = favoriteMeals.some(
    (meal: Meal) => meal.id === mealId
  );
  const selectedMeal: Meal | undefined = availableMeals.find(
    (meal) => meal.id === mealId
  );

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggle_favorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal?.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal?.title });
    props.navigation.setParams({ isFav: isFavorite });
  }, [isFavorite]);

  if (selectedMeal) {
    return (
      <ScrollView>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    );
  }
};

MealDetailsScreen.navigationOptions = (navigationData: any) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={() => {
            // console.log("Mark as favorite!");
            toggleFavorite();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailsScreen;
