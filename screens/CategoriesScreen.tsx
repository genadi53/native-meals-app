import React from "react";
import { FlatList, StyleSheet } from "react-native";
import {
  NavigationStackOptions,
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from "react-navigation-stack";
import CategoryGrid from "../components/CategoryGrid";
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
      <CategoryGrid
        category={item}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoriesMeals",
            params: {
              categoryId: item.id,
            },
          });
        }}
      />
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

const styles = StyleSheet.create({});

export default CategoriesScreen;
