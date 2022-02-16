import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  NavigationStackOptions,
  NavigationStackScreenComponent,
  NavigationStackScreenProps,
} from "react-navigation-stack";
import { NavigationScreenProp } from "react-navigation";
import { NavigationDrawerProp } from "react-navigation-drawer";
import CategoryGrid from "../components/CategoryGrid";
import CustomHeaderButton from "../components/HeaderButtons";
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

const navigationOptions: NavigationStackOptions = (navigationData: any) => {
  const { navigation }: { navigation: NavigationDrawerProp<any, any> } =
    navigationData;
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            console.log("open");
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
CategoriesScreen.navigationOptions = navigationOptions;

const styles = StyleSheet.create({});

export default CategoriesScreen;
