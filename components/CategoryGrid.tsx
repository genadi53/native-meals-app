import React from "react";
import {
  GestureResponderEvent,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Category from "../models/category";

interface CategoryGridProps {
  category: Category;
  onSelect: ((event: GestureResponderEvent) => void) | undefined;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelect, category }) => {
  // console.log(props);

  //   let TouchableComponent: TouchableOpacity | TouchableNativeFeedback =
  //     TouchableOpacity as any;
  //   if (Platform.OS === "android" && Platform.Version >= 21) {
  //     TouchableComponent = TouchableNativeFeedback as any;
  //   }

  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onSelect}>
        <View style={[styles.container, { backgroundColor: category.color }]}>
          <Text style={styles.title} numberOfLines={2}>
            {category.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});

export default CategoryGrid;
