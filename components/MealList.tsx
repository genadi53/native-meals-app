import React from "react";
import {
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  View,
} from "react-native";
import MealItem from "./MealItem";
import Meal from "../models/meal";
import { NavigationScreenProp } from "react-navigation";
// import {
//   NavigationProp,
//   NavigationScreenProp,
//   NavigationParams,
// } from "react-navigation";

interface MealListProps {
  meals: Meal[];
  navigation: NavigationScreenProp<any, any>;
}

const MealList: React.FC<MealListProps> = ({ navigation, meals }) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return (
      <MealItem
        meal={item}
        onSelectMeal={() => {
          navigation.navigate({
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
