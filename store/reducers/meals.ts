import Meal from "../../models/meal";
import { MEALS } from "../../data/data";

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[] | undefined;
}

const initialState: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (state: MealsState = initialState, action: any) => {
  return state;
};
