import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationDrawerProp } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButtons";
import MealList from "../components/MealList";
import Meal from "../models/meal";
import { MealsState } from "../store/reducers/meals";

const FavoritesScreen: NavigationStackScreenComponent = (props: any) => {
  const favMeals: Meal[] | undefined = useSelector(
    (state: { meals: MealsState }) => state.meals.favoriteMeals
  );

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <DefaultText>No favorite meals found. Add some!</DefaultText>
      </View>
    );
  }
  return <MealList meals={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData: any) => {
  const { navigation }: { navigation: NavigationDrawerProp<any, any> } =
    navigationData;
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
