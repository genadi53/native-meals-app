import Meal from "../../models/meal";
import { MEALS } from "../../data/data";
import { Actions } from "../actions/meal";

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
      console.log(state);
      console.log(action.payload.mealId);

      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.mealId
      );
      console.log(existingIndex);
      if (existingIndex >= 0) {
        const updatedFavorites: Meal[] = [...state.favoriteMeals];
        console.log(updatedFavorites);
        updatedFavorites.splice(existingIndex, 1);
        console.log(updatedFavorites);
        return { ...state, favoriteMeals: updatedFavorites };
      } else {
        const mealToAdd = state.meals.find(
          (meal: Meal) => meal.id === action.payload.mealId
        );
        console.log(mealToAdd);
        return {
          ...state,
          favoriteMeals: mealToAdd
            ? state.favoriteMeals.concat(mealToAdd)
            : state.favoriteMeals,
        };
      }
    }

    default:
      return state;
  }
};
