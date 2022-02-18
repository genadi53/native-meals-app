export const Actions = {
  TOGGLE_FAVORITE: "toggle_favorite",
  SET_FILTERS: "set_filters",
};

export const toggle_favorite = (mealId: string) => {
  return { type: Actions.TOGGLE_FAVORITE, payload: { mealId: mealId } };
};

export interface FilterSettings {
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

export const setFilters = (filterSettings: FilterSettings) => {
  return {
    type: Actions.SET_FILTERS,
    payload: {
      filters: filterSettings,
    },
  };
};
