import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  NavigationStackOptions,
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from "react-navigation-stack";
import { CATEGORIES } from "../data/data";
import Category from "../models/category";

interface CategoriesScreenProps {
  // navigation: NavigationScreenProp<any, any>;
  // navigation: NavigationProp<NavigationParams>;
  navigation: NavigationStackScreenProps;
  // navigationOptions: NavigationStackOptions;
}

const CategoriesScreen: NavigationStackScreenComponent<
  CategoriesScreenProps
> = (props: any) => {
  // console.log(props);

  const renderGridItem = ({ item }: { item: Category }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoriesMeals",
            params: {
              categoryId: item.id,
            },
          });
          // props.navigation.navigate("CategoriesMeals");
          // props.navigation.push("CategoriesMeals");
          // props.navigation.replace("CategoriesMeals"); // cannot go back
        }}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
      keyExtractor={(item, _idx) => item.id}
    />
  );
};

const navigationOptions: NavigationStackOptions = {
  headerTitle: "Meal Categories",
};
CategoriesScreen.navigationOptions = navigationOptions;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
