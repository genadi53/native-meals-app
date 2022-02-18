import Meal from "../../models/meal";
import { MEALS } from "../../data/data";
import { Actions, FilterSettings } from "../actions/meal";

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

const initialState: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (
  state: MealsState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Actions.TOGGLE_FAVORITE: {
      // console.log(state);
      // console.log(action.payload.mealId);

      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.mealId
      );
      // console.log(existingIndex);
      if (existingIndex >= 0) {
        const updatedFavorites: Meal[] = [...state.favoriteMeals];
        updatedFavorites.splice(existingIndex, 1);
        // console.log(updatedFavorites);
        return { ...state, favoriteMeals: updatedFavorites };
      } else {
        const mealToAdd = state.meals.find(
          (meal: Meal) => meal.id === action.payload.mealId
        );
        // console.log(mealToAdd);
        return {
          ...state,
          favoriteMeals: mealToAdd
            ? state.favoriteMeals.concat(mealToAdd)
            : state.favoriteMeals,
        };
      }
    }

    case Actions.SET_FILTERS: {
      const appliedFilters: FilterSettings = action.payload.filters;
      // console.log(appliedFilters);
      const filteredMeals = state.meals.filter((meal: Meal) => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      // console.log(filteredMeals);
      return { ...state, filteredMeals };
    }

    default:
      return state;
  }
};
