import React from "react";
import {
  GestureResponderEvent,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Meal from "../models/meal";

interface MealItemProps {
  meal: Meal;
  onSelectMeal: ((event: GestureResponderEvent) => void) | undefined;
}

const MealItem: React.FC<MealItemProps> = ({ onSelectMeal, meal }) => {
  //   let TouchableComponent: TouchableOpacity | TouchableNativeFeedback =
  //     TouchableOpacity as any;
  //   if (Platform.OS === "android" && Platform.Version >= 21) {
  //     TouchableComponent = TouchableNativeFeedback as any;
  //   }

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={{ height: 300 }}>
          <View style={[styles.mealRow, styles.mealHeader]}>
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {meal.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={[styles.mealRow, styles.mealDetail]}>
            <Text>{meal.complexity.toUpperCase()}</Text>
            <Text>{meal.affordability.toUpperCase()}</Text>
            <Text>{meal.duration}m</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    flexShrink: 0,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default MealItem;
